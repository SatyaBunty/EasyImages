import { imageFetchTypeOptions, SentenceCaseOptions, zeroIndexOptions } from "../../../../Constants/EnumConstants";
import { JSDownloader } from "../../../../Helpers/JSDownloader";
import { mainURL, PostGetPersonalImagesFromDriveURL } from "./../../../../Constants/URLConstants";
import { ErrorEventLogger } from './../../../../Helpers/EventLogger';

// export const imageFetchTypeOptions = Object.freeze({
//   IS_LOCAL_IMAGES: "IS_LOCAL_IMAGES",
//   IS_PERSONAL_IMAGES: "IS_PERSONAL_IMAGES",
//   IS_FROM_NON_COMPLEX_URL: "IS_FROM_NON_COMPLEX_URL"
// });


export const GET_UPDATE_SUBMIT_TYPE_DATA = 'GET_UPDATE_SUBMIT_TYPE_DATA';
export const GET_UPDATE_WORD_SENTENCE_CASE_DATA = 'GET_UPDATE_WORD_SENTENCE_CASE_DATA';
export const GET_IMAGES_DATA = 'GET_IMAGES_DATA';
export const GET_UPDATE_IMAGES_DATA = 'GET_UPDATE_IMAGES_DATA';
export const GET_SUBMIT_IMAGES_DATA = 'GET_SUBMIT_IMAGES_DATA';
export const GET_SUBMIT_IMAGES_DATA_SUCCESS =
  'GET_SUBMIT_IMAGES_DATA_SUCCESS';
export const GET_SUBMIT_IMAGES_DATA_FAILURE =
  'GET_SUBMIT_IMAGES_DATA_FAILURE';
export const GET_SUBMIT_IMAGES_DATA_RESET = 'GET_SUBMIT_IMAGES_DATA_RESET';



export const getUpdategetSubmitTypeData = (getSubmitTypeData) => ({ type: GET_UPDATE_SUBMIT_TYPE_DATA, payload: getSubmitTypeData });

export const getUpdateWordSentenceCaseData = (getWordSentenceData) => ({ type: GET_UPDATE_WORD_SENTENCE_CASE_DATA, payload: getWordSentenceData });

export const getUpdateImagesData = (getImagesData) => ({ type: GET_UPDATE_IMAGES_DATA, payload: getImagesData });

export const getImagesData = (imageData) => ({ type: GET_IMAGES_DATA, payload: imageData });

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

export function fetchUpdateWordSentenceCaseData(getWordSentenceData) {
  return async (dispatchUpdateWordSentenceCaseData) => {
    try {
      if (getWordSentenceData !== null && getWordSentenceData !== undefined && getWordSentenceData !== "") {
        getWordSentenceData.updatedURL = "";
        const splitText = getWordSentenceData.splitText;
        var _modifyText = getWordSentenceData.modifyText.split(splitText);
        var updatedModifyText = "";
        const gapText = " ";
        if (getWordSentenceData.gapText !== null && getWordSentenceData.gapText !== undefined) {
          gapText = getWordSentenceData.gapText;
        }

        if (getWordSentenceData.shallSplitText !== null && getWordSentenceData.shallSplitText !== undefined && getWordSentenceData.shallSplitText === zeroIndexOptions.YES) {
          if (_modifyText !== null && _modifyText !== undefined) {
            _modifyText.forEach((item) => {
              item.toString();
              switch (getWordSentenceData.sentenceCaseType) {
                case SentenceCaseOptions.SMALL:
                  updatedModifyText += item.toLowerCase() + gapText;
                  break;
                case SentenceCaseOptions.CAPS:
                  updatedModifyText += item.toUpperCase() + gapText;
                  break;
                case SentenceCaseOptions.PASCALCASE:
                  updatedModifyText += item.charAt(0).toUpperCase() + item.substr(1).toLowerCase() + gapText;
                  break;
                case SentenceCaseOptions.CAMELCASE:
                  updatedModifyText += item.toLowerCase() + gapText;
                  break;
                case SentenceCaseOptions.SENTENCECASE:
                  updatedModifyText += item.toLowerCase() + gapText;
                  break;
                default:
                  updatedModifyText += item + gapText;
                  break;
              }
            })
          }
        }
        else {
          updatedModifyText += getWordSentenceData.modifyText.replace(splitText, gapText) + gapText;
        }

        if (updatedModifyText.includes(gapText)) {
          updatedModifyText = updatedModifyText.substring(0, updatedModifyText.length - gapText.length);
        }

        let updatedValue = `${getWordSentenceData.imageURL}${updatedModifyText}`;
        dispatchUpdateWordSentenceCaseData(getUpdateWordSentenceCaseData({ ...getWordSentenceData, updatedURL: updatedValue }));
      }
      else {
        // dispatchUpdateWordSentenceCaseData(fetchGetLocalImagesDataAction());
      }
    } catch (error) {
      ErrorEventLogger(error);
      // dispatchUpdateWordSentenceCaseData(
      //   getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      // );
    }
  };
}

export function fetchSubmitGetImagesDataAction(getImagesData) {
  return async (dispatchSubmitGetImagesDataAction) => {
    try {
      if (getImagesData !== null && getImagesData !== undefined && getImagesData !== "" &&
      getImagesData.imageData !== null && getImagesData.imageData !== undefined && getImagesData.imageData !== "") {
        // switch (getImagesData.imageFetchType) {
        switch (getImagesData.serviceSubmitType){
          case imageFetchTypeOptions.PersonalImages:
            dispatchSubmitGetImagesDataAction(fetchGetPersonalImagesDataAction(getImagesData.imageData));
            break;
          case imageFetchTypeOptions.NonComplexUrl:
            dispatchSubmitGetImagesDataAction(fetchGetNonComplexUrlImagesDataAction(getImagesData.imageData));
            break;
          case imageFetchTypeOptions.SetSentenceCaseGapFill:
            break;
          default:
            dispatchSubmitGetImagesDataAction(fetchGetLocalImagesDataAction());
            break;
        }
      }
      else {
        dispatchSubmitGetImagesDataAction(fetchGetLocalImagesDataAction());
      }
    } catch (error) {
      ErrorEventLogger(error);
      dispatchSubmitGetImagesDataAction(
        getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}

export function fetchGetLocalImagesDataAction() {
  return async (dispatchGetLocalImagesDataAction) => {
    dispatchGetLocalImagesDataAction(getSubmitImagesData());
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
            let folderItems = responseJSON.folder_items.map((item) => {
              const finalImageURL = `https://drive.google.com/uc?id=${item.id}`;
              const eachImage = {
                ...item,
                displayURL: finalImageURL
              }
              return eachImage;
            });
            const imagesList = {
              folder_items: folderItems
            }
            dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
          }
        })
        .catch((error) => {
          dispatchGetLocalImagesDataAction(
            getSubmitImagesDataFailure({
              errorMessage: 'Catch Block triggered for fetch',
            }),
          );
          ErrorEventLogger(error);
        });
    } catch (error) {
      ErrorEventLogger(error);
      dispatchGetLocalImagesDataAction(
        getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}


export function fetchGetPersonalImagesDataAction(getImagesData) {
  return async (dispatchGetLocalImagesDataAction) => {
    dispatchGetLocalImagesDataAction(getSubmitImagesData());
    try {

      const url = mainURL + PostGetPersonalImagesFromDriveURL;// + "&callback=?";

      var userName = getImagesData.userName;
      var userPassword = getImagesData.userPassword;

      var xobj = new XMLHttpRequest();
      // xobj.setRequestHeader("content-type", "text/plain");
      xobj.onreadystatechange = function () {
        if (xobj.readyState === 4 && xobj.status === 200) {
          var responseData = xobj.response;
          if (responseData !== "") {
            var options = JSON.parse(responseData);
            var personalFolderID = options.accessible_items;
            dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(personalFolderID));
            //AccessDriveImages(personalFolderID);
          }
          else {
            window.alert("User is not available, Sorry"); dispatchGetLocalImagesDataAction(
              getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
            );
          }
        }
        else {
          dispatchGetLocalImagesDataAction(
            getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
          );
        }
      };

      var obj = { "method_name": "GetValidUserData", "service_request_data": { "UserName": userName, "Password": userPassword } };
      var dbParam = JSON.stringify(obj);

      xobj.open("POST", (url), true);
      xobj.setRequestHeader("content-type", "application/json");
      xobj.setRequestHeader("referrerPolicy", "no-referrer");
      xobj.send(dbParam);




      // const url = mainURL + PostGetPersonalImagesFromDriveURL + "&callback=?";
      // var postData = {
      //   method_name: "GetValidUserData",
      //   service_request_data: {
      //     UserName: getImagesData.userName,
      //     Password: getImagesData.userPassword,
      //   }
      // };
      // fetch(url, {
      //   method: 'POST',// *GET, POST, PUT, DELETE, etc.
      //   body: JSON.stringify(postData),
      //   headers: {
      //     // "Access-Control-Allow-Origin": "*",
      //     // Accept: '*/*',
      //     // credentials: 'include', // include, *same-origin, omit
      //     // redirect: 'follow',
      //     // 'Accept-Encoding': ['gzip', 'deflate', 'br'],
      //     // Connection: 'keep-alive',
      //     // 'Content-Type': 'application/json',
      //     // 'Content-Type': 'application/json;charset=UTF-8',
      //     // 'Content-Type': 'text/plain;charset=utf-8',
      //     // 'Content-Type': 'text/plain',
      //   },

      //   // type: "opaque",
      //   // mode: 'no-cors', // no-cors, *cors, same-origin
      //   // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   // credentials: 'omit', // include, *same-origin, omit
      //   // redirect: 'follow', // manual, *follow, error
      //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

      //   // crossDomain: true,
      //   // dataType: "jsonp",
      // })
      //   .then((response) => {
      //     return response.json();
      //   })
      //   .then((responseJSON) => {
      //     if (responseJSON !== null && responseJSON !== undefined) {
      //       let folderItems = responseJSON.folder_items.map((item) => {
      //         const finalImageURL = `https://drive.google.com/uc?id=${item.id}`;
      //         const eachImage = {
      //           ...item,
      //           displayURL: finalImageURL
      //         }
      //         return eachImage;
      //       });
      //       const imagesList = {
      //         folder_items: folderItems
      //       }
      //       dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
      //     }
      //   })
      //   .catch((error) => {
      //     dispatchGetLocalImagesDataAction(
      //       getSubmitImagesDataFailure({
      //         errorMessage: 'Catch Block triggered for fetch',
      //       }),
      //     );
      //     ErrorEventLogger(error);
      //   });
    } catch (error) {
      ErrorEventLogger(error);
      dispatchGetLocalImagesDataAction(
        getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}


export function fetchGetNonComplexUrlImagesDataAction(getImagesData) {
  return async (dispatchGetLocalImagesDataAction) => {
    dispatchGetLocalImagesDataAction(getSubmitImagesData());
    try {
      const url = getImagesData.imageURL;

      var imageType = getImagesData.imageType;

      let _startIndex = parseInt(getImagesData.startIndex);
      let _endIndex = parseInt(getImagesData.endIndex);
      let startIndex = 0;
      var endIndex = 10;
      if (!isNaN(_startIndex)) {
        startIndex = _startIndex;
      }
      if (!isNaN(_endIndex)) {
        endIndex = _endIndex;
      }

      let folderItems = [];

      var hasZeroForSingleDigitsNum = getImagesData.isZeroIndexed;

      var count = startIndex - 1;
      for (var i = startIndex; i <= endIndex; i++) {
        var changablePart = i;
        if (hasZeroForSingleDigitsNum === zeroIndexOptions.YES) {
          if (i < 10) {
            changablePart = "0" + i;
          }
        }
        const finalImageURL = url + changablePart + "." + imageType;
        const eachImage = {
          id: changablePart,
          mimeType: "image",
          name: "",
          url: finalImageURL,
          displayURL: finalImageURL,
          totalImages: endIndex,
          isImageLoadable: true
        }

        // // Working fine but the time delay is more
        // var fetchValue = await fetch(finalImageURL);
        // console.log(fetchValue);
        // let urlStatus = fetchValue.status;
        // if(urlStatus !== null && urlStatus !== undefined && urlStatus !== "" && (urlStatus !== 404)){
        //   folderItems.push(eachImage);
        // }
        /*
        // var value = await JSDownloader.checkIsURLValid(eachImage, (obj) => {
        //   // console.log(obj);
        //   // folderItems.push(eachImage);
        //   // if (eachImage.id === eachImage.totalImages) {
        //   //   const imagesList = {
        //   //     folder_items: folderItems
        //   //   }
        //   //   dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
        //   // }
        // }, () => { 
        //   // count ++;
        //     // dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
        // });
        // console.log(value);

        // JSDownloader.checkIsURLValid(eachImage, (obj) => {
        //   console.log(obj);
        //   folderItems.push(eachImage);
        //   if (eachImage.id === eachImage.totalImages) {
        //     const imagesList = {
        //       folder_items: folderItems
        //     }
        //     dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
        //   }
        // }, () => { 
        //   // count ++;
        //     // dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
        // });
        */
        folderItems.push(eachImage);
      }
      const imagesList = {
        folder_items: folderItems
      }
      dispatchGetLocalImagesDataAction(getSubmitImagesDataSuccess(imagesList));
    }
    catch (error) {
      ErrorEventLogger(error);
      dispatchGetLocalImagesDataAction(
        getSubmitImagesDataFailure({ errorMessage: 'Catch Block triggered' }),
      );
    }
  };
}
