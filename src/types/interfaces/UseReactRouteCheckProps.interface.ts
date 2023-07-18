import {AccountType} from "../enums";

export interface UseReactRouteCheckProps {
    setUserId: (value: (((prevState: string | undefined) => string | undefined) | string | undefined)) => void,
    accountType: AccountType
}