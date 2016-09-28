import moment from 'moment';

export default class toDoItem {
  constructor({
    text = "Lorem Ipsum",
    dateAdded = moment(),
    deadline = moment(),
    isFinished = false,
    hasDeadline = false,
    id = Math.floor(Math.random() * 1000)
  }) {
    this.text = text;
    this.dateAdded = dateAdded;
    this.deadline = deadline;
    this.isFinished = isFinished;
    this.hasDeadline = hasDeadline;
    this.id = id;
  }
}
