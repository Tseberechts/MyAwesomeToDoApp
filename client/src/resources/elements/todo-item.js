import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)

export class TodoItemCustomElement {
  @bindable item;

  constructor(eventAggregator){
    this.event = eventAggregator;
  }

  removeItem(){
    this.event.publish('removeItem', this.item.id);
  }
}

