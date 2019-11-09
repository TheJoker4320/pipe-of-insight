import React from 'react';

const styles= {
    background: "#232323",
    width: '280px',
    opacity: '0.97',
    overflow: 'visible'

}

export default function Form(props) {
    return (
        <div style= {styles}>
            {props.children}
        </div>
    )
}
