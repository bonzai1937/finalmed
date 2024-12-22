import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Paper from '@mui/material/Paper';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Dayjs>(dayjs());
  return (
    <Paper sx={{ p: 2, height: 350 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          sx={{ width: 1 }}
          value={currentDate}
          onChange={(date) => setCurrentDate(date as Dayjs)}
          showDaysOutsideCurrentMonth
          fixedWeekNumber={6}
        />
      </LocalizationProvider>
    </Paper>
  );
};

export default Calendar;
