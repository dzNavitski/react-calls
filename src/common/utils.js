import * as moment from 'moment';

export const checkIfFinished = (t) => {
    const now = moment(new Date(), 'HH:mm');
    const time = moment(t, 'HH:mm');

    return now.isAfter(time);
};

export const minutesOfDay = (t) => {
    const time = moment(t, 'HH:mm');
    return time.minutes() + time.hours() * 60;
};

export const convertSortOrder = (order) => {
    return order === 'ascend' ? 'asc' : 'desc';
};

export const formatPhone = (phone) => {
    return phone.replace(/^\+/, '00')
        .replace(/^\+/, '00')
        .replace(/\(|\)|\-|\s/g, '')
        .replace(/(.{5})(.{3})(.{3})/g, '$1 $2 $3 ');
};