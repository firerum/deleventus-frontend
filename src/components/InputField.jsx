'use client';

export const InputField = ({
    type,
    value,
    name,
    label,
    placeholder,
    onChange,
}) => {
    return (
        <div className="mb-4">
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="pl-14 pr-4 py-default w-full border-1 border-secondary-purple rounded-default"
            />
        </div>
    );
};

export const InputDateTimeField = ({
    type,
    placeholder,
    onChange,
    required = false,
    label,
}) => {
    return (
        <div className="w-full relative mb-4 border-1 border-secondary-purple rounded-default">
            <input
                id="date-time"
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                className="w-full px-4 py-default relative z-10 bg-white"
            />
            {/* <label
                htmlFor="date-time"
                className="w-full px-4 py-default z-20 absolute top-0 bottom-0 left-0 right-0 bg-white "
            >
                {label}
            </label> */}
        </div>
    );
};
