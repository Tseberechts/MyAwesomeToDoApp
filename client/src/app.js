import toDoItem from 'resources/toDoItem';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import moment from 'moment';

@inject(EventAggregator)

export class App {
  constructor(eventAggregator) {
    this.datedItems = [];
    this.unDatedItems = [];
    this.event = eventAggregator;
  }

  attached(){
    this.event.subscribe('removeItem', id => this.removeItem(id));
  }

  addItem() {
    let newItem = new toDoItem({text: this.newToDoText.value, deadline: moment(this.newToDoDate.value), hasDeadline: this.hasDeadline});
    if(this.hasDeadline){
      this.datedItems.push(newItem)
    } else {
      this.unDatedItems.push(newItem)
    }
    this.addToDoForm.reset();
    this.hasDeadline = false;
  }

  removeItem(id){
    let findId = (item) => {
      return item.id === id;
    };

    let itemIndex = -1;

    if(this.datedItems.length === 0){
      itemIndex = this.datedItems.findIndex(findId);
    } else {
      itemIndex = this.unDatedItems.findIndex(findId);
    }

    if(itemIndex === -1){
      itemIndex = this.unDatedItems.findIndex(findId);
      if(itemIndex !== -1){
        this.unDatedItems.splice(itemIndex, 1);
      }
    } else {
      if(itemIndex !== -1){
        if(this.datedItems.length === 0){
          this.datedItems.splice(itemIndex, 1);
        } else {
          this.unDatedItems.splice(itemIndex, 1);
        }
      }
    }
  }
}
