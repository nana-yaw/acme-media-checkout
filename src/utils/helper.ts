export function getNextMonthAndYear(): string {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
  
    let nextMonth;
    let nextYear;
  
    if (currentMonth === 11) {
      nextMonth = 0;
      nextYear = currentYear + 1;
    } else {
      nextMonth = currentMonth + 2;
      nextYear = currentYear;
    }
  
    return `${nextYear}/${nextMonth}`
  }