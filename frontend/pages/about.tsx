import { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <div
        style={{
          cursor: "pointer",
          marginLeft: "20px",
          marginRight: "5px",
          width: "20px",
          height: "20px",
          background: "red",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
      >
        -
      </div>
      <div
        style={{
          cursor: "pointer",
          width: "20px",
          height: "20px",
          background: "green",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => dispatch({ type: "increment", payload: 1 })}
      >
        +
      </div>
    </>
  );
};

export default About;
