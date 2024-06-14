import clsx from "clsx";
import { Polymorphic } from "../utils/props";

export interface Properties extends Polymorphic<"a"> {}

export const Link: React.FC<Properties> = ({ as: Component = "a", children, className, ...props }) => {
    const styles = clsx("rounded-lg", "text-black hover:text-[#95A4FC]", className);

    return <Component className={styles} {...props}>{children}</Component>;
}