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
    ticket_quantity: yup.number(),
    ticket_price: yup.number(),
    ticket_type: yup.string(),
    // date_of_event: yup.date().required(),
});
