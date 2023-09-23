//import { PayloadAction, createAction, createReducer, current } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
//import { addItem } from '../actions/actions';
import { Actions, ActionTypes } from '../actions/actions'


export interface IState {
    items: Item[];
}

const initialState: IState = {
    items: [],
}

/*const initialState = {
    elements: [],
    //id: nanoid(),
    currentElement: "",
    isEditMode: false,
}*/

/*export const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(addItem, (state, action: PayloadAction<Item>) => {
        state.elements = [...state.elements, action.payload]; //.push(action.payload);
    })
    .addCase()
}*/

export const reducer = (state: IState = initialState, action: Actions): State => {
    switch (action.type) {
        case ActionTypes.ADD_ELEMENT:
        return {
            items: [
            ...state.items,
            {
                id: nanoid(),
                name: action.payload,
            },
            ],
        };
        case ActionTypes.UPDATE_ELEMENT:
        return {
            items: state.items.map((item) =>
            item.id === action.payload.id ? { ...item, name: action.payload.text } : item
            ),
        };
        case ActionTypes.DELETE_ELEMENT:
        return {
            items: state.items.filter((item) => item.id !== action.payload),
        };
        default:
        return state;
    }
};