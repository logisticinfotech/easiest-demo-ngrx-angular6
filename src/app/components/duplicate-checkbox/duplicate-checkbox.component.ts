import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { CheckBoxValueChangedAction } from '../../store/UI/ui.actions';

@Component({
  selector: 'app-duplicate-checkbox',
  templateUrl: './duplicate-checkbox.component.html',
  styleUrls: ['./duplicate-checkbox.component.scss']
})
export class DuplicateCheckboxComponent implements OnInit {

    checkBoxValue: Observable<any>;
    arrayCheckBoxValues = [];

    constructor(private store: Store<AppState>) {
        this.checkBoxValue = this.store.select(state => state.ui.checkBoxValues);


        // for fill the array with store's data

        this.checkBoxValue.subscribe(res => {

            this.arrayCheckBoxValues = res;


            // this.arrayCheckBoxValues = Object.assign({}, res);
        });
    }

    ngOnInit() {
    }
    onChangeCheckBox(event, id) {
        if (event.target.checked) {
            this.arrayCheckBoxValues.push(id);
        } else {
            this.arrayCheckBoxValues.splice(this.arrayCheckBoxValues.indexOf(id), 1);
        }

        // this.store.dispatch(new CheckBoxValueChangedAction(this.arrayCheckBoxValues));

    }


}
