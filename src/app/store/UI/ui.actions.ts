import { Action } from '@ngrx/store';

export const UIActionsTypes = {
    TEXTFIELD_CHANGED_ACTION: '[UI] -Textfield value changed-',
    TAB_CHANGED_ACTION: '[UI] -Tab changed-',
    SELECT_CHANGED_ACTION: '[UI] -Select changed-',
    CHECKBOX_VALUE_CHANGED_ACTION: '[UI] -Check box value changed-',
    RADIO_CHANGED_ACTION: '[UI] -Radio changed-',
};

export class TextFieldChangedAction implements Action {
    type = UIActionsTypes.TEXTFIELD_CHANGED_ACTION;
    constructor(public payload: any) { }
}

export class TabChangedAction implements Action {
    type = UIActionsTypes.TAB_CHANGED_ACTION;
    constructor(public payload: any) { }
}

export class SelectChangedAction implements Action {
    type = UIActionsTypes.SELECT_CHANGED_ACTION;
    constructor(public payload: any) { }
}

export class CheckBoxValueChangedAction implements Action {
    type = UIActionsTypes.CHECKBOX_VALUE_CHANGED_ACTION;
    constructor(public payload: any) { }
}

export class RadioChangedAction implements Action {
    type = UIActionsTypes.RADIO_CHANGED_ACTION;
    constructor(public payload: any) { }
}

export type UIActions =
    | TextFieldChangedAction
    | TabChangedAction
    | SelectChangedAction
    | CheckBoxValueChangedAction
    | RadioChangedAction;
