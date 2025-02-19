import type { HTMLAttributes } from 'react';

import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';
import { addDays } from 'date-fns';
import { format } from 'date-fns-jalali';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';

import atomStore from 'src/store';
import { cn } from 'src/lib/utils';
import { StoreType } from 'src/types';
import { Button } from 'src/components/ui/button';
import { Calendar } from 'src/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from 'src/components/ui/popover';

export function DatePickerWithRange({ className }: HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(), -7),
    to: new Date(),
  });
  const [, setStore] = useAtom<StoreType>(atomStore);

  useEffect(() => {
    setStore((prev) => ({ ...prev, date }));
  }, [date, setStore]);

  return (
    <div className={cn('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'yyyy MMMM d')} - {format(date.to, 'yyyy MMMM d')}
                </>
              ) : (
                format(date.from, 'yyyy MMMM d')
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
            weekStartsOn={6}
            numerals="arabext"
            onSelect={setDate}
            numberOfMonths={2}
            timeZone="Asia/Tehran"
            defaultMonth={date?.from}
            captionLayout="dropdown-years"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
