import React from "react";
import Logo from "../Logo/Logo";
import clsx from "clsx";

export const Sidebar: React.FC = () => {
    const classes = clsx("w-[212px] gap-y-2 px-4 py-4", "border-r border-black border-opacity-10");

    //Center the logo in the div
    return (
        <div className={clsx("flex flex-col overflow-hidden", classes)}>

            <div className="flex justify-center rounded-lg px-2 py-2">
                <Logo />
            </div>
        </div>
    )
};

export default Sidebar;