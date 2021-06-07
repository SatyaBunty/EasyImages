import React from 'react';
import Button from '../../CustomControls/Button/Button';
import EntryBox from '../../CustomControls/EntryBox/EntryBox';
import Header from '../../CustomControls/Header';
import "./../ViewBody.css";

const AboutPage = (props) => {

   const AddTextField = (fieldName, captionText, addCaption) =>
   {
       var formChildDiv = document.createElement("div");
   
       var inputEntryField = document.createElement("input");
       inputEntryField.type = "text";
       inputEntryField.name = fieldName;
   
       if(addCaption === true)
       {
           if(captionText === null || captionText === "")
           {
               captionText = fieldName;
           }
   
           formChildDiv.appendChild(document.createTextNode(captionText));
           formChildDiv.appendChild(inputEntryField);
           formChildDiv.appendChild(document.createElement("br"));
       }
       else
       {
           formChildDiv.appendChild(inputEntryField);
       }
       return formChildDiv;
   }
      return (
         <div className="mainHolder">
            <Header />
            <div>
                <h1>This is about page</h1>
            </div>
            <div>
            {/* <form method="post" action="" name="singleURLForm" onsubmit="AccessSingleURLData(); return false;"> */}
               <form method="post" action="" name="singleURLForm" onsubmit="return false;">
               <EntryBox id="hehe" labelText="Name" hintText="Enter Name" isRequired={true} />
               <Button Title="Submit"/>
               </form>
               {/* {AddTextField("sdsdsd","asdada","asdada")} */}
            </div>
         </div>
      )
}
export default AboutPage;