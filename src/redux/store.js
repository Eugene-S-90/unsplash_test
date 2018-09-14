
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware]

const store = createStore(
    rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
)
sagaMiddleware.run(rootSaga);

export default store;