import { mainURL, PostGetImagesFromFolderURL } from "../../../../Constants/URLConstants";
import { ErrorEventLogger } from '../../../../Helpers/EventLogger';

export const GET_IMAGES_DATA_FROM_FOLDER = 'GET_IMAGES_DATA_FROM_FOLDER';
export const GET_IMAGES_DATA_FROM_FOLDER_SUCCESS =
  'GET_IMAGES_DATA_FROM_FOLDER_SUCCESS';
export const GET_IMAGES_DATA_FROM_FOLDER_FAILURE =
  'GET_IMAGES_DATA_FROM_FOLDER_FAILURE';
export const GET_IMAGES_DATA_FROM_FOLDER_RESET = 'GET_IMAGES_DATA_FROM_FOLDER_RESET';


export const GET_SERVICE_STATE_RESET = 'GET_SERVICE_STATE_RESET';

export const getImagesDataFromFolder = () => ({ type: GET_IMAGES_DATA_FROM_FOLDER });
export const getImagesDataFromFolderSuccess = (successData) => ({
  type: GET_IMAGES_DATA_FROM_FOLDER_SUCCESS,
  payload: successData,
});
export const getImagesDataFromFolderFailure = (failureReport) => ({
  type: GET_IMAGES_DATA_FROM_FOLDER_FAILURE,
  payload: failureReport,
});
export const getImagesDataFromFolderReset = () => ({
  type: GET_IMAGES_DATA_FROM_FOLDER_RESET,
});
export function fetchGetImagesDataFromFolderAction(folderID) {
  return async (dispatchGetImagesDataFromFolderAction) => {
    dispatchGetImagesDataFromFolderAction(getImagesDataFromFolder());
    try {
      const url = mainURL + PostGetImagesFromFolderURL;
      var postData = {
        method_name: "listFilesInFolder",
        service_request_data: {
          folder_id: folderID
        }
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(postData),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          if (responseJSON !== null && responseJSON !== undefined && responseJSON.folder_items !== null && responseJSON.folder_items !== undefined) {
            if (responseJSON.folder_items.length <= 0) {
              dispatchGetImagesDataFromFolderAction(
                getImagesDataFromFolderFailure({
                  message: 'Folder is empty',
                }),
              );
            }
            else {
              dispatchGetImagesDataFromFolderAction(getImagesDataFromFolderSuccess(responseJSON.folder_items));
            }
          }
        })
        .catch((error) => {
          dispatchGetImagesDataFromFolderAction(
            getImagesDataFromFolderFailure({
              errorMessage: 'Catch Block triggered for fetch',
            }),
          );
          ErrorEventLogger(error);
        });
    } catch (error) {
      ErrorEventLogger(error);
      dispatchGetImagesDataFromFolderAction(
        getImagesDataFromFolderFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}

export const getServiceStateReset = () => ({ type: GET_SERVICE_STATE_RESET });