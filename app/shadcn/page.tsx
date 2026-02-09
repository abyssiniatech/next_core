import React from "react";
import { Calendar } from "../../components/ui/calendar"; // Update this path if your Calendar component is elsewhere

export default function Dateshadcn() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border"
        />
    );
}