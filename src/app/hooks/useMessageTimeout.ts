import {useEffect} from 'react';

const useMessageTimeout = (setShow: (value: (((prevState: boolean) => boolean) | boolean)) => void, message: string, time: number) => {
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
