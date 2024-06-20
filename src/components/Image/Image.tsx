import React from "react";
import { Polymorphic } from "../utils/props";
import clsx from "clsx";
import { contains } from "../utils/string";

export interface Properties extends Polymorphic<"img"> {
    size?: "small" | "normal"; // Normal is 80x80 and above
    option?: boolean;

    src: string;
    selected: boolean;
    on_select: (selected: boolean) => void;
}

export const Image: React.FC<Properties> = ({ size = "normal", option = false, src, selected, on_select, as: Component = "img", className, ...props }) => {
    const [isSelected, setSelected] = React.useState<boolean>(selected);
    
    const radius = clsx(contains(size, 'normal') ? "rounded-xl" : "rounded-lg");
    const container = clsx("bg-black bg-opacity-5", radius, {
        "p-2": contains(size, 'normal'),
        "p-1": contains(size, 'small')
    });

    const div = clsx("aspect-square overflow-hidden", radius, "hover:blur-sm", className);
    const image = clsx("object-cover");

    return (
        <div onClick={() => { on_select(!isSelected); setSelected(!isSelected); }} className={container}>
            <div className={div}> <Component src={src} className={image} {...props} /> </div>
        </div>    
    );
}

export default Image;