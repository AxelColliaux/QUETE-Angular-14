import { Adress } from "./adress";

export class User {
    constructor(
        public username: string,
        public email: string,
        public password: string,
        public address: Adress
    ){}
}