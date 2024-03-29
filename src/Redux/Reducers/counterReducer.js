const initialState = {
    counter: 0,
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + 1 };
        case "decrement":
            return { ...state.counter, counter: state.counter - 1 };
        case "incrementStep":
            return { ...state, counter: state.counter + action.payload };
        default:
            return state;
    }
};

export default counterReducer;
