export interface ISignInData {
    email: String,
    password: String
}
export interface IRegisterInData {
    name: String,
    sobrenome: String,
    email: String,
    senha: String
}

export interface IUser {
    name: String,
    sobrenome: String,
    email: String,
    photo: String
}

export interface IUserRegister {
    login: String,
    lastName : String,
    email: String,
    senha: String
}