
const initialState = {
    favorites_data: []
  }
  
const drawFavoritesImg = (state = initialState,action) => {
    const {type, payload} = action;
    console.log('DRAW_FAVORITES_IMG',action.payload)
    switch(type){
        case "DRAW_FAVORITES_IMG_BEGIN":
        return {...state };
      case "DRAW_FAVORITES_IMG_SUCCESS":
        return {
          ...state,
         ... payload,
         }
         default:
         return state;
         
    }
}
export default drawFavoritesImg;