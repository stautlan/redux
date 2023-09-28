import { nanoid } from '@reduxjs/toolkit';
import { Actions, ActionTypes } from '../actions/actions'


export interface IState {
    items: Item[];
}

const initialState: IState = {
    items: [],
}

export const reducer = (state: IState = initialState, action: Actions) /*: IState*/ => {
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