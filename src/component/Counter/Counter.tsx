import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const countReducer = useSelector((state:any) => state.counter); // Assuming 'counter' is the correct key for the count in your state
  const dispatch = useDispatch();

  // use of useRef
  const valueRef:any = useRef<HTMLInputElement>(null);

  return (
    <div>
      <div className=''>Welcome to Redux</div>
      <div className="">a. Simple Operation</div>
      <button className="" onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <div className=''>{countReducer.count}</div>
      <button className='' onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <div className=""> b. Todo List Operation </div>
      <input type="text" ref={valueRef}></input>
      <button onClick={()=>{dispatch({type:'ADD_ITEM',payload:valueRef.current.value})}}>
        Add
      </button>
    </div>
  );
}

export default Counter;