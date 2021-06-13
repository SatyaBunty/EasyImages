import React from 'react';
import { useHistory } from 'react-router-dom'
import CustomButton from '../CustomButton/CustomButton';
import "./HeaderBody.css"

const Header = (props) => {
  //    render() {
  const history = useHistory();
  /*
  const uiStyles = {
   headerBackgroundStyle2:{
      height:"7%",
      width:"100%",
     //  float:"left",
      backgroundColor: "DodgerBlue",
      padding: "0px",
      margin: "0px",
       color: "white",
       fontFamily: "Arial",
       position: "absolute"
      },
   headerBackgroundStyle:{
      height:"7%",
      width:"100%",
     //  float:"left",
      backgroundColor: "DodgerBlue",
      padding: "0px",
      margin: "0px",
       color: "white",
       fontFamily: "Arial",
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
  */
  const uiMain = (
    <div className="headerBackgroundStyle">
      <div className="headerBackgroundStyle2">
        <div className="LeftButtonsHolderStyle">

          {/* <CustomButton className="LeftButtonStyle" title="<" onClick={() => { }} />
          <CustomButton className="LeftButtonStyle" buttonHolderclassName="LeftButtonStyle" onClick={() => { history.push("/home"); }}>Home</CustomButton>
          <CustomButton className="LeftButtonStyle" buttonHolderclassName="LeftButtonStyle" onClick={() => { history.push("/about"); }}>About</CustomButton>
          <CustomButton className="LeftButtonStyle" buttonHolderclassName="LeftButtonStyle" onClick={() => { history.push("/contact"); }}>Contact</CustomButton>
          <CustomButton className="LeftButtonStyle" buttonHolderclassName="LeftButtonStyle" onClick={() => { history.push("/getImages"); }}>Images</CustomButton> */}

          {/* <button className="LeftButtonStyle" onClick={() => { history.push("/home"); }}>Home</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/about"); }}>About</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/contact"); }}>Contact</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/getImages"); }}>Images</button> */}
          
          <button className="LeftButtonStyle" onClick={() => { history.push("/home"); }}>Home</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/about"); }}>About</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/contact"); }}>Contact</button>
          <button className="LeftButtonStyle" onClick={() => { history.push("/getImages"); }}>Images</button>

        </div>
        <div className="RightButtonsHolderStyle">
          <button className="RightButtonStyle" onClick={() => { history.push("/login"); }}>Login</button>
        </div>
      </div>
      <div></div>
    </div>
    // <div style={uiStyles.headerBackgroundStyle}>
    //   <div style={uiStyles.headerBackgroundStyle2}>
    //     <div style={uiStyles.LeftButtonsHolderStyle}>
    //     <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/home");}}>Home</button>
    //     <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/about");}}>About</button>
    //     <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/contact");}}>Contact</button>
    //     <button style={uiStyles.LeftButtonStyle} onClick={()=>{ history.push("/getImages");}}>Images</button>
    //     </div><div style={uiStyles.RightButtonsHolderStyle}>
    //     <button style={uiStyles.RightButtonStyle} onClick={()=>{ history.push("/login");}}>Login</button>
    //     {/* <button style={uiStyles.RightButtonStyle} onClick={()=>{ history.push("/register");}}>Contact</button> */}
    //     </div>
    //    {/* <ul>
    //    <li><Link to="/home">Home</Link></li>
    //    <li><Link to="/about">About</Link></li>
    //    <li><Link to="/contact">Contact</Link></li>
    //    </ul> */}
    //    {/* {this.props.children} */}
    //    </div>
    //    <div></div>
    // </div>
  );
  return uiMain;
  //    }
}
export default Header;