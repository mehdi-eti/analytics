'use client';

import type { HTMLAttributes } from 'react';

import { useState } from 'react';
import { addDays, format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import classNames from "react-day-picker/style.module.css";

import { cn } from 'src/lib/utils';
import { Button } from 'src/components/ui/button';
import { Calendar } from 'src/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover';

export function DatePickerWithRange({ className }: HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant='outline'
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto m-0 p-0 bg-white" align="start">
          <Calendar
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            defaultMonth={date?.from}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
