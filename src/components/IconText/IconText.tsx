import clsx from "clsx";
import { Polymorphic } from "../utils/props";
import React from "react";

export interface Properties extends Polymorphic<"div"> {
    icon: React.ReactNode;
    position?: 'left' | 'right';
};

export const IconText: React.FC<Properties> = ({ icon, position = 'left', as: Component = 'div', children, className, ...props }) => {
    const styles = "flex items-center w-5 h-5"
    
    return (
        <Component className={clsx("flex items-center rounded-lg gap-1", className)} {...props}>
            {position === 'left' && <div className={styles}>{icon}</div>}
            <div> {children} </div>
            {position === 'right' && <div className={styles}>{icon}</div>}
        </Component>
    );
}