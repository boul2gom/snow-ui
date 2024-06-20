import React from "react";
import { Polymorphic } from "../utils/props";
import clsx from "clsx";
import { IconPointFilled } from "@tabler/icons-react";
import { capitalize, contains } from "../utils/string";

export interface Properties extends Polymorphic<"div"> {
    status: "in progress" | "complete" | "pending" | "approved" | "rejected";
    background?: boolean;
};

export const StatusBadge: React.FC<Properties> = ({ status, background = false, as: Component = "div", ...props }) => {
    const text_styles = clsx({
        "text-[#8A8CD9]": contains(status, "in progress"),
        "text-[#4AA785]": contains(status, "complete"),
        "text-[#59A8D4]": contains(status, "pending"),
        "text-[#FFC555]": contains(status, "approved"),
        "text-black text-opacity-40": contains(status, "rejected"),
    });

    const dot_styles = clsx({
        "text-[#95A4FC]": contains(status, "in progress"),
        "text-[#A1E3CB]": contains(status, "complete"),
        "text-[#B1E3FF]": contains(status, "pending"),
        "text-[#FFE999]": contains(status, "approved"),
        "text-black text-opacity-40": contains(status, "rejected"),
    });
    
    const background_styles = clsx({
        "bg-[#EDEDFF]": contains(status, "in progress"),
        "bg-[#DEF8EE]": contains(status, "complete"),
        "bg-[#E2F5FF]": contains(status, "pending"),
        "bg-[#FFFBD4]": contains(status, "approved"),
        "bg-black bg-opacity-5": contains(status, "rejected"),
    });

    return (
        <Component
            className={clsx("flex items-center justify-center", "rounded-[80px]", background && background_styles, "px-2 py-px", props.className)}
            {...props}
        >
            {!background && <IconPointFilled size={16} className={clsx(dot_styles, "transform translate-y-px")} />}
            <span className={clsx("text-xs font-medium leading-5", text_styles)}>
                { capitalize(status) }
            </span>
        </Component>
    );
};

export default StatusBadge;