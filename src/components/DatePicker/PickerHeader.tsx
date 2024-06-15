import clsx from "clsx";
import { format } from "date-fns";

export interface Properties {
    first?: Date;
    second?: Date;

    range: boolean;
}

export const PickerHeader: React.FC<Properties> = ({ first, second, range }) => {
    const first_slash = <span className="text-black text-opacity-20">/</span>;
    const opacity = (range && second) ? "text-opacity-20" : "text-opacity-0";
    const second_slash = <span className={clsx("text-black", opacity)}>/</span>;

    const number = (value: string) => <div className="px-1 py-0.5 rounded">{value}</div>;
    const hour = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

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
    
    return (
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
    );
};

export default PickerHeader;