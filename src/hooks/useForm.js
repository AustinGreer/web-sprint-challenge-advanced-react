import { useState } from 'react';

const useForm = (inputValues) => {
    const [values, setValues] = useState(inputValues);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return [values, handleChanges]
}

export default useForm;