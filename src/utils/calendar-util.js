export const daysArr = Array(30).fill(0).map((e,i)=>i+1);

export const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const hasEvent = (meetings, day) => (meetings.find((meeting) => meeting.date.split('-')[0] == day));
export const getEventFromDay = (meetings, day) => meetings.filter((meeting) => meeting.date.split('-')[0] == day);