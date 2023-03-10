import moment from 'moment';
require('moment/locale/es');

export const formattedDate = (date: string) =>
  moment.utc(date).locale('es').format('D [de] MMMM[,] YYYY');
