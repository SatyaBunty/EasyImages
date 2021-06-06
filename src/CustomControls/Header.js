import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom'

const Header = (props) => {
//    render() {
       const history = useHistory();
       const uiStyles = {
        headerBackgroundStyle:{
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
           },
           headerButtonHolderStyle:{
            // float:"left",
            alignItems:"left",
               color: "white",
               backgroundColor: "DodgerBlue",
               padding: "10px",
               fontFamily: "Arial"
              },
           buttonStyle: {
        }
       };
       const uiMain = (
        <div style={uiStyles.headerBackgroundStyle}>
            <div style={uiStyles.headerButtonHolderStyle}>
            <button style={uiStyles.buttonStyle} onClick={()=>{ history.push("/home");}}>Home</button>
            <button style={uiStyles.buttonStyle} onClick={()=>{ history.push("/about");}}>About</button>
            <button style={uiStyles.buttonStyle} onClick={()=>{ history.push("/contact");}}>Contact</button>
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