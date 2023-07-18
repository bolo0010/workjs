import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {UseReactRouteCheckProps} from "../../types/interfaces";

const useReactRouteCheck = ({setUserId, accountType}: UseReactRouteCheckProps) => {
    const navigate = useNavigate();
        const navigateToLogin = () => navigate('/', {
        state: {message: "Nie posiadasz uprawnień do przeglądania tej podstrony."},
        replace: true
    });


    useEffect(() => {
        const user = sessionStorage.getItem('user');
        if (!user) {
            navigateToLogin();
            return;
        }
        const {account_type, id} = JSON.parse(user);
        if (account_type !== accountType) {
            navigateToLogin();
            return;
        } else setUserId(id);
    }, [])
}

export default useReactRouteCheck;