import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TextFieldChangedAction } from '../../store/UI/ui.actions';

@Component({
  selector: 'app-duplicate-textfield',
  templateUrl: './duplicate-textfield.component.html',
  styleUrls: ['./duplicate-textfield.component.scss']
})
export class DuplicateTextfieldComponent implements OnInit {

    txtfieldValue: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.txtfieldValue = this.store.select(state => state.ui.textfieldValue);
    }

    onChangeModelValue(event) {
        this.store.dispatch(new TextFieldChangedAction(event));
    }

    ngOnInit() {
    }
}
