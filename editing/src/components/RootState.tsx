import { createAction } from '@reduxjs/toolkit';

const iniitalState: Item = { id: '', name: 'noname' };

export const addItem = createAction("ADD_ELEMENT");
export const updateItem = createAction("UPDATE_ELEMENT");
export const deleteItem = createAction("CLEAR_FORM");

/*function modifierItem(state = iniitalState, action) {
    switch(action.type) {
        case 'increment':
            return { ...state, value: state.value }
        case 'decrement':
            return { ...state, value: state.value - 1 }
        case 'incrementByAmount':
            return { ...state, value: state.value + action.payload }
        default:
            return state;
    }
}*/