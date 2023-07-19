import {useEffect} from "react";
import {UseUpdateWindowInnerWidthProps} from "../../types/interfaces";

const useUpdateWindowInnerWidth = ({setInnerWidth}: UseUpdateWindowInnerWidthProps) => {
    useEffect(() => {
        const updateWindowDimensions = () => {
            const width = window.innerWidth;
            setInnerWidth(width);
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, [])
}

export default useUpdateWindowInnerWidth;