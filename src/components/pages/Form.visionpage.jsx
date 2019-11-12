import React, {Component} from 'react';
import Input from './Input.visionpage';


let styles= {
    background: "#232323",
    color: "#ddd",
    overflow: 'visable',
    overflowX: 'hidden',
    wordWrap: 'break-word',
    width: '280px',
    opacity: '0.97',
    marginBottom: "45px"
}

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            obj: this.props.obj
        }
        console.log(this.props.obj);
        this.keys= -1;
        this.marginLeft = 0;
        this.setObj = this.setObj.bind(this);
    }

    PrintElements(obj){
        let show = null;
        const keys = Object.keys(obj);
        

        this.marginLeft +=5;
        console.log(this.keys);

        show = keys.map((key) => {
            if(typeof obj[key] === undefined){
                this.marginLeft = 0;
                return null;
            }
            if(typeof obj[key] === "object"){
                return (
            
                    <div key= {++this.keys}>
                        <h2 styles={{
                            paddingLeft: this.marginLeft.toString()+'px',
                            background: "inherit",
                            color: "#ddd",
                            float: 'left'
                            }}
                            key= {++this.keys}
                            >{key}
                        </h2>
                        {this.PrintElements(obj[key])}
                    </div> 
               )
            } else if(typeof obj[key] === undefined){
                return <div></div>;
            } else{

                return(
                    
                    <Input name= {key} data= {obj[key]} styles={{
                        //paddingLeft: this.marginLeft.toString()+'px',
                        
                        background: "#232323",
                        color: "#ddd",
                        
                    }}
                    key= {++this.keys}
                    setObj = {(e)=> {
                        e.preventDefault();
                        obj[key] = e.target.value;
                    }}
                    />
                )
            }
        }
            
        )
        return show;
    }
    setObj(event){
        event.preventDefault();
        this.setState({obj: {...this.state.obj, key: event.target.value} })
    }
    render() {
        let show = this.PrintElements(this.state.obj);
        return (
                <div style= {styles}
                key = {this.key}>
                <header>
                    <h1 style= {{
                    color: "#cc1616",
                    fontSize: '30px'
                }}>{this.props.name}</h1>
                </header>
                {show}
            </div>
        )      
    }
}
