import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/CounterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); 
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div>
      <main className="counter">
        <h1>Redux Counter</h1>
        {showCounter && <div className="value">Counter Value = {counter}</div>}
        <button onClick={incrementHandler}>
          <b> + </b>
        </button>
        &nbsp;
        <button onClick={decrementHandler}>
          <b> - </b>
        </button>
        &nbsp;
        <button onClick={increaseHandler}> + 5</button>
        <br />
        <button onClick={toggleCounterHandler}>Toggle</button>
      </main>
    </div>
  );
};

export default Counter;
