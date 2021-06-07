import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom'

const Header = (props) => {
//    render() {
       const history = useHistory();
       const uiStyles = {
        headerBackgroundStyle:{
           height:"7%",
           width:"100%",
           float:"left",
           backgroundColor: "DodgerBlue",
           padding: "10px",
            color: "white",
            fontFamily: "Arial"
           },
           LeftButtonsHolderStyle:{
            float:"left",
            height:"100%",
              },
              RightButtonsHolderStyle:{
               float:"right",
               height:"100%",
                 },
                 LeftButtonStyle: {
              
    height: "100%",
    backgroundColor: "indianred",
    border: "none",
    outline: "none",
        },
        RightButtonStyle: {
         // alignSelf:"right",
         // direction: ltr
         height: "100%",
    backgroundColor: "indianred",
    border: "none",
    outline: "none",
     }
       };
       const uiMain = (
        <div style={uiStyles.headerBackgroundStyle}>
            <div style={uiStyles.LeftButtonsHolderStyle}>
            <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/home");}}>Home</button>
            <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/about");}}>About</button>
            <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/contact");}}>Contact</button>
            </div><div style={uiStyles.RightButtonsHolderStyle}>
            <button style={uiStyles.RightButtonStyle} onClick={()=>{ history.push("/login");}}>Login</button>
            {/* <button style={uiStyles.RightButtonStyle} onClick={()=>{ history.push("/register");}}>Contact</button> */}
            </div>
           {/* <ul>
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/contact">Contact</Link></li>
           </ul> */}
           {/* {this.props.children} */}
        </div>
       );
      return uiMain;
//    }
}
export default Header;