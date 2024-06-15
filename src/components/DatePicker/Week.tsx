import clsx from "clsx";
import { addDays, format, isSameDay, isSameMonth, isWithinInterval, subDays } from "date-fns";
import Button from "../Button/Button";

export interface Properties {
    week_start: Date;
    month_start: Date;
    first?: Date;
    second?: Date;

    on_click: (date: Date) => void;
}

const Week: React.FC<Properties> = ({ week_start, month_start, first, second, on_click }) => {
    const days = [];
    let day = week_start;

    for (let i = 0; i < 7; i++) {
        const current = new Date(day);

        const selected_day = isSameDay(current, first!) || isSameDay(current, second!);
        const today = isSameDay(current, new Date());

        const next = isSameDay(addDays(first!, 1), second!);
        const within = !next && isWithinInterval(current, { start: addDays(first!, 1), end: subDays(second!, 1) });
      
        const style = clsx("rounded-xl gap-2 px-2 py-1 w-[46.86px] h-[38px]", {
            "bg-[#C6C7F8] bg-opacity-30": within,
            "text-opacity-40": !isSameMonth(current, month_start),
            "hover:bg-black hover:bg-opacity-5": !within && !today && !selected_day,
            "bg-[#C6C7F8] bg-opacity-70 hover:bg-[#C6C7F8] hover:bg-opacity-70": today,
            "bg-[#C6C7F8] bg-opacity-100 hover:bg-[#C6C7F8] hover:bg-opacity-100": selected_day,
        });

        days.push(
            <Button size="medium" style="custom" className={style} onClick={() => on_click(new Date(current))}>
                {format(new Date(current), 'd')}
            </Button>
        );
          
        day = addDays(day, 1);
    }

    return (
      <div className="flex flex-row justify-between w-full">
        {days}
      </div>
    );
};

export default Week;