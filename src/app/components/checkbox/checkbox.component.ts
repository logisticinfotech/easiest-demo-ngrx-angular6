import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { CheckBoxValueChangedAction } from '../../store/UI/ui.actions';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

    checkBoxValue: Observable<any>;
    arrayCheckBoxValues = [];

    constructor(private store: Store<AppState>) {
        this.checkBoxValue = this.store.select(state => state.ui.checkBoxValues);


        // for fill the array with store's data

        this.checkBoxValue.subscribe(res => {

            this.arrayCheckBoxValues = res;


             /*
                If we initialize arrayCheckBoxValues i.e.
                if this line is uncommented then the store should be dispatched
                to assign values of arrayCheckBoxValues in store's "checkBoxValues" property
            */

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

        /*
            Here we do not need to dispatch the store because
            this.arrayCheckBoxValues contains the reference of
            store's "checkBoxValues" property.

            this.arrayCheckBoxValues = res;

            this line means that both are referncing the same address.

            this.arrayCheckBoxValues = Object.assign({}, res);

            this will create another instance and store the same value in it.
        */

        // this.store.dispatch(new CheckBoxValueChangedAction(this.arrayCheckBoxValues));

    }

}
