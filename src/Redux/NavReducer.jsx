// NavReducer.js

import { CHANGE_NAV_TITLE } from './Action';

const initialState = {
    title: "Notes",
};

const NavReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CHANGE_NAV_TITLE:
            return { ...state, title: action.payload };
        default:
            return state;
    }
};

export default NavReducer;
