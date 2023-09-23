import { createAction } from '@reduxjs/toolkit';

/*export const addItem = createAction("ADD_ELEMENT");
export const updateItem = createAction("UPDATE_ELEMENT");
export const deleteItem = createAction("DELETE_ELEMENT");*/

//---
export enum ActionTypes {
    ADD_ELEMENT = "ADD_ELEMENT",
    UPDATE_ELEMENT = "UPDATE_ELEMENT",
    DELETE_ELEMENT = "DELETE_ELEMENT",
}

interface AddItemAction {
    type: ActionTypes.ADD_ELEMENT;
    payload: string;
}

interface EditItemAction {
    type: ActionTypes.UPDATE_ELEMENT;
    payload: {
        id: string;
        text: string;
    }
}

interface DeleteItemAction {
    type: ActionTypes.DELETE_ELEMENT;
    payload: string;
}

export type Actions = AddItemAction | EditItemAction | DeleteItemAction;

export const addItem = (text: string): AddItemAction => ({
    type: ActionTypes.ADD_ELEMENT,
    payload: text,
  });
  
  export const updateItem = (id: string, text: string): EditItemAction => ({
    type: ActionTypes.UPDATE_ELEMENT,
    payload: {
      id,
      text,
    },
  });
  
  export const deleteItem = (id: string): DeleteItemAction => ({
    type: ActionTypes.DELETE_ELEMENT,
    payload: id,
  });