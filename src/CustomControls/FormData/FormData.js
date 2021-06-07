import React from 'react';

const FormData = (props) => {
    const {
        id,
        onSubmit
    } = props;
    const mySubmitHandler = (event) =>{
        event.preventDefault();
        onsubmit();
    }
      return (
        <form onSubmit={mySubmitHandler}>
            {props.children}
        </form>
      )
}
export default FormData;