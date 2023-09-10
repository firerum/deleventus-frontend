'use client';
import { forwardRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

export const InputField = forwardRef(
    (
        { type, id, value, name, placeholder, onChange, errors, children },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <>
                {errors && (
                    <p className="text-left text-red-500 first-letter:uppercase mt-0">
                        {errors[name]?.message}
                    </p>
                )}
                <div className="mb-3 relative">
                    <input
                        type={
                            type === 'password'
                                ? showPassword
                                    ? 'text'
                                    : 'password'
                                : type
                        }
                        id={id}
                        value={value}
                        name={name}
                        placeholder={placeholder}
                        onChange={onChange}
                        className="pl-14 pr-4 py-default w-full border-1 border-secondary-purple rounded-default"
                        ref={ref}
                    />
                    {children && children}
                    {type === 'password' && (
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                setShowPassword(!showPassword);
                            }}
                        >
                            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                        </button>
                    )}
                </div>
            </>
        );
    }
);
