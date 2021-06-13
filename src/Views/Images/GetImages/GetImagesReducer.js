import { imageTypeOptions, zeroIndexOptions } from '../../../Constants/EnumConstants';
import {
  // FAILURE,
  // INACTIVE,
  LOADING,
  // SUCCESS,
} from '../../../Constants/URLConstants';
import {
  // GET_IMAGES_DATA,
  UPDATE_IMAGES_DATA,
  SUBMIT_GET_IMAGES_DATA,
  // GET_YEARS_MONTHS_DETAILS_SUCCESS,
  // GET_YEARS_MONTHS_DETAILS_FAILURE,
  // GET_YEARS_MONTHS_DETAILS_RESET,
} from './GetImagesActions';

const initialState = {
  imageData: {
    imageType: imageTypeOptions.JPG,
    isZeroIndexed: zeroIndexOptions.YES,
    imageURL: "",
    startIndex: "0",
    endIndex: "100"
  },
  serviceState: LOADING,
  loaderVisibility: false,
  message: '',
};

const GetImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_IMAGES_DATA:
      state = { ...state, imageData: action.payload };
      break;
    case SUBMIT_GET_IMAGES_DATA:
      state = { ...state, imageData: action.payload };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default GetImagesReducer;
