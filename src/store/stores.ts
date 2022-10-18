import { Counter } from './Counter';

export class RootStore {
  counter: Counter;

  constructor() {
    this.counter = new Counter();
  }
}
