import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { SelectChangedAction } from '../../store/UI/ui.actions';


@Component({
    selector: 'app-duplicate-select',
    templateUrl: './duplicate-select.component.html',
    styleUrls: ['./duplicate-select.component.scss']
})
export class DuplicateSelectComponent implements OnInit {

    selectedValue: Observable<any>;
    test = [
        {
            id: 1,
            text: 1
        },
        {
            id: 2,
            text: 2
        },
        {
            id: 3,
            text: 3
        },
        {
            id: 4,
            text: 4
        },
        {
            id: 5,
            text: 5
        },
    ];

    constructor(private store: Store<AppState>) {
        this.selectedValue = this.store.select(state => state.ui.selectValue);
    }

    onChangeSelect(event) {
        this.store.dispatch(new SelectChangedAction(event.target.value));
    }


    ngOnInit() {
    }

}
