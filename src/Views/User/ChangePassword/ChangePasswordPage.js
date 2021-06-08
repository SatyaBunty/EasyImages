import React from 'react';
import CustomButton from '../../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../../CustomControls/EntryBox/EntryBox';
import FormData from '../../../CustomControls/FormData/FormData';
import Header from '../../../CustomControls/Header';
import "./ChangePasswordPage.css";

const ChangePasswordPage = (props) => {
      return (
         <div className="mainHolder">
            <Header />
            <div>
                <h1>This is about page</h1>
            </div>
            <div>
               <FormData method="post" action="" name="singleURLForm" onsubmit="return false;">
               <EntryBox id="hehe" labelText="Name" hintText="Enter Name" isRequired={true} />
               <CustomButton title="Submit"/>
               </FormData>
            </div>
         </div>
      )
}
export default ChangePasswordPage;