import {useEffect} from 'react';
import {UseMessageTimeoutProps} from "../../types/interfaces";

const useMessageTimeout = ({setShow, message, time}: UseMessageTimeoutProps) => {
    useEffect(() => {
        if (!message) {
            setShow(false);
            return;
        }
        setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
        }, time);
        return () => clearTimeout(timeout);
    }, [message]);
};

export default useMessageTimeout;
