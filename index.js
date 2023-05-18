const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combileReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED"; //type of action
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

function orderCake() {
  // action creator is func that returns an action
  return {
    type: CAKE_ORDERED, // action must include type property
    payload: 1,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

function orderIcecream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function restockIcecream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIcecream: 20,
//   anotherProperty: 0,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIcecreamState = {
  numOfIcecream: 20,
};

//reducer stores the action and state of arguments and returns the next state of the application
//(preciousState, action) => newState

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CAKE_ORDERED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case CAKE_RESTOCKED:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes + action.payload,
//       };
//     case ICECREAM_ORDERED:
//       return {
//         ...state,
//         numOfIcecream: state.numOfIcecream - 1,
//       };
//     case ICECREAM_RESTOCKED:
//       return {
//         ...state,
//         numOfIcecream: state.numOfIcecream + action.payload,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream + action.payload,
      };
    default:
      return state;
  }
};

//Redux Store
//Holds application state
//Allows access to state via getState()
//Allows state to be updated via dispatch(action)
//Registers listeners via subscribe(listener)
//Handles unregistering of listeners via the function returned by subscribe(listener)

const rootReducer = combileReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(2));
// store.dispatch(restockCake(5));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIcecream, restockIcecream }, // we add different action creators
  store.dispatch
);

actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.restockCake(5);
actions.orderIcecream();
actions.orderIcecream();
actions.restockIcecream(2);
actions.restockIcecream(3);

unsubscribe();
