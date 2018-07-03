import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { RadioChangedAction } from '../../store/UI/ui.actions';

@Component({
    selector: 'app-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

    radioValue: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.radioValue = this.store.select(state => state.ui.radioValue);
    }

    ngOnInit() {
    }

    onChangeRadio(event) {
        this.store.dispatch(new RadioChangedAction(event.target.value));
    }


}
