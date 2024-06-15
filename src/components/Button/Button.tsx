import { IconChevronDown } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import { Polymorphic } from '../utils/props';
import { contains } from '../utils/string';

export interface Properties extends Polymorphic<'button'> {
    size?: 'small' | 'medium' | 'large';
    style?: 'borderless' | 'gray' | 'outline' | 'filled' | 'custom';
    disabled?: boolean;

    right?: React.ReactNode;
    left?: React.ReactNode;
    withArrow?: boolean;

    onClick?: () => void;
}

export const Button: React.FC<Properties> = ({
    size = 'medium', style = 'outline', right, left, withArrow = false,
    disabled = false, onClick, as: Component = 'button', children, className, ...props
}) => {
    const square = (!children && right && !left) || (!children && !right && left) as boolean;

    const arrow = clsx({
        "text-black text-opacity-40": contains(style, 'borderless', 'gray', 'outline', 'custom'),
        "text-white text-opacity-40": contains(style, 'filled'),
    })

    const classes = clsx({
        "py-1 rounded-lg text-sm space-x-1": contains(size, 'small'),
        "py-2 rounded-xl text-base space-x-2": contains(size, 'medium'),
        "py-3 rounded-2xl text-lg space-x-2": contains(size, 'large'),
    }, { //Add padding, depending if square or not
        "px-2": (square && contains(size, 'medium')) || (!square && contains(size, 'small')),
        "px-1": square && contains(size, 'small'),
        "px-3": square && contains(size, 'large'),
        "px-4": !square && contains(size, 'medium'),
        "px-6": !square && contains(size, 'large'),
    });

    const arrow_size = contains(size, 'small') ? 16 : contains(size, 'medium') ? 20 : 24;
    if (withArrow) right = <IconChevronDown size={arrow_size} strokeWidth={1.25} className={arrow} />;

    const styles = clsx("disabled:text-opacity-10", { "cursor-not-allowed": disabled }, {
        "text-black": contains(style, 'borderless', 'gray', 'outline', 'custom'),
        "text-white": contains(style, 'filled'),
    }, { 
        "text-opacity-100": contains(style, 'borderless', 'gray', 'outline', 'custom')
    }, {
        "hover:bg-black hover:bg-opacity-5": contains(style, 'borderless', 'outline'),
        "hover:bg-opacity-40": contains(style, 'filled'),
        "hover:bg-opacity-20": contains(style, 'gray'),
    }, {
        "disabled:bg-opacity-5 disabled:text-black": contains(style, 'gray', 'filled'),
        "disabled:border-opacity-10": contains(style, 'outline'),
    }, {
        "border border-solid border-black border-opacity-20" : contains(style, 'outline'),
    }, {
        "bg-black": contains(style, 'gray', 'filled')
    }, {
        "bg-opacity-5": contains(style, 'gray')
    });

    return (
        <Component
            className={clsx("flex items-center justify-center", classes, styles, className)}
            onClick={onClick} disabled={disabled} {...props}
        >
            {left}
            {children && <div className="px-1">{children}</div>}
            {right}
        </Component>
    );
};

export default Button;