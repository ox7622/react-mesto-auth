import { useState } from "react";
export function useForm(input) {

const [values, setValues] = useState(input);
 const handleChange= (e) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value})
 };
return {values, setValues, handleChange};
}