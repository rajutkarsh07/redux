import "./App.css";
import UserView from "./features/user/UserView";
import IcecreamView from "./features/icecream/IceCreamView";
import CakeView from "./features/cake/CakeView";

function App() {
  return (
    <div>
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
