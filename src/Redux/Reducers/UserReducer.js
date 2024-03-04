const initialState = {
    isLogged: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "toggle":
            return { ...state, isLogged: !state.isLogged };
        default:
            return state;
    }
};

export default userReducer;
