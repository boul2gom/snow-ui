import React from "react";
import { Base } from "../utils/props";
import clsx from "clsx";
import { PickerControls } from "./PickerControls";
import { PickerHeader } from "./PickerHeader";
import Weeks from "./Weeks";

export interface Properties extends Base {
    on_change: (first: Date, second?: Date) => void;
    
    initialFirst?: Date;
    initialSecond?: Date;

    range?: boolean;
}

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const DatePicker: React.FC<Properties> = ({ on_change, initialFirst = new Date(), initialSecond, range = false }) => {
    const [initial, setInitial] = React.useState<boolean>(true);
    const month = React.useState<Date>(new Date());

    const [first, setFirst] = React.useState<Date | undefined>(initialFirst);
    const [second, setSecond] = React.useState<Date | undefined>(initialSecond);

    const on_click = (date: Date) => {
        if (range) { 
            if (first && second) { setFirst(date); setSecond(undefined); on_change(date); }
            else if (first) {
                const start = first.getTime() < date.getTime() ? first : date;
                const end = first.getTime() < date.getTime() ? date : first;

                if (initial) { setInitial(false); setFirst(date); on_change(date, second); }
                else { setFirst(start); setSecond(end); on_change(start!, end); }
            }
            else { setFirst(date); on_change(date); }
        } else { setFirst(date); on_change(date); }
    }

    return (
        <div className="flex flex-col aspect-square rounded-2xl bg-white bg-opacity-80 border border-black border-opacity-10">
            <PickerHeader first={first} second={second} range />

            <PickerControls state={month} />

            <div className="flex flex-col items-start justify-start px-4 py-4">
                {/* Days of the week */}
                <div className="flex flex-row justify-between w-full">
                    { days.map((day) => <div className={clsx("rounded-xl gap-2 px-2 py-1 w-[46.86px] h-[38px]", "text-center text-opacity-40")}>
                        { day }
                    </div>) }
                </div>


                <Weeks month={month} first={[first, setFirst]} second={[second, setSecond]} on_click={on_click} />
            </div>
        </div>
    );
};

export default DatePicker;