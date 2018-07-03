import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { TabChangedAction } from '../../store/UI/ui.actions';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

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
