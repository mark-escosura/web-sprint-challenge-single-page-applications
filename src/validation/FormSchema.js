import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
            .string()
            .trim()
            .required('Name is required!') 
            .min(2, 'name must be at least 2 characters'),
                // tell it to be a string and required
                // order matters
    instruction: yup
            .string(),
    size: yup
            .string()
            .oneOf(['small', 'medium', 'large', 'extra-large'], 'Size is required!'),
    pepperoni: yup
            .boolean(),
    onions: yup
            .boolean(),
    olives: yup
            .boolean(),
    ham: yup
            .boolean(),
    pineapple: yup
            .boolean(),
    sausage: yup
            .boolean()
})

export default formSchema;