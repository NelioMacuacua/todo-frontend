import api from "../../infra/services/api";
import { user } from "../../domain/user";

export const getUsers = async (): Promise<user[]> => {
    const response = await api.get<user[]>("/users");
    return response.data;
}

export const createUser = async (name: string, email: string): Promise<user> => {
    const response = await api.post<user>("/users", { name, email });
    return response.data;
}