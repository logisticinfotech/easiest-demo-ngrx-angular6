# AngularNgrxUIDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

## ngrx/store configuration

First install `@ngRx/store`
```
npm install @ngrx/store --save

```

define `uiState` in ui.state.ts file
```
export interface UIState {
    ...
    textfieldValue: string;
    ...
}
```

define `uiActions` in ui.actions.ts file
```
import { Action } from '@ngrx/store';

export const UIActionsTypes = {
    ...
    TEXTFIELD_CHANGED_ACTION: '[UI] -Textfield value changed-'
    ...
};

...
export class TextFieldChangedAction implements Action {
    type = UIActionsTypes.TEXTFIELD_CHANGED_ACTION;
    constructor(public payload: any) { }
}
...

export type UIActions =
    | TextFieldChangedAction;

```

define `uiReducer` in ui.reducer.ts file
```
import { UIState } from './ui.state';
import { UIActions, UIActionsTypes } from './ui.actions';

export const appInitialState: UIState = {
    ...
    textfieldValue: '',
    ...
};

export function uiReducer(state = appInitialState, action: UIActions): UIState {

    switch (action.type) {

        ...

        case UIActionsTypes.TEXTFIELD_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                textfieldValue: action.payload
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

To access `textfieldValue` property form store in your component file...

```

import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

export class TextfieldComponent implements OnInit {
    txtfieldValue: Observable<string>;

    constructor(private store: Store<AppState>) {
        this.txtfieldValue = this.store.select(state => state.ui.textfieldValue);
    }

     onChangeModelValue(event) {
        this.store.dispatch(new TextFieldChangedAction(event));
    }
}
```

in textfield.component.html
```
<input type="email" [ngModel]="txtfieldValue | async" (ngModelChange)="onChangeModelValue($event)">
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
