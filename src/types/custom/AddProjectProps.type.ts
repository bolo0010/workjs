import {ModalProps} from "../interfaces";

export type AddProjectProps = ModalProps & {
    changed: boolean;
    setChanged: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}