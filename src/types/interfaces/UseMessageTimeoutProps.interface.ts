export interface UseMessageTimeoutProps {
    setShow: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    setMessage: (value: (((prevState: string) => string) | string)) => void,
    message: string,
    time: number
}