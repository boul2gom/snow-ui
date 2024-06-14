import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import { Polymorphic } from '../utils/props';

export interface Properties extends Polymorphic<'button'> {
    size?: 'small' | 'medium' | 'large';
    style?: 'borderless' | 'gray' | 'outline' | 'filled' | 'custom';
    disabled?: boolean;

    right?: React.ReactNode;
    left?: React.ReactNode;
    withArrow?: boolean;

    onClick?: () => void;
}

const sizes = {
    small: { padding: 'px-2', py: 'py-1', rounded: 'rounded-lg', text: 'text-sm', space: 'space-x-1', square: 'px-1', arrow: 16 },
    medium: { padding: 'px-4', py: 'py-2', rounded: 'rounded-xl', text: 'text-base', space: 'space-x-2', square: 'px-2', arrow: 20 },
    large: { padding: 'px-6', py: 'py-3', rounded: 'rounded-2xl', text: 'text-lg', space: 'space-x-2', square: 'px-3', arrow: 24 },
};

const classes = {
    borderless: { button: 'text-black text-opacity-100 hover:bg-black hover:bg-opacity-5', arrow: 'text-black text-opacity-40' },
    gray: { button: 'text-black bg-black bg-opacity-5 text-opacity-100 hover:bg-opacity-20 disabled:bg-opacity-5', arrow: 'text-black text-opacity-40' },
    outline: { button: 'text-black border border-solid border-black border-opacity-20 hover:bg-black hover:bg-opacity-5 disabled:border-opacity-10', arrow: 'text-black text-opacity-40' },
    filled: { button: 'text-white bg-black hover:bg-opacity-40 disabled:text-black disabled:bg-opacity-5', arrow: 'text-white text-opacity-40' },
    custom: { button: 'text-black text-opacity-100', arrow: 'text-black text-opacity-40' },
};

export const Button: React.FC<Properties> = ({
    size = 'medium', style = 'outline', right, left, withArrow = false,
    disabled = false, onClick, as: Component = 'button', children, className, ...props
}) => {
    if (withArrow) right = <IconChevronDown size={sizes[size].arrow} strokeWidth={1.25} className={classes[style].arrow} />;

    const square = (!children && right && !left) || (!children && !right && left) as boolean;

    const padding = square ? sizes[size].square : sizes[size].padding;
    const sized = clsx(sizes[size].py, sizes[size].rounded, sizes[size].text, sizes[size].space, padding);

    const styles = clsx("disabled:text-opacity-10", classes[style].button, { "cursor-not-allowed": disabled });

    return (
        <Component
            className={clsx("flex items-center justify-center", sized, styles, className)}
            onClick={onClick} disabled={disabled} {...props}
        >
            {left}
            {children && <div className="px-1">{children}</div>}
            {right}
        </Component>
    );
};

export default Button;