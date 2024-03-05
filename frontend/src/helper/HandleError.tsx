import axios from "axios";
import {toast} from "react-toastify";

export default function HandleError (error: any) {
    if (axios.isAxiosError(error)){
        let err = error.response;
        if (Array.isArray(err?.data.errors)){
            for (let val of err?.data.errors) {
                //react-toastify
                toast.warning(val.description);
            }
        }
        else if (typeof err?.data.errors === 'object'){
            for (let i in err?.data.errors){
                toast.warning(err.data.error[i][0]);
            }
        } else if (err?.data){
            toast.warning(err.data);
        } else if (err?.status === 401) {
            toast.warning("Please Login");
            window.history.pushState({}, "LoginPage", "admin/login");
        } else if (err) {
            toast.warning(err?.data);
        }
    }
}