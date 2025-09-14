import { useState, useEffect, use } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { DayOfWeek } from "@/app/data/types";
import { daysOfWeek } from "@/app/data";

type Props = {
  day: string,
  onDayChange: (day: DayOfWeek) => void
}

const HourlyForecastHeader = ({ day, onDayChange }: Props) => {

  return (
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-preset-5">Hourly Forecast</h5>
        <Select defaultValue="Sunday" value={day} onValueChange={(value) => onDayChange(value as DayOfWeek)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {daysOfWeek.map((dayName) => (
                <SelectItem key={dayName} value={dayName}>
                  {dayName}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
  )
}

export default HourlyForecastHeader