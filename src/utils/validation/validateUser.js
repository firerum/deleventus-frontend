import * as yup from 'yup';

export const signInSchema = yup
    .object({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })
    .required();

export const signUpSchema = yup
    .object({
        email: yup
            .string()
            .email('Invalid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })
    .required();

export const updateUserSchema = yup.object({
    first_name: yup.string(),
    last_name: yup.string(),
    password: yup.string(),
    username: yup.string(),
    phone_no: yup.string(),
    city: yup.string(),
    country: yup.string(),
});
