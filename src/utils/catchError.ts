import { AxiosError } from "axios";
import { removeUserFromStorage } from "./userStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const catchError = (e: any, defaultErrorMessage: string) => {
    const error = e as AxiosError
    if (error.response) {
        const serverError = error.response.data as AxiosError;
        const message = serverError.message;
        if (error.response.status === 401) {
            removeUserFromStorage()
            setTimeout(() => {
                const navigate = useNavigate()
                navigate('/login')
            }, 1000)
        }
        return toast.error(message || defaultErrorMessage)
    }
}