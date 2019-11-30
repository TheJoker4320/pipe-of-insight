import React, {Component} from 'react';
import Field from './Feild.visionpage';


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

    PrintElements(obj, isInArr= false){
        let show = null;
        const keys = Object.keys(obj);
        

        console.log(this.keys);

        show = keys.map((key) => {
            if(typeof obj[key] === undefined){
                console.log('print')
                this.marginLeft = 0;
                return null;
            }
            if(Array.isArray(obj[key])){

                return(
                    <div key= {++this.keys}>
                        <p style= {{
                        display:'inline-block',
                        width: '100%'
                    }}>[</p>
                            {this.PrintElements(obj[key], isInArr= true)}
                        
                        <p style= {{
                        display:'inline-block',
                        width: '100%'
                        }}>]<br/></p>
                    </div>
                )
                
            } else if(typeof obj[key] === "object"){
                this.marginLeft += 5;
                return (
            
                    <div key= {++this.keys}
                            style= {{display: 'inline-block'}}>
                        <h3 style={{
                            background: "inherit",
                            color: "#ddd",
                            float: 'left',
                            display:'inline-block',
                            width: '100%'
                            }}
                            key= {++this.keys}
                            >{key}
                        </h3>
                        {this.PrintElements(obj[key], false)}
                    </div> 
               )

            } else if(typeof obj[key] === undefined){
                console.log('end')
                this.marginLeft = 0;
                return <div></div>;
            } else{
                
                //this.marginLeft+=15;

                return(
                    
                    <Field name= {key} data= {obj[key]} style={{
                        //paddingLeft: this.marginLeft.toString()+'px',
                        
                        background: "#232323",
                        color: "#ddd",
                        display:'inline-block',
                        float: 'left',
                        paddingLeft: (this.marginLeft).toString()+'px',
                        
                    }}
                    isInArr = {isInArr}
                    key= {++this.keys}
                    setObj = {(value) => {
                        obj[key] = value;
                    }}
                    type = {typeof obj[key]}
                    />
                )
            }
        }
        )
        this.marginLeft = 0;
        return show;
    }
    setObj(event){
        event.preventDefault();
        this.setState({obj: {...this.state.obj, key: event.target.value} })
    }
    render() {
        let show = this.PrintElements(this.state.obj, false);
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
