import React, {Component} from 'react';
import StartPage from './SartPage';
import VisionPage from './VisionPage';

//node.js modules
const path = window.require('path');
const fs = window.require('fs');

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            step: 0,
            defaultSettings: [],
            fileName: 'default',
            isDefault: true
        }
        this.getDefault()
        this.nextStep= this.nextStep.bind(this);
    }
    
    nextStep(){
        const {step} = this.state;
        this.setState({
            step: step+1,
        })
        this.CreateFile();
    }

    getDefault = async () => {
        try {
        await fetch(this.props.defaulturl)
          .then(res => res.json())
          .then(data => this.setState({defaultSettings: data}))

        } catch (e) {
          console.log("There was an error fetching the data: " + e)
        }
      }
      CreateFile = () => {
        var { defaultSettings } = this.state;

        // String dat shit
        defaultSettings = JSON.stringify(defaultSettings, null,' ')
        console.log(__dirname)
        fs.writeFile(`./pipelines/${this.state.fileName}.json`, defaultSettings , function (err) { 
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
        });
      }

    UpdateFileName = (filename) => {
        this.setState({fileName: filename});
        console.log('updated')
    }
    UpdateDefault = () => {
        const {isDefault} = this.state;
        this.setState({isDefault: !isDefault});
    }
    render() {
        const {step} = this.state;

        switch(step){
            case 1:
                return(
                    <VisionPage/>
                );
            default: {
                return(
                    <StartPage 
                    nextStep={this.nextStep}
                    UpdateFileName={(fn) => {this.UpdateFileName(fn)}}
                    UpdateDefault={this.UpdateDefault}/>
                )
            }
        }
    }
}

export default MainPage;