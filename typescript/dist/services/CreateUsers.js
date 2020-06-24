"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Estamos fazendo a desestruturação
//Estamos esperando receber algo com o formato do CreateUserData
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
