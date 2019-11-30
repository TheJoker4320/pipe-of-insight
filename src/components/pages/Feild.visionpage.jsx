import React, {useState} from 'react'



const addPassOn = (SetAbove, val) =>{
    window.addEventListener('keydown', (e)=>{
        if(e.keyCode === 9){
            SetAbove(val);
        }
    })
}




export default function Felid(props) {

    const [data, SetData] = useState(props.data);
    const SetAbove = value => {
        props.setObj(value);
        SetData(value);
    };
    const onClick = props.onClick;

    const GetFeildByType = (type) => {
        switch(type){
           
            case 'boolean':{
                return (<select onChange={(e) => {
                    e.preventDefault();
                    if(e.target.selectedIndex)
                        SetAbove(eval(e.target[e.target.selectedIndex].value));
                }}
                style= {{
                    ...props.style,
                    backgroundColor: '#ddd',
                    color: '#232323',
                    borderRadius: '4px',
                    borderWidth: '0'
                }}
                
                >
                    <option value="true" selected = {data === true}>true</option>
                    <option value="false"selected= {data === false}>false</option>
                </select>
                );
            }
            case 'number':{
                return (
                <div style={props.style}>
                    <input type= 'number' placeholder= {props.placeholder} 
                    value={data}  
                    onClick= {onclick} onChange= {(e) => {
                        e.preventDefault();
                        SetAbove(e.target.value);
                        SetData(e.target.value);

                    }}
                    
                    onInput = {(e) => {
                        e.target.width = (`${e.target.value}`.length*8+15) + 'px';
                    }}
                    style = {{
                        ...props.style, 
                        margin: '0',
                        paddingTop: '1px',
                        paddingBottom: '2px',
                        paddingLeft: '4px',
                        borderWidth: '0',
                        borderRadius: '2px',   
                        color: '#232323',
                        backgroundColor: '#ddd',
                        width: `${data}`.length*8+15+'px'

                    }}
                    required size = {`${data}`.length*8+15+'px'}
                    />
                </div>
                );
            }
            case 'string':{
                if(data === 'SmartDashboard'){
                return <p>{data}</p>
                }
                return <p>{data}</p>
            }
            default:{
                return <p>{type}</p>
            }
        }
    }

    var part = props.isInArr ?  <p style= {{paddingLeft: '5px', paddingRight: '5px'}}>,</p> : <div></div>;
    //addPassOn(SetAbove, data);
    return (
        <div style ={{...props.style, width: '100%'}}>
            <h4 style= {{...props.style, marginRight: '5px'}}>{props.name} :</h4>

            {GetFeildByType(props.type)}
            {part}
        </div>

    )
}
