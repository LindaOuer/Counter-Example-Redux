export const increment = () => {
    return {
        type: "increment",
    };
};
export const incrementStep = (step) => {
    return {
        type: "incrementStep",
        payload: step,
    };
};

export const decrement = () => {
    return {
        type: "decrement",
    };
};

export const toggleUser = () => {
    return {
        type: "toggle",
    };
};
