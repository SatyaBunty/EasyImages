import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../CustomControls/Loader/Loader';
import CustomButton from '../../../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../../../CustomControls/EntryBox/EntryBox';
import FormData from '../../../../CustomControls/FormData/FormData';
import Header from '../../../../CustomControls/Header_Body/Header';
import PageBody from '../../../../CustomControls/Header_Body/PageBody';
import Picker from '../../../../CustomControls/Picker/Picker';
import "./ShowImageAsGallery.css";
import { options, imageTypeOptions, zeroIndexOptions } from './../../../../Constants/EnumConstants';
import { useHistory } from 'react-router-dom';

const ShowImageAs_Gallery = (props) => {
   const {
      dispatch,
   } = props;
   const history = useHistory();

   console.log(props);

   const entryOptionsDiv = (optionSelected) => {
    //   if (optionSelected === options.LocalImages) {
    //      return (<div>
    //      </div>);
    //   } else if (optionSelected === options.PersonalImages) {
    //      return (<div>
    //         <EntryBox id="hehe" labelText="User Name" hintText="Enter User Name" isRequired={true} />
    //         <EntryBox type="password" labelText="User Password" hintText="Enter Password" isRequired={true} />
    //      </div>);
    //   } else if (optionSelected === options.NonComplexUrl) {
    //      return (<div>
    //         <Picker name="imageType" labelText="Select a image type" onChange={onImageDataOptionsSelected}>
    //            <option value={imageTypeOptions.JPG}>{imageTypeOptions.JPG}</option>
    //            <option value={imageTypeOptions.JPEG}>{imageTypeOptions.JPEG}</option>
    //            <option value={imageTypeOptions.PNG}>{imageTypeOptions.PNG}</option>
    //         </Picker>
    //         <EntryBox name="imageURL" labelText="Add URL" hintText="Enter URL" onChange={onImageDataEntryValueChaned} isRequired={true} />
    //         <EntryBox name="startIndex" labelText="Enter start number of number of images needed" hintText="Enter Start Index" onChange={onImageDataEntryValueChaned} isRequired={true} />
    //         <EntryBox name="endIndex" labelText="Enter last number of number of images needed" hintText="Enter Last Index" onChange={onImageDataEntryValueChaned} isRequired={true} />
    //         <Picker name="isZeroIndexed" labelText="Select does the index of images need 0 at front as 01, 02" onChange={onImageDataOptionsSelected}>
    //            <option value={zeroIndexOptions.YES}>{zeroIndexOptions.YES}</option>
    //            <option value={zeroIndexOptions.NO}>{zeroIndexOptions.NO}</option>
    //         </Picker>
    //      </div>);
    //   } else {
    //      return (<div></div>);
    //   }
   }

//    if(serviceState !== null && serviceState === undefined && serviceState === SUCCESS){
//       history.push("/showImageGallery");
//    }

   return (
      <div className="mainHolder">
         <Header />
         {/* {(loaderVisibility) ?
            <Loader /> :
            <></>
         } */}
         <PageBody className="bodyHolder">
            <div>
               
            </div>
         </PageBody>
      </div>
   )
}
const mapToProps = (state) => {
   console.log(state);
   const { imageData, images, serviceState, loaderVisibility, message } = state.GetImagesReducer;
   return {
      imageData, images, serviceState, loaderVisibility, message
   };
};

const ShowImageAsGallery = connect(mapToProps)(ShowImageAs_Gallery);
export default ShowImageAsGallery;