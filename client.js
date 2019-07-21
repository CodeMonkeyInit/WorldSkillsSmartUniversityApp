/**
 * Клиент для работы с апи сервера
 */
class ApiClient {

    /**
     *
     * @param token Токен
     * @returns {Promise<any>}
     */
    async getRooms(token) {
        let roomsResponse = await fetch(ApiPath + "/rooms", {
            headers: headersWithToken(token),
            method: "GET"
        });

        return await roomsResponse.json();
    }

    /**
     *
     * @param token Токен
     * @returns {Promise<any>}
     */
    async getMacros(token) {
        let macroResponse = await fetch(ApiPath + "/macros", {
            headers: headersWithToken(token),
            method: "GET"
        });

        return await macroResponse.json();
    }

    /**
     *
     * @param token Токен
     * @returns {Promise<any>}
     */
    async getDevices(roomId, token) {
        let devicesResponse = await fetch(ApiPath + `/rooms/${roomId}/devices`, {
            headers: headersWithToken(token),
            method: "GET"
        });

        return await devicesResponse.json();
    }

    /**
     *
     * @param token Токен
     * @returns {Promise<any>}
     */
    async addMacro(macroJson, token) {
        let response = await fetch(ApiPath + `/macros`, {
            headers: headersWithToken(token),
            body: macroJson,
            method: "POST"
        });

        return await response.json();
    }

    /**
     *
     * @param token Токен
     * @returns {Promise<any>}
     */
    async removeMacro(macroId, token) {
        let response = await fetch(ApiPath + `/macros/${macroId}`, {
            headers: headersWithToken(token),
            method: "DELETE"
        });

        return await response.json();
    }

    async activateMacro(macroId, token) {
        let response = await fetch(ApiPath + `/macros/${macroId}`,
            {
                headers: headersWithToken(token),
                method: "PATCH"
            }
        );

        let result = await response.json();

        if(result.success){
            alert("Макрос активирован!")
        }
    }
}