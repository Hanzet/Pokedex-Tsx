import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';

interface SearchProps {
    name: string;
    placeholder: string;
    required?: string;
    onSearch: (value: string) => void;
    allowClear?: boolean;
    enterButton?: string | boolean;
    size?: 'small' | 'medium' | 'large';
    addonBefore?: string;
    value?: string;
}

const Search: React.FC<SearchProps> = ({
    name,
    placeholder,
    required,
    onSearch,
    allowClear = false,
    enterButton = false,
    size = 'medium',
    addonBefore,
}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<{ [key: string]: string }>();

    const onSubmit: SubmitHandler<{ [key: string]: string }> = (data) => {
        onSearch(data[name]);
        if (allowClear) reset();
    };

    const sizeStyles = {
        small: 'text-sm py-1 px-2',
        medium: 'text-base py-2 px-3',
        large: 'text-lg py-3 px-4'
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center space-x-2">
            {addonBefore && <span className="text-gray-500">{addonBefore}</span>}
            <div className="relative w-full">
                <input
                    {...register(name, { required })}
                    placeholder={placeholder}
                    className={classNames(
                        'w-full pl-10 pr-4 border rounded-lg shadow-sm focus:outline-none focus:border-blue-500',
                        errors[name] && 'border-red-500',
                        sizeStyles[size]
                    )}
                />
            </div>
            {(typeof enterButton === 'string' || enterButton) && (
                <button
                    type="submit"
                    className="ml-3 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                    {typeof enterButton === 'string' ? enterButton : 'Search'}
                </button>
            )}
            {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>}
        </form>
    );
};

export default Search;
