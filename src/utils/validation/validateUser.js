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
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    password: yup.string().required(),
    username: yup.string().required(),
    phone_no: yup.string().required(),
    city: yup.string().required(),
    country: yup.string().required(),
});
