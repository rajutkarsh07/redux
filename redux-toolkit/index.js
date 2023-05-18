const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");

console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {
  //logger middle will do the same what the below code should have done
  // console.log("updated state ", store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(7));
unsubscribe();
