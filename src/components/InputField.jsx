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
            {/* {label && <label htmlFor="">{label}</label>} */}
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="pl-14 pr-4 py-3 w-full border-1 border-secondary-purple rounded-default"
            />
        </div>
    );
};

export const InputDateTimeField = ({
    type,
    placeholder,
    onChange,
    required = false,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            className="px-4 py-3 mb-4 w-full border-1 border-secondary-purple rounded-default"
        />
    );
};
