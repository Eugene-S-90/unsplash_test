

const initialState = {
  imgList: []
}

const getListImg = (state = initialState, action) => {
  console.log('img upload reducer', action);
  switch (action.type) {
    case "GET_LIST_IMG_BEGIN":
      return {...state};
    case "GET_LIST_IMG_SUCCESS":
      return {...state };
    default:
      return state;
  }
};

export default getListImg;