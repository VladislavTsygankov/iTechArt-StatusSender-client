import { LocalTime } from 'js-joda';

const getTimeFromSeconds = seconds => LocalTime.ofSecondOfDay(seconds);

const getSecondsFromTime = time => LocalTime.parse(time).toSecondOfDay();

export default { getTimeFromSeconds, getSecondsFromTime };
