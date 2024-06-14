import { Polymorphic, Sizeable } from "../utils/props";

export interface Properties extends Polymorphic<"button">, Sizeable {
    searchable?: boolean;
};

export const Dropdown: React.FC<Properties> = ({ searchable, ...props }) => {
    return (
        <button {...props}>
            {searchable && <input />}
        </button>
    );
}