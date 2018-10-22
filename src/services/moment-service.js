import moment from 'moment';

const DATE_FORMAT = 'DD/MM/YYYY';
const TIME_FORMAT = 'hh:mm:ss';

const convertDate = date => moment(date).format(DATE_FORMAT);

const convertTime = time => moment(time).format(TIME_FORMAT);

export default {
  convertTime,
  convertDate,
};
