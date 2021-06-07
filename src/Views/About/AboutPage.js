import React from 'react';
import Header from '../../CustomControls/Header';
import "./../ViewBody.css";

const AboutPage = (props) => {
      return (
         <div className="mainHolder">
            <Header />
            <div>
                <h1>This is about page</h1>
            </div>
         </div>
      )
}
export default AboutPage;