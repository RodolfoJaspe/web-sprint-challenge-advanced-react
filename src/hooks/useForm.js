import { useLocalStorage } from "./useLocalStorage";

export function useForm (initialValues) {
    const [values, setValues] = useLocalStorage("formValues", initialValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
    return [values, handleChanges]
}
