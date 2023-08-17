import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateField = ({ placeholder, selected, setSelected, required }) => {
    return (
        <div className="w-full">
            <DatePicker
                selected={selected}
                onChange={(date) => setSelected(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText={placeholder}
                required={required}
                className="w-full mb-4 rounded-default px-4 py-default border-1 border-secondary-purple relative z-20"
            />
        </div>
    );
};

// export const TimeField = () => {
//     return (

//     )
// }
