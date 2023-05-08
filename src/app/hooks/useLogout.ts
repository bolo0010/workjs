import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_URL} from "../config/api_url";

const useLogout = () => {
    const navigate = useNavigate();

    return async () => {
        try {
            const response = await axios({
                method: 'GET',
                url: `${API_URL}api/auth/logout`,
                withCredentials: true,
            })
            if (response.status === 200) {
                sessionStorage.removeItem('user');
                navigate('/', {state: {message: "Zostałeś wylogowany."}, replace: true});
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export default useLogout;