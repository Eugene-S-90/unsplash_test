
const initialState = {
    favorites: []
  }
  
const addTofav = (state = initialState,action) => {
    const {type, payload} = action;
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