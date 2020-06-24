

interface TechObject{
    title: string,
    experience: number,
}

interface CreateUserData {
    name?: string, //Opcional
    email: string | boolean, //Pode ser string ou boolean (Nada a ver com o e-mail, mas bom para o aprendizado)
    password: string,
    techs: Array<string | TechObject> //Podemos ter tant um quanto o outro dentro
}

//Estamos fazendo a desestruturação
//Estamos esperando receber algo com o formato do CreateUserData
export default function createUser({ name, email, password }: CreateUserData){
    const user = {
        name,
        email,
        password,
    }

    return user;
}