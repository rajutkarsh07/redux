import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes - {numOfCakes}</h1>
      <button onClick={() => dispatch(ordered())}>order cake </button>
      <button onClick={() => dispatch(restocked(3))}>restock cake </button>
    </div>
  );
};

export default CakeView;
