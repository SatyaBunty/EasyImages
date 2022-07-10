import { imageTypeOptions, yesNoOptions } from '../../../../Constants/EnumConstants';
import {
  FAILURE,
  INACTIVE,
  LOADING,
  SUCCESS,
} from '../../../../Constants/URLConstants';
import {
  // GET_IMAGES_DATA,
  GET_UPDATE_IMAGES_DATA,
  GET_SUBMIT_IMAGES_DATA,
  GET_SUBMIT_IMAGES_DATA_SUCCESS,
  GET_SUBMIT_IMAGES_DATA_FAILURE,
  GET_SUBMIT_IMAGES_DATA_RESET,
  GET_UPDATE_SUBMIT_TYPE_DATA,
  GET_UPDATE_WORD_SENTENCE_CASE_DATA,
} from './GetImagesActions';

const initialState = {
  imageData: {
    imageFetchType: "",
    imageType: imageTypeOptions.JPG,
    isZeroIndexed: yesNoOptions.YES,
    imageURL: "",
    startIndex: "0",
    endIndex: "100",

    userName: "",
    userPassword: "",
  },
  wordSentenceCaseData: {
    updatedURL: "",
    sentenceCaseType: "",
    imageURL: "",
    modifyText: "",
    shallSplitText: yesNoOptions.YES,
    splitText: "",
  },
  serviceSubmitType: "",
  images: null,
  serviceState: INACTIVE,
  loaderVisibility: false,
  message: '',
};

const GetImagesReducer = (state = initialState, action) => {
  state = {
    ...state,
    images: null,
    serviceState: INACTIVE,
    loaderVisibility: false,
    message: '',
  }
  switch (action.type) {
    case GET_UPDATE_SUBMIT_TYPE_DATA:
      state = { ...state, serviceSubmitType: action.payload };
    break;
    case GET_UPDATE_WORD_SENTENCE_CASE_DATA:
      state = { ...state, wordSentenceCaseData: action.payload };
      break;
    case GET_UPDATE_IMAGES_DATA:
      state = { ...state, imageData: action.payload };
      break;
    case GET_SUBMIT_IMAGES_DATA:
      state = { ...state, serviceState: LOADING, loaderVisibility: true, message: "" };
      break;
    case GET_SUBMIT_IMAGES_DATA_SUCCESS:
      state = { ...state, images: action.payload, serviceState: SUCCESS, loaderVisibility: false, message: "" };
      break;
    case GET_SUBMIT_IMAGES_DATA_FAILURE:
      state = { ...state, serviceState: FAILURE, loaderVisibility: false, message: "Unable to get the images from server" };
      break;
      case GET_SUBMIT_IMAGES_DATA_RESET:
        state = { ...initialState };
        break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default GetImagesReducer;
