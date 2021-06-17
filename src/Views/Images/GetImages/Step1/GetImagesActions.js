import { mainURL } from "./../../../../Constants/URLConstants";
import { ErrorEventLogger } from './../../../../Helpers/EventLogger';

export const GET_IMAGES_DATA = 'GET_IMAGES_DATA';
export const GET_UPDATE_IMAGES_DATA = 'GET_UPDATE_IMAGES_DATA';
export const GET_SUBMIT_IMAGES_DATA = 'GET_SUBMIT_IMAGES_DATA';
export const GET_SUBMIT_IMAGES_DATA_SUCCESS =
  'GET_SUBMIT_IMAGES_DATA_SUCCESS';
export const GET_SUBMIT_IMAGES_DATA_FAILURE =
  'GET_SUBMIT_IMAGES_DATA_FAILURE';
export const GET_SUBMIT_IMAGES_DATA_RESET = 'GET_SUBMIT_IMAGES_DATA_RESET';

export const getImagesData = (imageData) => ({ type: GET_IMAGES_DATA, payload: imageData });

export const getUpdateImagesData = (getImagesData) => ({ type: GET_UPDATE_IMAGES_DATA, payload: getImagesData });

export const getSubmitImagesData = () => ({ type: GET_SUBMIT_IMAGES_DATA });

export const getSubmitImagesDataSuccess = (successData) => ({
  type: GET_SUBMIT_IMAGES_DATA_SUCCESS,
  payload: successData,
});
export const getSubmitImagesDataFailure = (failureReport) => ({
  type: GET_SUBMIT_IMAGES_DATA_FAILURE,
  payload: failureReport,
});
export const getSubmitImagesDataReset = () => ({
  type: GET_SUBMIT_IMAGES_DATA_RESET,
});

export function fetchSubmitGetImagesDataAction(getImagesData) {
  return async (dispatchSubmitGetImagesDataAction) => {
    dispatchSubmitGetImagesDataAction(getSubmitImagesData());
    try {
      const url = mainURL;// + PostExpenditureURL;
      // const postData = {
      //   method_name: 'addNewBudgetData',
      //   service_request_data: {
      //     dateOfPurchase: expensesRequestParms.dateOfPurchase,
      //     nameOfPurchase: expensesRequestParms.nameOfPurchase,
      //     expenditureType: expensesRequestParms.expenditureType,
      //     paidBy: expensesRequestParms.paidBy,
      //     amountSpend: expensesRequestParms.amountSpend,
      //     details: expensesRequestParms.details,
      //     dateCreated: new Date().toString(),
      //   },
      // };

      fetch(url, {
        method: 'GET',
        // mode: 'cors',
        // credentials: 'include', // include, *same-origin, omit
        // redirect: 'follow',
        // headers: {
        //   // Accept: '*/*',
        //   // 'Accept-Encoding': ['gzip', 'deflate', 'br'],
        //   // Connection: 'keep-alive',
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify(postData),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          // if (responseJSON.status_code === SUCCESS_STATUS_CODE) {
          //   dispatchSubmitGetImagesDataAction(getSubmitImagesDataSuccess({}));
          // }
          if (responseJSON !== null && responseJSON !== undefined) {
            dispatchSubmitGetImagesDataAction(getSubmitImagesDataSuccess(responseJSON));
          }
        })
        .catch((error) => {
          dispatchSubmitGetImagesDataAction(
            getSubmitImagesDataFailure({
              errorMessage: 'Catch Block triggered for fetch',
            }),
          );
          ErrorEventLogger(error);
        });
    } catch (error) {
      ErrorEventLogger(error);
      dispatchSubmitGetImagesDataAction(
        getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}
