

const initialState = {
  imgList: []
}

const getListImg = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "GET_LIST_IMG_BEGIN":
      return {...state };
    case "GET_LIST_IMG_SUCCESS":
      return {
        ...state,
       ... payload,
       };
    default:
      return state;
  }
};

export default getListImg;