const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = {
  name: "Utkarsh Raj",
  address: {
    street: "Boring Canal Road",
    city: "Patna",
    pin: 800001,
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
      // return {
      //   ...state,
      //   address: {
      //     ...state.address,
      //     street: action.payload,
      //   },
      // };
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("update state", store.getState())
);

store.dispatch(updateStreet("H4 IIITDMJ Campus"));

unsubscribe();
