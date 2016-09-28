import moment from 'moment';

export class HumanDateValueConverter {
  toView(value, format) {
    return moment(value).format(format);
  }
}

