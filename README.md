# Easiest Ngrx Demo with little UI state managment like tab, input, select, radio

Purpose of this demo is to understand ngrx easily.

## ngrx/store configuration

First install `@ngRx/store`
```
npm install @ngrx/store --save

```

define `uiState` in ui.state.ts file
```
export interface UIState {
    ...
    selectedTab: string;
    ...
}
```

define `uiActions` in ui.actions.ts file
```
import { Action } from '@ngrx/store';

export const UIActionsTypes = {
    ...
    TAB_CHANGED_ACTION: '[UI] -Tab changed-',
    ...
};

...
export class TabChangedAction implements Action {
    type = UIActionsTypes.TAB_CHANGED_ACTION;
    constructor(public payload: any) { }
}
...

export type UIActions =
    | TabChangedAction;

```

define `uiReducer` in ui.reducer.ts file
```
import { UIState } from './ui.state';
import { UIActions, UIActionsTypes } from './ui.actions';

export const appInitialState: UIState = {
    ...
    selectedTab: 'nav-tab1-tab',
    ...
};

export function uiReducer(state = appInitialState, action: UIActions): UIState {

    switch (action.type) {

        ...

        case UIActionsTypes.TAB_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                selectedTab: action.payload
            });
        }

        ...

        default: {
            return state;
        }
    }
}

```

configure `reducers` in app.reducer.ts file and `states` in app.state.ts

```
import { UIState } from './UI/ui.state';

export interface AppState {
    ui: UIState;
}
```

```
import { AppState } from './app.state';
import { uiReducer } from './UI/ui.reducer';

export const reducers: ActionReducerMap<AppState> = {
    ui: uiReducer,
  };
```

for configuring store in application, add following set up in your `app.module.ts` file
```
import { reducers } from './store/app.reducer';

imports: [
    ...
    StoreModule.forRoot(reducers)
    ...
    ]
```

## How to use in component

To access `selectedTab` property form store in your component file...

```

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

export class TabsComponent implements OnInit {
    selectedTab: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.selectedTab = this.store.select(state => state.ui.selectedTab);
    }

    onChangeTab(id) {
        this.store.dispatch(new TabChangedAction(id));
    }
}
```

in tabs.component.html
```
<a class="nav-item nav-link" [class.active]="(selectedTab | async) === 'nav-tab1-tab'" id="nav-tab1-tab" data-toggle="tab" href="#nav-tab1" role="tab" aria-controls="nav-tab1" aria-selected="true" (click)="onChangeTab('nav-tab1-tab')">Tab 1</a>
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Further help

Checkout full blog [here](https://www.logisticinfotech.com/blog/easiest-demo-to-learn-ngrx-in-angular-6).
