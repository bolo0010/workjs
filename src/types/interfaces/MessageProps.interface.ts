export interface MessageProps {
    title: string,
    message: string
    time: number,
    setMessage: (value: (((prevState: string) => string) | string)) => void,
}