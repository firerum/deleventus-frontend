import { InputField } from '@components/InputField';
import { SelectField } from '@components/SelectField';
import { FaMoneyBill, FaTicketAlt } from 'react-icons/fa';

export const EventTicket = ({ register, errors, setTicketType }) => {
    return (
        <div className="mt-12">
            <h2 className="text-base">Event Ticket</h2>

            <SelectField
                header={'TICKET TYPE'}
                setOption={setTicketType}
                required
            >
                <div>Free</div>
                <div>Paid</div>
            </SelectField>

            <InputField
                type="text"
                placeholder="available quantity"
                required
                {...register('ticket_quantity')}
                errors={errors}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaTicketAlt />
                </span>
            </InputField>
            <InputField
                type="text"
                placeholder="price"
                required
                {...register('ticket_price')}
                errors={errors}
            >
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-6 pr-2 border-r-1 border-solid">
                    <FaMoneyBill />
                </span>
            </InputField>

            {/* <div className="lg:flex gap-4 justify-between">
                <InputField
                    type="date"
                    placeholder="sales start"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
                <InputField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div>
            <div className="lg:flex gap-4 justify-between">
                <InputField
                    type="date"
                    placeholder="sales end"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
                <InputField
                    type="time"
                    placeholder="time"
                    required={true}
                    onChange={(e) => console.log(e.target.value)}
                />
            </div> */}
        </div>
    );
};
