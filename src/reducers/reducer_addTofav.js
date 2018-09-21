
const initialState = {
    favorites: []
  }
  
const addTofav = (state = initialState,action) => {
    const {type, payload} = action;
    console.log('action__data_FAVORITES',action.payload)
    switch(type){
        case "ADD_TO_FAV":
        return {
            ...state
        }
        default:
        return state;
    }
}
export default addTofav;