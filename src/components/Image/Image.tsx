import React from "react";
import { Polymorphic } from "../utils/props";
import clsx from "clsx";
import { contains } from "../utils/string";
import {IconCircle} from "@tabler/icons-react";

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

    const circle_stroke = option ? 1.25 : 2;
    const circle_size = contains(size, 'normal') ? "h-6 w-6" : "h-4 w-4";
    const circle = option ? "hover:bg-black hover:bg-opacity-20" : isSelected ? "bg-white bg-opacity-80" : null;

    return (
        <div onClick={() => { on_select(!isSelected); setSelected(!isSelected); }} className={container}>
            <div className={div}>
                <Component src={src} className={image} {...props} />
                { circle && <div className="absolute top-0 right-0">
                    { option ? <IconCircle className={clsx(circle_size, circle)} stroke={circle_stroke} /> : null }
                    { isSelected ? <IconCircle className={clsx(circle_size, circle)} stroke={circle_stroke} /> : null }
                </div> }
            </div>
        </div>    
    );
}

export default Image;