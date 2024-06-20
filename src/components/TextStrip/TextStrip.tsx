import clsx from "clsx";
import { Polymorphic, Sizeable } from "../utils/props";

export interface Properties extends Polymorphic<'div'>, Sizeable {
    strip: boolean;
};

export const TextStrip: React.FC<Properties> = ({ 
    strip, width = 160, height = 28, as: Component = 'div', 
    className, children, ...props
}) => {
    const styles = { width: `${width}px`, height: `${height}px` };
    const classes = clsx("rounded-lg items-center text-center", {
        "bg-[#C6C7F8]": strip,
        "bg-black bg-opacity-5": !strip,
    }, className);

    return <Component className={classes} style={styles} {...props}> { children } </Component>;
};

export default TextStrip;