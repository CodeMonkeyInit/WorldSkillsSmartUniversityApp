class Components {
    static Login = "Login";
    static Device = "Device";
    static Macro = "Macro";
    static Room = "Room";
}



const ServerPath = "http://api-ws.sevsu.ru/";
const ApiPath = ServerPath + "api";

const Headers = [
    ["Content-Type", "application/json"]
];

const headersWithToken = (token) => [...Headers, ["Authorization", `Bearer ${token}`]];
