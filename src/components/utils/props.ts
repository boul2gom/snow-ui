import { State } from "./types";

export interface Base {
    className?: string;
    children?: React.ReactNode;
};

export interface Sizeable extends Base {
    width?: string | number;
    height?: string | number;
};

export interface Polymorphic<As extends React.ElementType> extends Base {
    as?: As,
};

export interface Stated<T> extends Base {
    state: State<T>
};