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
    //addPassOn(SetAbove, data);
    return (
        <div>
            <h4>{props.name}</h4>
            
            <input type= 'text' placeholder= {props.placeholder} value={data}
            onClick= {onclick} onChange= {(e) => {
                e.preventDefault();
                SetAbove(e);
                SetData(e.target.value);

            }}
            style= {{minWidth:'1px', margin: '0', padding: '0'}}
            onKeyDown= {(e) => {
                e.target.style.width = 0;
                var newWidth = e.target.scrollWidth + 10;
                    
                if( e.target.scrollWidth >= e.target.clientWidth )
                    newWidth += 10;
                        
                    e.target.style.width = newWidth + 'px';
                //e.target.style.width = ((e.target.value.length + 1) * 8) + 'px';
            }}
            />
        
        </div>

    )
}
