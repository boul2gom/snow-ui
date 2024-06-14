import React from "react";
import { Base } from "../utils/props";
import clsx from "clsx";
import Button from "../Button/Button";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { addDays, addMonths, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, isWithinInterval, startOfMonth, startOfWeek, subDays, subMonths } from "date-fns";

export interface Properties extends Base {
    onChange: (first: Date, second?: Date) => void;
    
    initialFirst?: Date;
    initialSecond?: Date;

    range?: boolean;
}

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const DatePicker: React.FC<Properties> = ({ onChange, initialFirst = new Date(), initialSecond, range = false }) => {
    const [initial, setInitial] = React.useState<boolean>(true);
    const [month, setMonth] = React.useState<Date>(new Date());

    const [first, setFirst] = React.useState<Date | undefined>(initialFirst);
    const [second, setSecond] = React.useState<Date | undefined>(initialSecond);

    const first_slash = <span className="text-black text-opacity-20">/</span>;
    const opacity = (range && second) ? "text-opacity-20" : "text-opacity-0";
    const second_slash = <span className={clsx("text-black", opacity)}>/</span>;

    const number = (value: string) => <div className="px-1 py-0.5 rounded">{value}</div>;
    const hour = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const chevron_left = <IconChevronLeft size={16} strokeWidth={1.75} />;
    const chevron_right = <IconChevronRight size={16} strokeWidth={1.75} />;

    const button = "rounded-xl gap-2 px-2 py-1 w-[46.86px] h-[38px]";

    const format_date = (date: Date, second: boolean) => {
        const day = number(format(date, 'd'));
        const month = number(format(date, 'MM'));
        const year = number(format(date, 'yyyy'));

        const slash = second ? second_slash : first_slash;

        return (
            <div className="flex flex-row flex-start">
                {day} {slash} {month} {slash} {year}
            </div>
        );
    };

    const weeks = () => {
        const month_start = startOfMonth(month);
        const month_end = endOfMonth(month_start);
        const start_date = startOfWeek(month_start, { weekStartsOn: 1 });
        const end_date = endOfWeek(month_end, { weekStartsOn: 1 });

        const onClick = (date: Date) => {
            if (range) { 
                if (first && second) { setFirst(date); setSecond(undefined); onChange(date); }
                else if (first) {
                    const start = first.getTime() < date.getTime() ? first : date;
                    const end = first.getTime() < date.getTime() ? date : first;

                    if (initial) { setInitial(false); setFirst(date); onChange(date, second); }
                    else { setFirst(start); setSecond(end); onChange(start, end); }
                }
                else { setFirst(date); onChange(date); }
            } else { setFirst(date); onChange(date); }
        }

        const rows = [];
        let day = start_date;

        while (day <= end_date) {
            const week = [];
            
            for (let i = 0; i < 7; i++) {
                const current = new Date(day);

                const selected_day = isSameDay(current, first!) || isSameDay(current, second!);
                const today = isSameDay(current, new Date());

                const next = isSameDay(addDays(first!, 1), second!);
                const within = !next && isWithinInterval(current, { start: addDays(first!, 1), end: subDays(second!, 1) });

                const style = clsx(button, {
                    "bg-[#C6C7F8] bg-opacity-30": within,
                    "text-opacity-40": !isSameMonth(current, month_start),
                    "hover:bg-black hover:bg-opacity-5": !within && !today && !selected_day,
                    "bg-[#C6C7F8] bg-opacity-70 hover:bg-[#C6C7F8] hover:bg-opacity-70": today,
                    "bg-[#C6C7F8] bg-opacity-100 hover:bg-[#C6C7F8] hover:bg-opacity-100": selected_day,
                });

                week.push(
                    <Button size="medium" style="custom" className={style} onClick={() => onClick(new Date(current))}>
                        {format(new Date(current), 'd')}
                    </Button>
                );
                      
                day = addDays(day, 1);
            }
            rows.push(
                <div className="flex flex-row justify-between w-full">
                    {week}
                </div>
            );
        }

        return rows;
    };

    return (
        <div className="flex flex-col aspect-square rounded-2xl bg-white bg-opacity-80 border border-black border-opacity-10">
            {/* Header */}
            <div className="flex justify-between px-4 py-4 gap-2 border-b border-black border-opacity-10">
                <div className="flex flex-row gap-3">
                    { format_date(first!, false) }

                    { second && <div className={clsx("text-black", opacity)}> - </div> }
                    { second && <div className={clsx("text-black", opacity)}> { format_date(second, true) } </div> }
                </div>

                <div className="px-1 py-0.5 rounded">
                    { hour }
                </div>
            </div>

            {/* Controls */}
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
                    <Button size="small" style="borderless" left={chevron_left} onClick={() => setMonth(subMonths(month, 1))} />
                    { months[month.getMonth()] }
                    <Button size="small" style="borderless" right={chevron_right} onClick={() => setMonth(addMonths(month, 1))} />
                </div>
            </div>

            <div className="flex flex-col items-start justify-start px-4 py-4">
                {/* Days of the week */}
                <div className="flex flex-row justify-between w-full">
                    { days.map((day) => <div className={clsx(button, "text-center text-opacity-40")}> { day } </div>) }
                </div>


                {/* Rows of the calendar */}
                <div className="flex flex-col w-full">
                    { weeks() }   
                </div> 
            </div>
        </div>
    );
};

export default DatePicker;