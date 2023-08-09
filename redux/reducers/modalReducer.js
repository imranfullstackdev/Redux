import { SET_MODAL } from "../actionTypes/modalActionType";

const INITIAL_STATE = {
    modal: "",
    eventId: ""
};

export const modalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MODAL:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}