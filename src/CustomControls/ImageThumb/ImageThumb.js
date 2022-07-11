import React, { useEffect } from 'react';
import { useState } from 'react';
import CustomButton from '../CustomButton/CustomButton';
import "./ImageThumb.css";

const ImageThumb = (props) => {
    const {
        item,
        onClick,
        checkAndLoad
    } = props;

    const [imageItem, setImageItem] = useState(null);

    useEffect(() => {
        if(checkAndLoad === true){
        if (item !== null && item !== undefined && item !== "") {
            if (item.displayURL !== null && item !== undefined && item !== "") {

                var xhttp = new XMLHttpRequest();
                xhttp.open('HEAD', item.displayURL);
                // xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");//
                xhttp.onreadystatechange = function () {
                    if (this.readyState === this.DONE) {
                        // console.log(this.status);
                        // console.log(this.getResponseHeader("Content-Type"));
                        let urlStatus = this.status;
                        if (urlStatus !== null && urlStatus !== undefined && urlStatus !== "" && urlStatus !== 0 && (urlStatus < 400)) {
                            setImageItem(item);
                        }
                        else {
                            setImageItem(null);
                        }
                    }
                };
                xhttp.send();
            }
        }
    }
    else{
        setImageItem(item);
    }
    }, [item, checkAndLoad]);

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
                    (
                        <>
                        </>
                    )
            }
        </>
    )
}
export default ImageThumb;