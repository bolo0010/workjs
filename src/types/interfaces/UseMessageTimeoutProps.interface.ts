export interface UseMessageTimeoutProps {
    setShow: (value: (((prevState: boolean) => boolean) | boolean)) => void,
    message: string,
    time: number
}