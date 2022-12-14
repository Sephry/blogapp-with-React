import DatePicker from 'react-datepicker';
import { useEffect, useState } from 'react';

export default function HomeDatePicker() {

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date().setMonth(startDate.getMonth() + 1))

    useEffect(() => {
        if (startDate > endDate) setStartDate(endDate)
    }, [endDate])

    useEffect(() => {
        if (startDate > endDate) setEndDate(startDate)
    }, [startDate])

    return (
        <div className='m-4' >
             <div className="flex space-x-4">
                <span className="font-normal text-gray-900 p-1">Event Dates:</span>
                <div className="relative w-32">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-left"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="relative w-32">
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-right"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
        </div>

           
    );
}
