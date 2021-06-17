import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Loader from './../../../../CustomControls/Loader/Loader';
import CustomButton from './../../../../CustomControls/CustomButton/CustomButton';
import Header from './../../../../CustomControls/Header_Body/Header';
import PageBody from './../../../../CustomControls/Header_Body/PageBody';
import "./ShowImageAsGallery.css";
import { useHistory } from 'react-router-dom';
import { fetchGetImagesDataFromFolderAction, getImagesDataFromFolderReset, getServiceStateReset } from './ShowImageAsGalleryActions';
import { FAILURE, SUCCESS } from './../../../../Constants/URLConstants';

const ShowImageAs_Gallery = (props) => {
   const imageDataModel =
   {
      id: "",
      name: ""
   }
   const [curentDisplayImageItem, changeCurrentDisplayImageItem] = useState(imageDataModel);
   const history = useHistory();
   const { imagesList } = history.location.state;
   // console.log(imagesList);
   let images_List = [];
   const {
      dispatch,
      images,
      loaderVisibility,
      serviceState,
      message
   } = props;

   useEffect(() => {
      dispatch(getImagesDataFromFolderReset());
   }, [dispatch]);

   // useEffect(() => {
   //    if (images !== null) {
   //       images_List = images;
   //    }
   // }, [images]);

   const OnFolderClick = (folderItem) => {
      if (folderItem !== null && folderItem !== undefined && folderItem !== "" && folderItem.id !== null && folderItem.id !== undefined && folderItem.id !== "") {
         dispatch(fetchGetImagesDataFromFolderAction(folderItem.id));
      }
   }

   const OnImageClick = (item) => {
      changeCurrentDisplayImageItem(item);
   }

   // if (serviceState !== null && serviceState !== undefined && serviceState !== "" && message !== null && message !== undefined && message !== "") {
   //    if (window.confirm(message)) {
   //       if (serviceState === SUCCESS) {
   //          if(images !== null && images !== undefined && images !== "" && images.length > 0){
   //             images_List = images;
   //          }
   //       }
   //       else if (serviceState === FAILURE) {
   //       }
   //    }
   //    dispatch(getServiceStateReset());
   // }

   if (serviceState !== null && serviceState !== undefined && serviceState !== "") {

      if (serviceState === FAILURE && message !== null && message !== undefined && message !== "") {
         if (window.confirm(message)) { }
      } else if (serviceState === SUCCESS) {
         if (images !== null && images !== undefined && images !== "" && images.length > 0) {
            images_List = images;
         }
      }
      else{
         if (images !== null && images !== undefined && images !== "" && images.length > 0) {
            images_List = images;
         }
         else{
            images_List = imagesList.folder_items
         }
      }
      dispatch(getServiceStateReset());
   }

   const onImageSelected = (selectedItem) => {
      if (selectedItem !== null && selectedItem !== undefined && selectedItem !== "" && selectedItem.id !== null && selectedItem.id !== undefined && selectedItem.id !== "") {
         const displayURL = "https://drive.google.com/uc?id=" + selectedItem.id
         return (
            <>
               <div className="galleryDivShared">
                  {images_List.map((item) => fillGalleryWithImages(item))}
               </div>

               <div className="eachImageDiv">
                  <div className="closeButtonHolder">
                     <p>{selectedItem.name}</p>
                     <CustomButton className="closeButton" title="X" onClick={() => { changeCurrentDisplayImageItem(imageDataModel) }} />
                  </div>
                  <img className="displayImage" alt="unable to load" src={displayURL} />
               </div>
            </>
         )
      }
      else {
         return (<><div className="galleryDivFull">
            {images_List.map((item) => fillGalleryWithImages(item))}
         </div></>);
      }
   }
   const fillGalleryWithImages = (item) => {
      let cellViewDiv = (<></>);
      if (item.mimeType === "folder") {
         cellViewDiv = (
            <CustomButton className="folderCellViewButton" item={item} onClick={() => OnFolderClick(item)} >
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
         {(loaderVisibility) ?
            <Loader /> :
            <></>
         }
         <PageBody className="bodyHolder">
            <div className="holderDiv">
               {/* <div className="galleryDiv">
                  {images_List.map((item) => fillGalleryWithImages(item))}
               </div> */}
               {onImageSelected(curentDisplayImageItem)}
               {/* <div className="eachImageDiv">
                  {onImageSelected()}
               </div> */}
            </div>
         </PageBody>
      </div>
   )
}
const mapToProps = (state) => {
   console.log(state);
   const { images, serviceState, loaderVisibility, message } = state.ShowImageAsGalleryReducer;
   return {
      images, serviceState, loaderVisibility, message
   };
};

const ShowImageAsGallery = connect(mapToProps)(ShowImageAs_Gallery);
export default ShowImageAsGallery;
