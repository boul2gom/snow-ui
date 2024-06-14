import React from "react";
import { Polymorphic } from "../utils/props";

import logo from "../../resources/snow-logo.svg";

export const Logo: React.FC<Polymorphic<"img">> = ({ as: Component = "img", ...props }) => {
    return <Component src={logo} alt="Logo" {...props} />;
}

export default Logo;