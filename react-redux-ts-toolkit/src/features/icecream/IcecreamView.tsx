// import { useSelector, useDispatch } from "react-redux";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamView = () => {
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Number of icecream - {numOfIcecream}</h1>
      <button onClick={() => dispatch(ordered())}>order icecream</button>
      <button onClick={() => dispatch(restocked(3))}>restock icecream</button>
    </div>
  );
};

export default IcecreamView;
