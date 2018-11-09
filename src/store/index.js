import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import creditSagas from "sagas/sagas";
import rootReducer from "reducers";
import {login} from "actions/authentication";

const sagaMiddleware = createSagaMiddleware();

/*eslint-disable */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
/*eslint-enable */

const logger = store => next => action => {
  if (process.env.ENV_VARIABLE != "production") {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
  }
};

const crashReporter = store => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error("Caught an exception!", err);
  }
};

// Create  a store.
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, crashReporter, sagaMiddleware))
);


store.dispatch(login({login:'', password:''}))
sagaMiddleware.run(creditSagas);

export default store;
