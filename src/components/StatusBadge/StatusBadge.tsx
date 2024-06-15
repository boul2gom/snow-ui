import React from "react";
import { Polymorphic } from "../utils/props";
import clsx from "clsx";
import { IconPointFilled } from "@tabler/icons-react";
import { capitalize, contains } from "../utils/string";

export interface Properties extends Polymorphic<"div"> {
    status: "in progress" | "complete" | "pending" | "approved" | "rejected";
    background?: boolean;
}

const styles = {
    "in progress": { text: "text-[#8A8CD9]", dot: "text-[#95A4FC]", background: "bg-[#EDEDFF]" },
    "complete": { text: "text-[#4AA785]", dot: "text-[#A1E3CB]", background: "bg-[#DEF8EE]" },
    "pending": { text: "text-[#59A8D4]", dot: "text-[#B1E3FF]", background: "bg-[#E2F5FF]" },
    "approved": { text: "text-[#FFC555]", dot: "text-[#FFE999]", background: "bg-[#FFFBD4]" },
    "rejected": { text: "text-black text-opacity-40", dot: "text-black text-opacity-40", background: "bg-black bg-opacity-5" },
};

export const StatusBadge: React.FC<Properties> = ({ status, background = false, as: Component = "div", children, ...props }) => {
    const text_styles = clsx({
        
    
    const background_styles = clsx({
        "bg-[#EDEDFF]": contains(status, "in progress"),
        "bg-[#DEF8EE]": contains(status, "complete"),
        "bg-[#E2F5FF]": contains(status, "pending"),
        "bg-[#FFFBD4]": contains(status, "approved"),
        "bg-black bg-opacity-5": contains(status, "rejected"),
    });

    return (
        <Component
            className={clsx("flex items-center justify-center", "rounded-[80px]", background && styles[status].background, "px-2 py-px", props.className)}
            {...props}
        >
            {!background && <IconPointFilled size={16} className={clsx(styles[status].dot, "transform translate-y-px")} />}
            <span className={clsx("text-xs font-medium leading-5", styles[status].text)}>
                {capitalize(status)}
            </span>
        </Component>
    );
};

export default StatusBadge;