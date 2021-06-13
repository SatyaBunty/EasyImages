import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../CustomControls/Loader/Loader';
import CustomButton from '../../../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../../../CustomControls/EntryBox/EntryBox';
import FormData from '../../../../CustomControls/FormData/FormData';
import Header from '../../../../CustomControls/Header_Body/Header';
import PageBody from '../../../../CustomControls/Header_Body/PageBody';
import Picker from '../../../../CustomControls/Picker/Picker';
import "./GetImagesOptionsPage.css";
import { options, imageTypeOptions, zeroIndexOptions } from './../../../../Constants/EnumConstants';
import { getUpdateImagesData, fetchSubmitGetImagesDataAction } from '../GetImagesActions';

const GetImagesOptions_Page = (props) => {
   const [selectedOption, changeSelectedOption] = useState(options.unSelected);
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
      serviceState,
      loaderVisibility,
      message,
   } = props;

   console.log(props);

   const onOptionsSelected = (event) => {
      changeSelectedOption(event.target.value);
   }

   const onImageDataOptionsSelected = (event) => {
      let objectKey = (event.target.name);
      // changeImageData({ ...imageData, [objectKey]: event.target.value });
      dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
   }

   const onImageDataEntryValueChaned = (event) => {
      let objectKey = (event.target.name);
      // changeImageData({ ...imageData, [objectKey]: event.target.value });
      dispatch(getUpdateImagesData({ ...imageData, [objectKey]: event.target.value }));
   }

   const onSubmitOption = (event) => {
      event.preventDefault();
      // console.log(imageData);
      dispatch(fetchSubmitGetImagesDataAction(imageData));
   }

   const entryOptionsDiv = (optionSelected) => {
      if (optionSelected === options.LocalImages) {
         return (<div>
         </div>);
      } else if (optionSelected === options.PersonalImages) {
         return (<div>
            <EntryBox id="hehe" labelText="User Name" hintText="Enter User Name" isRequired={true} />
            <EntryBox type="password" labelText="User Password" hintText="Enter Password" isRequired={true} />
         </div>);
      } else if (optionSelected === options.NonComplexUrl) {
         return (<div>
            <Picker name="imageType" labelText="Select a image type" onChange={onImageDataOptionsSelected}>
               <option value={imageTypeOptions.JPG}>{imageTypeOptions.JPG}</option>
               <option value={imageTypeOptions.JPEG}>{imageTypeOptions.JPEG}</option>
               <option value={imageTypeOptions.PNG}>{imageTypeOptions.PNG}</option>
            </Picker>
            <EntryBox name="imageURL" labelText="Add URL" hintText="Enter URL" onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="startIndex" labelText="Enter start number of number of images needed" hintText="Enter Start Index" onChange={onImageDataEntryValueChaned} isRequired={true} />
            <EntryBox name="endIndex" labelText="Enter last number of number of images needed" hintText="Enter Last Index" onChange={onImageDataEntryValueChaned} isRequired={true} />
            <Picker name="isZeroIndexed" labelText="Select does the index of images need 0 at front as 01, 02" onChange={onImageDataOptionsSelected}>
               <option value={zeroIndexOptions.YES}>{zeroIndexOptions.YES}</option>
               <option value={zeroIndexOptions.NO}>{zeroIndexOptions.NO}</option>
            </Picker>
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
               <Picker labelText="Please select an option" onChange={onOptionsSelected}>
                  <option value={options.unSelected}>select a option</option>
                  <option value={options.LocalImages}>Access Local Images</option>
                  <option value={options.PersonalImages}>Access Personal Images</option>
                  <option value={options.NonComplexUrl}>I have a non Complex URL</option>
               </Picker>
            </div>
            {(selectedOption !== options.unSelected) ?
               <>
                  <FormData method="post" action="" name="singleURLForm" onsubmit="return false;">
                     {entryOptionsDiv(selectedOption)}
                     <CustomButton title="Submit" onClick={onSubmitOption} />
                  </FormData>
               </> :
               <></>
            }
         </PageBody>
      </div>
   )
}
const mapToProps = (state) => {
   console.log(state);
   const { imageData, serviceState, loaderVisibility, message } = state.GetImagesReducer;
   return {
      imageData, serviceState, loaderVisibility, message
   };
};

const GetImagesOptionsPage = connect(mapToProps)(GetImagesOptions_Page);
export default GetImagesOptionsPage;