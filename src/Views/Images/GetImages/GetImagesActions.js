export const GET_IMAGES_DATA = 'GET_IMAGES_DATA';
export const UPDATE_IMAGES_DATA = 'UPDATE_IMAGES_DATA';
export const SUBMIT_GET_IMAGES_DATA = 'SUBMIT_GET_IMAGES_DATA';
export const GET_YEARS_MONTHS_DETAILS_SUCCESS =
  'GET_YEARS_MONTHS_DETAILS_SUCCESS';
export const GET_YEARS_MONTHS_DETAILS_FAILURE =
  'GET_YEARS_MONTHS_DETAILS_FAILURE';
export const GET_YEARS_MONTHS_DETAILS_RESET = 'GET_YEARS_MONTHS_DETAILS_RESET';

export const getImagesData = (imageData) => ({type: GET_IMAGES_DATA, payload: imageData});

export const updateImagesData = (getImagesData) => ({type: UPDATE_IMAGES_DATA, payload: getImagesData});

export const submitGetImagesData = (getImagesData) => ({type: SUBMIT_GET_IMAGES_DATA, payload: getImagesData});

export const getYearsMonthsDataSuccess = (successData) => ({
  type: GET_YEARS_MONTHS_DETAILS_SUCCESS,
  payload: successData,
});
export const getYearsMonthsDataFailure = (failureReport) => ({
  type: GET_YEARS_MONTHS_DETAILS_FAILURE,
  payload: failureReport,
});
export const getYearsMonthsDataReset = () => ({
  type: GET_YEARS_MONTHS_DETAILS_RESET,
});
