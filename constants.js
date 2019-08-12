class Components {
    static Login = "Login";
    static Device = "Device";
    static Macro = "Macro";
    static Room = "Room";
}

const ServerPath = "http://localhost:5000/";
const ApiPath = ServerPath + "api";

const Headers = [
    ["Content-Type", "application/json"]
];

const headersWithToken = (token) => [...Headers, ["Authorization", `Bearer ${token}`]];
