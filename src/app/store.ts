import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/distinctUntilChanged';
// Types
import { User } from './auth/shared/services/auth.service';


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
  private store = this.subject.asObservable().distinctUntilChanged();

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pluck(name);
  }

  set(name: string, newState: any) {
    this.subject.next({ ...this.value, [name]: newState });
  }

}
