import {Polymorphic} from "../utils/props";
import React from "react";
import clsx from "clsx";

export interface Properties extends Polymorphic<'div'> {
    right?: React.ReactNode;
    left?: React.ReactNode;
}

export const Content: React.FC<Properties> = ({ right, left, as: Component = 'div', children, className, ...props }) => {
    const styles = clsx("flex items-center justify-between rounded-lg", "hover:bg-black hover:bg-opacity-5");

    return <Component className={clsx(styles, className)} {...props}> { left } { children } { right } </Component>;
};

export default Content;