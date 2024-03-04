import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, incrementStep } from "../Redux/actions";
import counterReducer from "../Redux/Reducers/counterReducer";
import { decrement, increment } from "../ReduxToolkit/CounterSlice";

export default function CounterRedux() {
    // when using a unique Reducer
    // const count = useSelector((state) => state.counter);

    // const count = useSelector((state) => state.counterReducer.counter);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <p>
                <button onClick={() => dispatch(increment(1))}>
                    Increment
                </button>
                Counter : {count}
                <button onClick={() => dispatch(decrement(1))}>
                    Decrement
                </button>
            </p>
            <br />
            {/* <button onClick={() => dispatch(incrementStep(5))}>
                Increment By 5
            </button> */}
        </>
    );
}
