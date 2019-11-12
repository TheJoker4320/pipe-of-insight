import React, { Component } from 'react'
import TaskBar from '../components/pages/TaskBar.visionpage';
import Form from '../components/pages/Form.visionpage';


import '../css/Pages/VisionPage/VisionPage.css';


const TitleCase =(str) =>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

export default class Vision extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: <div></div>,
            obj: this.props.obj
        }
    }
    
    PutPage = (name, setter, save) => {
        //TODO: get a function and exce it if its not
        //      undefined
        if(save !== undefined) save();
        switch(name){
            case 'camera settings':{
                setter(<Form 
                    obj={this.state.obj['camera settings']} 
                    name= 'Camera Settings'
                    key = {6}
                    />);
                break;
            }
            case 'modifiers':{
                setter(<Form 
                    obj= {this.state.obj['modifiers']} 
                    name= {'Modifiers'}
                    key = {0}
                    />);
                break;
            }
            case 'extractors':{
                setter(<Form 
                    obj={this.state.obj['extractors']} 
                    name = 'Extractors'
                    key = {1}
                    />);
                break;
            }
            case 'filters':{
                setter(<Form 
                    obj={this.state.obj['filters']}
                    name = 'Filters'
                    key = {2}
                    />);
                break;
            }
            case 'calculations':{
                setter(<Form 
                    obj={this.state.obj['calculations']}
                    name = 'Calculations'
                    key = {3}
                    />);
                break;
            }
            case 'publishers':{
                setter(<Form obj={this.state.obj['publishers']}
                name = 'Publishers'
                key = {4}/>);
                break;
            }
            default:{
                setter(<div></div>);
                break;
            }
        }
    }
    SetPageSeen = (page) => {
        this.setState({content: page});
        console.log(this.state.content);
    }
    render() {
        console.log(this.state.obj)
        return (
            <div className="vision-page">
            <div>
                <TaskBar
                names= {Object.keys(this.props.obj)}
                setPage = {(name, save) => this.PutPage(name, (current) => this.setState({content: current}), save)}
                />
            </div>
            {this.state.content}
            <h1 style= {{width: "100%", background: "#dddddda8"}}>Camera</h1>
        </div>
        )
    }
}

