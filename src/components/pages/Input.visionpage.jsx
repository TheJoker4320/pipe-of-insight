import React, {useState} from 'react'



const addPassOn = (SetAbove, val) =>{
    window.addEventListener('keydown', (e)=>{
        if(e.keyCode === 9){
            SetAbove(val);
        }
    })
}

export default function Input(props) {

    const [data, SetData] = useState(props.data);
    const SetAbove = props.setObj;
    const onClick = props.onClick;

    var part = props.isInArr ?  <p style= {{paddingLeft: '5px', paddingRight: '5px'}}>,</p> : <div></div>;
    //addPassOn(SetAbove, data);
    return (
        <div style ={{...props.style, width: '100%'}}>
            <h4 style= {{...props.style, marginRight: '5px'}}>{props.name} :</h4>
            
            <input type= 'text' placeholder= {props.placeholder} value={data}
            onClick= {onclick} onChange= {(e) => {
                e.preventDefault();
                SetAbove(e);
                SetData(e.target.value);

            }}
            style = {{
                ...props.style, 
                margin: '0',
                padding: '0',
            }}
            required
            size = {data.toString().length === 0 ? '1' : data.toString().length}
            />
            {part}
        </div>

    )
}
