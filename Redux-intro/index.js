const redux = require('redux')
const createStore = redux.createStore()
const BUY_EGG = 'BUY_EGG'

function buyEgg() {
  return {
    type: BUY_EGG,
    info: 'Buying Egg',
  }
}

const initialState = {
  noOfEggs: 100,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_EGG:
      return {
        ...state,
        noOfEggs: state.noOfEggs - 1,
      }
    default:
      return state
  }
}
const store = createStore(reducer)
console.log('initial state :: ', store.getState())
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState()),
)
store.dispatch(buyEgg())
unsubscribe()
