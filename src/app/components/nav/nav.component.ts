import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectIsAdmin } from 'src/app/reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAdmin$: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isAdmin$ = this.store.select(selectIsAdmin);
  }

}
