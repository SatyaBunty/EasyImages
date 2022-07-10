import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../CustomControls/Loader/Loader';
import CustomButton from '../../../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../../../CustomControls/EntryBox/EntryBox';
import FormData from '../../../../CustomControls/FormData/FormData';
import Header from '../../../../CustomControls/Header_Body/Header';
import PageBody from '../../../../CustomControls/Header_Body/PageBody';
import Picker from '../../../../CustomControls/Picker/Picker';
import "./GetImagesOptionsPage.css";
import { imageFetchTypeOptions, imageTypeOptions, zeroIndexOptions, SentenceCaseOptions } from './../../../../Constants/EnumConstants';
import { getUpdategetSubmitTypeData, getUpdateImagesData, fetchUpdateWordSentenceCaseData, fetchSubmitGetImagesDataAction, getSubmitImagesDataReset } from './GetImagesActions';
import { SUCCESS } from '../../../../Constants/URLConstants';
import { Link, useHistory } from 'react-router-dom';

const GetImagesOptions_Page = (props) => {
   // const [selectedOption, changeSelectedOption] = useState(imageFetchTypeOptions.unSelected);
   // const [imageData, changeImageData] = useState({
   //    imageType: imageTypeOptions.JPG,
   //    isZeroIndexed: zeroIndexOptions.YES,
   //    imageURL: "",
   //    startIndex: "0",
   //    endIndex: "100",
   // });

   const {
      dispatch,
      imageData,
      wordSentenceCaseData,
      images,
      serviceSubmitType,
      serviceState,
      loaderVisibility,
      message,
   } = props;
   const history = useHistory();

   // console.log(props);

   const onOptionsSelected = (event) => {
      dispatch(getUpdategetSubmitTypeData(event.target.value));
      // changeSelectedOption(event.target.value);
      /*
      if(event.target.id !== null && event.target.id !== undefined){
         if(event.target.id === imageFetchTypeOptions.SetSentenceCaseGapFill){
            dispatch(fetchUpdateWordSentenceCaseData({ 
               updatedURL: "",
               sentenceCaseType: "",
               imageURL: "",
               modifyText: "",
               shallSplitText: "",
               splitText: "", }));
         }
         else{
            dispatch(getUpdateImagesData({ ...imageData, imageFetchType: event.target.value }));
         }
      }
      else{
         dispatch(getUpdateImagesData({ ...imageData, imageFetchType: event.target.value }));
      }
      */
   }

   const onImageDataOptionsSelected = (event) => {
      let objectKey = (event.target.name);
      // changeImageData({ ...imageData, [objectKey]: event.target.value });
      if (event.target.id !== null && event.target.id !== undefined) {
         if (event.target.id === imageFetchTypeOptions.SetSentenceCaseGapFill) {
            dispatch(fetchUpdateWordSentenceCaseData({ ...wordSentenceCaseData, [objectKey]: event.target.value }));
         }
         else {
            dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
         }
      }
      else {
         dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
      }
   }

   const onImageDataEntryValueChaned = (event) => {
      let objectKey = (event.target.name);
      // changeImageData({ ...imageData, [objectKey]: event.target.value });
      if (event.target.id !== null && event.target.id !== undefined) {
         if (event.target.id === imageFetchTypeOptions.SetSentenceCaseGapFill) {
            dispatch(fetchUpdateWordSentenceCaseData({ ...wordSentenceCaseData, [objectKey]: event.target.value }));
         }
         else {
            dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
         }
      }
      else {
         dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
      }
   }

   const onSubmitOption = (event) => {
      event.preventDefault();

      // console.log(imageData);
      dispatch(fetchSubmitGetImagesDataAction({ serviceSubmitType: serviceSubmitType, imageData: imageData }));
      /*
      history.push({
         pathname: "/getAllImagesInURL"
      });
      */
   }

   if (serviceState !== null && serviceState !== undefined && serviceState === "SUCCESS") {
      /*if (imageData.imageFetchType === imageFetchTypeOptions.NonComplexUrl)*/
      if (serviceSubmitType === imageFetchTypeOptions.NonComplexUrl) {
         history.push({
            pathname: "/showImageGalleryFromURL",
            state: { imagesList: images }
         });
      }
      else {
         history.push({
            pathname: "/showImageGallery",
            state: { imagesList: images }
         });
      }
      //dispatch(getSubmitImagesDataReset());
   }

   const entryOptionsDiv = (optionSelected) => {
      if (optionSelected === imageFetchTypeOptions.LocalImages) {
         return (<div>
         </div>);
      } else if (optionSelected === imageFetchTypeOptions.PersonalImages) {
         return (<div>
            <EntryBox name="userName" labelText="User Name" hintText="Enter User Name" value={imageData.userName} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="userPassword" type="password" labelText="User Password" value={imageData.userPassword} hintText="Enter Password" onChange={onImageDataEntryValueChaned} isRequired={true} />
         </div>);
      } else if (optionSelected === imageFetchTypeOptions.NonComplexUrl) {
         return (<div>
            <Picker name="imageType" labelText="Select a image type" options={Object.values(imageTypeOptions)} selectedValue={imageData.imageType}  onChange={onImageDataOptionsSelected}>
            </Picker>
            <EntryBox name="imageURL" labelText="Add URL by removing the number and image type (eg.:www.img01.jpg --> www.img)" hintText="Enter URL" value={imageData.imageURL} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="startIndex" labelText="Enter start number of number of images needed" hintText="Enter Start Index" value={imageData.startIndex} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="endIndex" labelText="Enter last number of number of images needed" hintText="Enter Last Index" value={imageData.endIndex} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <Picker name="isZeroIndexed" labelText="Select does the index of images need 0 at front as 01, 02" options={Object.values(zeroIndexOptions)} selectedValue={imageData.isZeroIndexed} onChange={onImageDataOptionsSelected}>
            </Picker>
         </div>);
      } else if (optionSelected === imageFetchTypeOptions.SetSentenceCaseGapFill) {
         return (<div>
            <Link href={wordSentenceCaseData.updatedURL} />
            <text>{wordSentenceCaseData.updatedURL}</text>
            <Picker name="sentenceCaseType" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Select a sentence case type" options={Object.values(SentenceCaseOptions)} selectedValue={wordSentenceCaseData.sentenceCaseType} onChange={onImageDataOptionsSelected}>
            </Picker>
            <EntryBox name="imageURL" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Add URL by removing the text to be modified(eg.:www.img01.jpg --> www.img)" hintText="Enter URL" value={wordSentenceCaseData.imageURL} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="modifyText" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Enter the text to be modified" value={wordSentenceCaseData.modifyText} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="splitText" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Enter the text at split to be done" value={wordSentenceCaseData.splitText} onChange={onImageDataEntryValueChaned} isRequired={true} />
            <Picker name="shallSplitText" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Select does the text to be split" options={Object.values(zeroIndexOptions)} selectedValue={wordSentenceCaseData.shallSplitText} onChange={onImageDataOptionsSelected}>
            </Picker>
            <EntryBox name="gapText" id={imageFetchTypeOptions.SetSentenceCaseGapFill} labelText="Enter the text to be filled between gaps" value={wordSentenceCaseData.gapText} onChange={onImageDataEntryValueChaned} isRequired={true} />
         </div>);
      } else {
         return (<div></div>);
      }
   }

   return (
      <div className="mainHolder">
         <Header />
         {(loaderVisibility) ?
            <Loader /> :
            <></>
         }
         <PageBody className="bodyHolder">
            <div>
               <Picker labelText="Please select an option" options={Object.values(imageFetchTypeOptions)} selectedValue={serviceSubmitType} onChange={onOptionsSelected}>
               </Picker>
            </div>
            {/*(imageData.imageFetchType !== imageFetchTypeOptions.unSelected)*/ (serviceSubmitType !== imageFetchTypeOptions.unSelected) ? /* {(selectedOption !== imageFetchTypeOptions.unSelected) ? }*/
               <>
                  <FormData method="post" action="" name="singleURLForm" onsubmit="return false;">
                     {/* {entryOptionsDiv(selectedOption)} */}
                     {/* {entryOptionsDiv(imageData.imageFetchType)} */}
                     {entryOptionsDiv(serviceSubmitType)}
                     {
                        (serviceSubmitType === imageFetchTypeOptions.NonComplexUrl ||
                           serviceSubmitType === imageFetchTypeOptions.PersonalImages ||
                           serviceSubmitType === imageFetchTypeOptions.LocalImages) ?
                           (<CustomButton isFullButton={true} title="Submit" onClick={onSubmitOption} />) :
                           (<></>)
                     }
                  </FormData>
               </> :
               <></>
            }
         </PageBody>
      </div>
   )
}
const mapToProps = (state) => {
   // console.log(state);
   const { imageData, wordSentenceCaseData, images, serviceSubmitType, serviceState, loaderVisibility, message } = state.GetImagesReducer;
   return {
      imageData, wordSentenceCaseData, images, serviceSubmitType, serviceState, loaderVisibility, message
   };
};

const GetImagesOptionsPage = connect(mapToProps)(GetImagesOptions_Page);
export default GetImagesOptionsPage;