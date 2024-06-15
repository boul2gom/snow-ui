import React from "react";
import { Stated } from "../utils/props";
import clsx from "clsx";
import Button from "../Button/Button";
import { addMonths, subMonths } from "date-fns";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export interface Properties extends Stated<Date> {}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const PickerControls: React.FC<Properties> = ({ state: [month, setMonth] }) => {
    const chevron_left = <IconChevronLeft size={16} strokeWidth={1.75} />;
    const chevron_right = <IconChevronRight size={16} strokeWidth={1.75} />;
    
    return (
        <div className={clsx("flex items-center", "px-4 pt-4 justify-between")}>
            <div className="flex flex-row items-start justify-start gap-2">
                <Button size="small" style="gray" className="rounded px-1 py-0.5" onClick={() => setMonth(new Date())}>
                    Today
                </Button>
                <Button size="small" style="gray" className="rounded px-1 py-0.5" disabled>
                    Last selection
                </Button>
            </div>

            <div className="flex flex-row items-start justify-start gap-2">
                <Button size="small" style="borderless" left={chevron_left} onClick={() => setMonth(subMonths(month!, 1))} />
                    { month && months[month.getMonth()] }
                <Button size="small" style="borderless" right={chevron_right} onClick={() => setMonth(addMonths(month!, 1))} />
            </div>
        </div>
    );
};

export default PickerControls;