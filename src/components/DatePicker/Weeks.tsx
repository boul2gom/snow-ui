import React from "react";
import { addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from "date-fns";
import { State } from "../utils/types";
import Week from "./Week";

export interface Properties {
    month: State<Date>
    first: State<Date | undefined>;
    second: State<Date | undefined>;

    on_click: (date: Date) => void;
}

export const Weeks: React.FC<Properties> = ({ month: [month, setMonth], first: [first, setFirst], second: [second, setSecond], on_click }) => {
    const month_start = startOfMonth(month);
    const month_end = endOfMonth(month_start);
    const start_date = startOfWeek(month_start, { weekStartsOn: 1 });
    const end_date = endOfWeek(month_end, { weekStartsOn: 1 });

    const rows = [];
    let day = start_date;

    while (day <= end_date) {
        rows.push(
            <Week week_start={day} month_start={month_start} first={first} second={second} on_click={on_click} />
        );

        day = addDays(day, 7);
    }

    return (
        <div className="flex flex-col w-full">
            { rows }
        </div>
    );
};

export default Weeks;