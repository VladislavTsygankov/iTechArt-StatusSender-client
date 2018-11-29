import { LocalTime } from 'js-joda';

const getTimeFromSeconds = seconds => LocalTime.ofSecondOfDay(seconds);

export default { getTimeFromSeconds };
