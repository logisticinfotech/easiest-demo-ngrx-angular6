import { UIState } from './ui.state';
import { UIActions, UIActionsTypes } from './ui.actions';

export const appInitialState: UIState = {
    textfieldValue: '',
    selectedTab: 'nav-tab1-tab',
    selectValue: '1',
    checkBoxValues: [],
    radioValue: 'developer'
};

export function uiReducer(state = appInitialState, action: UIActions): UIState {

    switch (action.type) {

        case UIActionsTypes.TEXTFIELD_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                textfieldValue: action.payload
            });
        }

        case UIActionsTypes.TAB_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                selectedTab: action.payload
            });
        }

        case UIActionsTypes.SELECT_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                selectValue: action.payload
            });
        }

        case UIActionsTypes.CHECKBOX_VALUE_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                checkBoxValues: action.payload
            });
        }

        case UIActionsTypes.RADIO_CHANGED_ACTION: {
            return Object.assign(state, {
                ...state,
                radioValue: action.payload
            });
        }

        default: {
            return state;
        }
    }
}
