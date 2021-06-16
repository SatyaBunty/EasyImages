import {
  FAILURE,
  INACTIVE,
  LOADING,
  SUCCESS,
} from '../../../../Constants/URLConstants';
import {
  GET_IMAGES_DATA_FROM_FOLDER,
  GET_IMAGES_DATA_FROM_FOLDER_SUCCESS,
  GET_IMAGES_DATA_FROM_FOLDER_FAILURE,
  GET_IMAGES_DATA_FROM_FOLDER_RESET,
} from './ShowImageAsGalleryActions';

const initialState = {
  images: null,
  serviceState: INACTIVE,
  loaderVisibility: false,
  message: '',
};

const ShowImageAsGalleryReducer = (state = initialState, action) => {
  state = {
    ...state,
    images: null,
    serviceState: INACTIVE,
    loaderVisibility: false,
    message: '',
  }
  switch (action.type) {
    case GET_IMAGES_DATA_FROM_FOLDER:
      state = { ...state, serviceState: LOADING, loaderVisibility: true, message: "" };
      break;
    case GET_IMAGES_DATA_FROM_FOLDER_SUCCESS:
      state = { ...state, images: action.payload, serviceState: SUCCESS, loaderVisibility: false, message: "" };
      break;
    case GET_IMAGES_DATA_FROM_FOLDER_FAILURE:
      state = { ...state, serviceState: FAILURE, loaderVisibility: false, message: "Unable to get the images from server" };
      break;
      case GET_IMAGES_DATA_FROM_FOLDER_RESET:
        state = { ...initialState };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default ShowImageAsGalleryReducer;
