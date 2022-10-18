import { action, observable, makeObservable } from 'mobx';

export interface ICounter {
  value: number;
  increment: () => void;
  decrement: () => void;
}

export class Counter implements ICounter {
  @observable value = 0;

  constructor() {
    makeObservable(this)
  }

  @action
  increment = () => {
    this.value += 1;
  }

  @action
  decrement = () => {
    this.value -= 1;
  }
}
