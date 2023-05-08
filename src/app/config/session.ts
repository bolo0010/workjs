import axios, {AxiosResponse} from "axios";
import {SecureUserModel} from "../../types/custom";
import {API_URL} from "./api_url";

export const Session = async () => {
    const session: AxiosResponse<SecureUserModel> = await axios({
        method: 'GET',
        url: `${API_URL}api/auth/session`,
        withCredentials: true,
    });
    sessionStorage.setItem('user', JSON.stringify(session.data))
}