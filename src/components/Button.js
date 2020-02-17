import React, { Component } from 'react';

const Button = props => {
    return(
        <div style={styles.button}>
     {props.title}
      </div>
    )
}

export default Button
const styles ={
    button:{
        display:'flex', backgroundColor: 'orange', padding: 16, paddingLeft: 40, paddingRight: 40, color: '#fff', borderRadius: 10, marginLeft: 10
        }
}