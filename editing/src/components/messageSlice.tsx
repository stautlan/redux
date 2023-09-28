// https://www.programcreek.com/typescript/?api=@reduxjs/toolkit.PayloadAction

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal.js";

type State = {
    message: string | null;
}
const initialState: State = {
    message: "",
};

interface IMessage {
    //payload: string;
}

export const MessagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        // Creates an error message
        error(state, action: PayloadAction<IMessage>) {
            createMessage(state, "error", action.payload);
        },
        // Creates an information message
        info(state, action: PayloadAction<IMessage>) {
            createMessage(state, "info", action.payload);
        },
        warning(state, action: PayloadAction<IMessage>) {
            createMessage(state, "warning", action.payload);
        },
        success(state, action: PayloadAction<IMessage>) {
            createMessage(state, "success", action.payload);
        },
        // Closes a message
        close(state) {
            state.message = null;
        },
    },
})

function createMessage(state: WritableDraft<{}>, typeMessage: string, payload: IMessage) {
    throw new Error("Function not implemented.");
}
