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
   const [curentDisplayURL, changeCurrentDisplayURL] = useState("");
   const history = useHistory();
   const { imagesList } = history.location.state;
   console.log(imagesList);
   const images_List = imagesList.folder_items;

   const OnFolderClick = () => {
      alert("folder clicked");
   }

   const OnImageClick = (item) => {
      changeCurrentDisplayURL(item.id);
   }

   const onImageSelected = (item) => {
      if (item !== null && item !== undefined && item !== "") {
         const displayURL = "https://drive.google.com/uc?id=" + item
         return (
            <div className="eachImageDiv">
               <div className="closeButtonHolder">
                  <CustomButton className="closeButton" title="X" onClick={() => {}} />
               </div>
               <img className="displayImage" alt="unable to load" src={displayURL} />
            </div>
         )
      }
      else {
         return (<></>);
      }
   }
   const fillGalleryWithImages = (item) => {
      let cellViewDiv = (<></>);
      if (item.mimeType === "folder") {
         cellViewDiv = (
            <CustomButton className="folderCellViewButton" item={item} onClick={OnFolderClick} >
               <div className="folderCellViewDiv">
                  <img className="folderCellViewImage" alt="unable to load" src={`Assets/Images/FolderIcon.jpg`} />
                  <h3>{item.Name}</h3>
               </div>
            </CustomButton>
         )
      }
      else if (item.mimeType === "image") {
         const displayURL = "https://drive.google.com/uc?id=" + item.id;
         // var fileName = item.name;
         cellViewDiv = (
            <CustomButton className="imageCellViewButton" onClick={() => OnImageClick(item)}>
               <div id="lvtemplate" className="imageCellViewDiv">
                  <img className="imageCellViewImage" alt="unable to load" src={displayURL} />
               </div>
            </CustomButton>
         )
      }
      else { }
      return (<div>
         {cellViewDiv}
      </div>)
   }

   return (
      <div className="mainHolder">
         <Header showBackButton={true} navigationPath="/getImages" />
         {/* {(loaderVisibility) ?
            <Loader /> :
            <></>
         } */}
         <PageBody className="bodyHolder">
            <div className="holderDiv">
               <div className="galleryDiv">
                  {images_List.map((item) => fillGalleryWithImages(item))}
               </div>
               {onImageSelected(curentDisplayURL)}
               {/* <div className="eachImageDiv">
                  {onImageSelected()}
               </div> */}
            </div>
         </PageBody>
      </div>
   )
}
const mapToProps = (state) => {
   // console.log(state);
   // const { imageData, images, serviceState, loaderVisibility, message } = state.GetImagesReducer;
   return {
      ...state
      // imageData, images, serviceState, loaderVisibility, message
   };
};

const ShowImageAsGallery = connect(mapToProps)(ShowImageAs_Gallery);
export default ShowImageAsGallery;
