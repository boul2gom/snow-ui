import React from "react";
import { Base } from "../utils/props";
import clsx from "clsx";
import { contains } from "../utils/string";
import { IconPointFilled } from "@tabler/icons-react";

export interface Properties extends Base {
    type: "number" | "dot";
};

export const Badge: React.FC<Properties> = ({ type, children, className, ...props }) => {
    if (contains(type, 'dot')) return <IconPointFilled size={16} className={clsx("text-[#C6C7F8]", className)} />;

    const styles = clsx("flex items-center justify-center", "rounded-[80px] px-1.5 py-px", "bg-[#C6C7F8]");
    return (
        <div className={clsx(styles, className)} {...props}>
            {children}
        </div>
    );
};

export default Badge;