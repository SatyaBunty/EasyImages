import { mainURL, PostGetImagesFromFolderURL } from "../../../../Constants/URLConstants";
import { ErrorEventLogger } from './../../../../Helpers/EventLogger';

export const GET_IMAGES_DATA_FROM_FOLDER = 'GET_IMAGES_DATA_FROM_FOLDER';
export const GET_IMAGES_DATA_FROM_FOLDER_SUCCESS =
  'GET_IMAGES_DATA_FROM_FOLDER_SUCCESS';
export const GET_IMAGES_DATA_FROM_FOLDER_FAILURE =
  'GET_IMAGES_DATA_FROM_FOLDER_FAILURE';
export const GET_IMAGES_DATA_FROM_FOLDER_RESET = 'GET_IMAGES_DATA_FROM_FOLDER_RESET';

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
        // mode: 'cors',
        // credentials: 'include', // include, *same-origin, omit
        // redirect: 'follow',
        // headers: {
        //   // Accept: '*/*',
        //   // 'Accept-Encoding': ['gzip', 'deflate', 'br'],
        //   // Connection: 'keep-alive',
        //   'Content-Type': 'application/json',
        // },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          // if (responseJSON.status_code === SUCCESS_STATUS_CODE) {
          //   dispatchGetImagesDataFromFolderAction(getSubmitImagesDataSuccess({}));
          // }
          if (responseJSON !== null && responseJSON !== undefined) {
            if (responseJSON.count() <= 0) {
              dispatchGetImagesDataFromFolderAction(
                getImagesDataFromFolderFailure({
                  errorMessage: 'Folder is empty',
                }),
              );
            }
            else {
              dispatchGetImagesDataFromFolderAction(getImagesDataFromFolderSuccess(responseJSON));
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
// function AccessDriveImages(accessID) {
//   var urlPart1 = "https://script.google.com/macros/s/";
//   var id = "AKfycbx-jmj_70IEWRP3t5Z2QFSIkWakhYbTYvTMM2uTCCIE3ZXx0loS";//https://script.google.com/macros/s/AKfycbx-jmj_70IEWRP3t5Z2QFSIkWakhYbTYvTMM2uTCCIE3ZXx0loS/exec
//   var extension = "/exec";
//   var serviceURL = urlPart1 + id + extension;

//   //{ "name":"labnol", "blog":"ctrlq", "type":"post"  }
//   //dbParam = JSON.stringify(obj);
//   var xobj = new XMLHttpRequest();
//   // xobj.overrideMimeType("application/json");
//   xobj.setRequestHeader("Content-type", "application/json");
//   // var dbParam = obj;
//   //var dbParam = "employeeStatus='Active'&name='Henry'";//this works but sends data to contents in postdata.
//   //var serviceURLs = serviceURL + "?" + dbParam;
//   // xobj.open("POST", (serviceURL +"?"+ JSON.stringify(headerObj)), true);

//   var headerObj = "?Contenttype=application/json&userRequest=FileAccess";

//   //var obj = {"method_name":"ConvertDocDataToHTML","service_request_data":{"file_name":"TestDocment","folder_id":"1ql0PNnEIh9gyKnhq8GahnbpOxlxGHUUl"}};
//   var obj = { "method_name": "listFilesInFolder", "service_request_data": { "folder_id": accessID } };
//   var dbParam = JSON.stringify(obj);

//   xobj.open("POST", (serviceURL + "?" + headerObj), true);
//   xobj.send(dbParam);


// }