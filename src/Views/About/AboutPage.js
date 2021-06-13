import React from 'react';
import CustomButton from '../../CustomControls/CustomButton/CustomButton';
import EntryBox from '../../CustomControls/EntryBox/EntryBox';
import Header from '../../CustomControls/Header_Body/Header';
import "./../ViewBody.css";

const AboutPage = (props) => {
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
               <CustomButton Title="Submit"/>
               </form>
               {/* {AddTextField("sdsdsd","asdada","asdada")} */}
            </div>
         </div>
      )
}
export default AboutPage;