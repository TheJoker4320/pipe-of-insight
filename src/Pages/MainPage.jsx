import React, {Component} from 'react';
import StartPage from './SartPage';
import VisionPage from './VisionPage';
import fs from 'fs';

class MainPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            step: 0,
        }
        this.nextStep= this.nextStep.bind(this);
    }
    
    nextStep(){
        const {step} = this.state;

        //this.CreateFile();

        this.setState({
            step: step+1,
        })
    }

    getDefault = async () => {
        try {
          const data = await fetch(this.props.defaulturl);
          console.log(data.json());
          return data;
        } catch (e) {
          console.log("There was an error fetching the data: " + e)
        }
      }
      CreateFile = () => {
        fs.readFile("temp.json", this.getDefault(), (err, data) => {
            console.log(data);
          });
      }

    render() {
        const {step} = this.state;
        switch(step){
            case 1:
                return(
                    <VisionPage/>
                );
            default:{
                return(
                    <StartPage 
                    nextStep={this.nextStep}/>
                )
            }
        }
    }
}

export default MainPage;