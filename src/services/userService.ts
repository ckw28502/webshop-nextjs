import { RegisterDto } from "@/dto/requests/registerDto";
import axiosInstance from "../utils/axios";

const PATH = "/user";

async function createUser(request: RegisterDto): Promise<void> {
    axiosInstance.post(PATH, request);
}

const userService = { 
    createUser
 }

 export default userService;