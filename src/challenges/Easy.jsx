import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1, showText: state.showText };
        case "DECREMENT":
            return { count: state.count - 1, showText: state.showText };
        case "TOGGLE_SHOW_TEXT":
            return { count: state.count, showText: !state.showText };
        default:
            return state;
    }
};

const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

    return (
        <div>
            <h1>{state.count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREMENT" });
                    dispatch({ type: "TOGGLE_SHOW_TEXT" });
                }}
            >
                Increment
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DECREMENT" });
                    dispatch({ type: "TOGGLE_SHOW_TEXT" });
                }}
            >
                Decrement
            </button>

        </div>
    );
};

export default ReducerExample;
