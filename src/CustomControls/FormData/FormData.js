import React from 'react';

const FormData = (props) => {
    const {
        id,
        name,
        method,
        action,
        onSubmit,
    } = props;

    // const mySubmitHandler = (event) =>{
    //     event.preventDefault();
    //     if(onSubmit !== null && onSubmit !== undefined){
    //         onsubmit(event);
    //     }
    // }

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
      return (
        <form name={_name} method={_method} onSubmit={onSubmit} action={action}>
            {/* <form method="post" action="" name="singleURLForm" onsubmit="AccessSingleURLData(); return false;"> */}
            {props.children}
        </form>
      )
}
export default FormData;