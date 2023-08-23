import * as yup from 'yup';

export const createEventSchema = yup.object({
    name: yup.string().required(),
    category: yup
        .string()
        .isValid('wedding', 'birthday', 'anniversary', 'convocation', 'concert')
        .lowercase()
        .required(),
    venue: yup.string(),
    description: yup.string().required(),
    visibility: yup.string().isValid('public', 'private', 'personal'),
    date_of_event: yup.date().required(),
});
