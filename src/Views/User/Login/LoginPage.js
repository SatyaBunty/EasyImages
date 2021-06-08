import React, { useState } from 'react';
import CustomButton from '../../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../../CustomControls/EntryBox/EntryBox';
import FormData from '../../../CustomControls/FormData/FormData';
import Header from './../../../CustomControls/Header';
import "./LoginPage.css";

const LoginPage = (props) => {
   const [formValues, changeFormValues] = useState({
      userName:""
   });
   function onSubmitData (event) {
      event.preventDefault();
      alert(formValues.userName);
   }
   const onTextChanged = (event) =>{
      let key = event.target.name;
      let value = event.target.value;
      changeFormValues({[key]: value});
   }
      return (
         <div className="mainHolder">
            <Header />
            <div>
                <h1>This is about page</h1>
            </div>
            <div>
               <FormData method="post" action="" name="singleURLForm" onSubmit={onSubmitData}>
               <EntryBox name="userName" labelText="Name" onChange={onTextChanged} hintText="Enter Name" isRequired={true} />
               <CustomButton title="Submit"/>
               </FormData>
            </div>
         </div>
      )
}
export default LoginPage;