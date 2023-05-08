import {UsersModel} from "../interfaces";

export type SecureUserModel = Omit<UsersModel, "hash" | "salt">