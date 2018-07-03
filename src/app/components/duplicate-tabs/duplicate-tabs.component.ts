import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TabChangedAction } from '../../store/UI/ui.actions';

@Component({
    selector: 'app-duplicate-tabs',
    templateUrl: './duplicate-tabs.component.html',
    styleUrls: ['./duplicate-tabs.component.scss']
})
export class DuplicateTabsComponent implements OnInit {

    selectedTab: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.selectedTab = this.store.select(state => state.ui.selectedTab);
    }

    ngOnInit() {
    }
    onChangeTab(id) {
        this.store.dispatch(new TabChangedAction(id));
    }

}
