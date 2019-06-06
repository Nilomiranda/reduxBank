import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {
    username: "Danilo Miranda",
    totalAmount: 256128000
}

const store = createStore(reducers, initialState)

export default store;