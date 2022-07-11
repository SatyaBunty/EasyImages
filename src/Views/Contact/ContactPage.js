import React from 'react';
import { useState } from 'react';
import CustomButton from '../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../CustomControls/EntryBox/EntryBox';
import Header from '../../CustomControls/Header_Body/Header';
import ImageThumb from '../../CustomControls/ImageThumb/ImageThumb';
import { ConsoleLogger, ErrorEventLogger } from '../../Helpers/EventLogger';
import "./../ViewBody.css";

const ContactPage = (props) => {
    const [urlData, setURLData] = useState("");
    // const [imageURLsList, setImageURLsList] = useState({imagesList: []});
    const [imageURLsList, setImageURLsList] = useState([]);
    const pageName = "ContactPage"

    const onImageDataEntryValueChaned = (event) => {
        let objectKey = (event.target.name);
        setURLData(event.target.value);
    }

    // function makeHttpObject() {
    //     if("XMLHttpRequest" in window)return new XMLHttpRequest();
    //       else if("ActiveXObject" in window)return new ActiveXObject("Msxml2.XMLHTTP");
    //   }


// // Test with an element.
// var initElement = document.getElementsByTagName("html")[0];
// var json = mapDOM(initElement, true);
// console.log(json);

// // Test with a string.
// initElement = "<div><span>text</span>Text2</div>";
// json = mapDOM(initElement, true);
// console.log(json);

var imageURLs = [];

const mapDOM = (element, json) => {
    var treeObject = {};
    
    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              var parser = new DOMParser();
              var docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
            /*
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
              */
        } 
        element = docNode.firstChild;
    }
    
    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
        if(element.nodeName === "img" || element.nodeName === "IMG"){
            const eachImage = {
                id: "changablePart",
                mimeType: "image",
                name: element.attributes.title,
                url: element.attributes.src.value,
                displayURL: element.attributes.src.value,
                totalImages: "endIndex",
                isImageLoadable: true
              }
            imageURLs.push(eachImage);
        }
    }
    treeHTML(element, treeObject);
    
    return (json) ? JSON.stringify(treeObject) : treeObject;
}

/*
const mapDOM = (element, json) => {
    var treeObject = {};
    
    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              var parser = new DOMParser();
              var docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
            /*
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
              * /
        } 
        element = docNode.firstChild;
    }
    
    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);
    
    return (json) ? JSON.stringify(treeObject) : treeObject;
}
*/







    const stringToHTML = (str) => {
        var parser = new DOMParser();
        var doc = parser.parseFromString(str, 'text/html');
        return doc.body;
    };

    const onTestButtonClicked = (event) => {
        event.preventDefault();
        setImageURLsList([]);
        const methodName = "onTestButtonClicked Event"

        if(urlData !== null && urlData !== undefined && urlData !== ""){

            
              
              var request = new XMLHttpRequest();
              request.open("GET", urlData, true);
            //   request.setRequestHeader("Content-Type", "application/json");
            //   request.setRequestHeader("access-control-allow-headers", "*");
            //   request.setRequestHeader("access-control-allow-headers", "access-control-allow-origin");
            //   request.setRequestHeader("Access-Control-Allow-Origin", "*");//
              request.send(null);
              request.onreadystatechange = function() {
                if (request.readyState == 4)
                  console.log(request.responseText);
                  var responseHTMLData = stringToHTML(request.responseText);

                  const finalOutput = mapDOM(responseHTMLData, true);

                  if(finalOutput !== null){
                    // setImageURLsList({imagesList: [...imageURLsList.imagesList, ...imageURLs]});
                    
                    let images = [...imageURLsList, ...imageURLs]
                    setImageURLsList(images);
                  }

                  console.log(finalOutput);
                  console.log(imageURLsList);
              };

            /*
                fetch(urlData).then((response) => {
                    console.log(response.body);
                    ConsoleLogger(`${pageName} -> ${methodName} -> Success Response: `, response.text);
                    return response.json;
                }).then((responseJSON) => {
                    if(responseJSON !== null && responseJSON !== undefined){
                        if (responseJSON.status !== 404) {
                            ConsoleLogger(`${pageName} -> ${methodName} -> Success Response: `, responseJSON);
                        }
                        else{
                            ErrorEventLogger(`${pageName} -> ${methodName} -> Status Error: `, responseJSON);
                        }
                    }
                    else{
                        ErrorEventLogger(`${pageName} -> ${methodName}`, responseJSON);
                    }
                }).catch((ex) => {
                    ErrorEventLogger(`${pageName} -> ${methodName}`, ex);
                });
                */
            
        }
    }

    const OnImageClick = (item) => {
        //changeCurrentDisplayImageItem(item);
    }

    return (
        <div className="mainHolder">
            <Header />
            <div>
                <h1>This is contact page</h1>

                <EntryBox name="imageURL" labelText="Add URL by removing the number and image type (eg.:www.img01.jpg --> www.img)" hintText="Enter URL" value={urlData} onChange={onImageDataEntryValueChaned} isRequired={true} />

                <CustomButton title="Test Button" onClick={onTestButtonClicked} />

                {/* <img src="https://1847884116.rsc.cdn77.org/telugu/gallery/actress/kaajal/kajal14062021_025.jpg" /> */}

                <div id="galleryView">
                        {
                            // imageURLsList.imagesList.map((item) => {
                            imageURLsList.map((item) => {
                                return (
                                    <ImageThumb item={item} checkAndLoad={false} onClick={() => OnImageClick(item)} />
                                );
                            })
                        }
                    </div>

            </div>
        </div>
    )
}
export default ContactPage;