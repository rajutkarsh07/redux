const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const fetchUsers = require("./features/user/userSlice").fetchUsers;

console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {
  //logger middle will do the same what the below code should have done
  console.log("updated state ", store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(4));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(7));

// unsubscribe();
