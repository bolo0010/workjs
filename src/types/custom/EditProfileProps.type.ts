import {ModalProps} from "../interfaces";

export type EditProfileProps = ModalProps & {
    id: string
    changed: boolean;
    setChanged: (value: (((prevState: boolean) => boolean) | boolean)) => void,
}