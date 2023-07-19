import {useEffect} from 'react';
import {UseMessageTimeoutProps} from "../../types/interfaces";

const useMessageTimeout = ({setShow, message, setMessage, time}: UseMessageTimeoutProps) => {
    useEffect(() => {
        if (!message) {
            setShow(false);
            setMessage('');
            return;
        }
        setShow(true);
        const timeout = setTimeout(() => {
            setShow(false);
            setMessage('');
        }, time);
        return () => clearTimeout(timeout);
    }, [message]);
};

export default useMessageTimeout;
