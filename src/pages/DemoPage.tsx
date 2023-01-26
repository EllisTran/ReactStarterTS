import { FormEvent, useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
interface DemoProps {
  initialCount: number;
}

enum CountActionType {
  INCREASE,
  CHANGE_VALUE_TO_ADD,
  DECREASE,
  ADD_VALUE_TO_COUNT,
}

interface CountAction {
  type: CountActionType;
  payload: number;
}

interface CountState {
  count: number;
  valueToAdd: number;
}

const reducer = (state: CountState, action: CountAction): CountState => {
  switch (action.type) {
    case CountActionType.INCREASE:
      return { ...state, count: state.count + action.payload };
    case CountActionType.DECREASE:
      return { ...state, count: state.count - action.payload };
    case CountActionType.CHANGE_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    case CountActionType.ADD_VALUE_TO_COUNT:
      return { ...state, count: state.count + action.payload, valueToAdd: 0 };
    default:
      // throw new Error("Unexpected action type: " + action.type);
      return state;
  }
};

const Demo = ({ initialCount }: DemoProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = (): void => {
    dispatch({ type: CountActionType.INCREASE, payload: 1 });
  };
  const decrement = (): void => {
    dispatch({ type: CountActionType.DECREASE, payload: 1 });
  };
  const handleChange = (event: FormEvent<HTMLInputElement>): void => {
    const value = parseInt(event.currentTarget.value) || 0;
    dispatch({ type: CountActionType.CHANGE_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch({
      type: CountActionType.ADD_VALUE_TO_COUNT,
      payload: state.valueToAdd,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      count is {state.count}
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          type="number"
          onChange={handleChange}
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};
export default Demo;
