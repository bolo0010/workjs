export interface YesNoProps {
    title: string,
    text: string,
    show: boolean,
    handleClose: (decision: boolean) => void;
}
