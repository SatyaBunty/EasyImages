import React from 'react';

const FormData = (props) => {
    const {
        id,
        name,
        method,
        action,
        // onSubmit,
    } = props;

    const mySubmitHandler = (event) =>{
        event.preventDefault();
        onsubmit();
    }

    let _method = method;
    if(_method !== null && _method !== undefined && _method !== ""){} else{
        _method = "post";
    }
    
    let _action = action;
    if(_action !== null && _action !== undefined && _action !== " "){} else{
        _action = "";
    }
    
    let _name = name;
    if(_name !== null && _name !== undefined && _name !== ""){} else{
        _name = "";
    }
    
    // let _onSubmit = onSubmit;
    // if(_onSubmit !== null && _onSubmit !== undefined && _onSubmit !== ""){} else{
    //     _onSubmit = "return false";
    // }

      return (
        <form name={_name} method={_method} onSubmit={mySubmitHandler} action={action}>
            {/* <form method="post" action="" name="singleURLForm" onsubmit="AccessSingleURLData(); return false;"> */}
            {props.children}
        </form>
      )
}
export default FormData;