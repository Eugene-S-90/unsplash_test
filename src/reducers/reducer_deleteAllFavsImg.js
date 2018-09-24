
const deleteAllFavsImg = (state=null,action) => {
    const {type, payload} = action;
    switch(type){
        case "DELETE_FAVS_IMG":
        return {
            ...state
        }
        default:
        return state;
    }
}
export default deleteAllFavsImg;