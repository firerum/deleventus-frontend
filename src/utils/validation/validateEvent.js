import * as yup from 'yup';

export const createEventSchema = yup.object({
    name: yup.string().required(),
    // category: yup
    //     .mixed()
    //     .oneOf([
    //         'wedding',
    //         'birthday',
    //         'anniversary',
    //         'convocation',
    //         'concert',
    //         'other',
    //     ])
    //     .required(),
    // venue: yup.string().required(),
    description: yup.string().required(),
    visibility: yup.string().oneOf(['public', 'private', 'personal']),
    // date_of_event: yup.date().required(),
    ticket_type: yup.string().oneOf(['free', 'paid']),
    ticket_quantity: yup
        .number()
        .positive()
        .integer()
        .transform((value, originalValue) => {
            if (originalValue === '') {
                return null;
            }
            return value;
        })
        .nullable()
        .optional(),
    ticket_price: yup
        .number()
        .positive()
        .integer()
        .transform((value, originalValue) => {
            if (originalValue === '') {
                return null;
            }
            return value;
        })
        .nullable()
        .optional(),
});
