import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { pluck, distinctUntilChanged } from 'rxjs/operators';

// Types
import { User } from 'tft-auth';


export interface State {
  user: User;
  date: Date;
  [key: string]: any;
}

const state: State = {
  user: undefined,
  date: undefined,
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(
    distinctUntilChanged()
  );

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(
      pluck(name)
    );
  }

  set(name: string, newState: any) {
    this.subject.next({ ...this.value, [name]: newState });
  }

}
