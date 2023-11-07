import { CreateUserData } from "../auth";

export type UpdateUserData = Omit<Partial<CreateUserData>, "password">;
