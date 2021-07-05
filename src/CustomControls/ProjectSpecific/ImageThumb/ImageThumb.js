import React, { useEffect } from 'react';
import { useState } from 'react';
import CustomButton from '../../CustomButton/CustomButton';
import "./ImageThumb.css";

const ImageThumb = (props) => {
    const {
        id,
        name,
        hintText,
        labelText,
        item,
        // isRequired,
        onClick,
        onChange,
    } = props;

    const [imageItem, setImageItem] = useState(null);
    
    useEffect(()=>{
        if(item !== null && item !== undefined && item !== ""){
            if(item.displayURL !== null && item !== undefined && item !== ""){
                fetch(item.displayURL).then((response) => {
                    return response.json;
                }).then((responseJSON) => {
                    if(responseJSON !== null && responseJSON !== undefined){
                        if (responseJSON.status !== 404) {
                            setImageItem(item);
                        }
                        else{
                            setImageItem(null);
                        }
                    }
                    else{
                        setImageItem(null);
                    }
                }).catch((ex) => {
                    setImageItem(null);
                });
            }
        }
    },[item]);

      return (
        <>
        {
            (imageItem !== null && imageItem !== undefined && imageItem !== "") ?
            (
                <CustomButton className="imageCellViewButton" onClick={onClick}>
                       <div className="imageCellViewDiv">
                          <img className="imageCellViewImage" alt="unable to load" src={imageItem.displayURL} />
                       </div>
                    </CustomButton>) :
            (<></>)
        }
        </>
      )
}
export default ImageThumb;