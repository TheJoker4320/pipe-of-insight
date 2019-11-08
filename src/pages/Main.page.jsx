import React, { Component } from 'react'; 
import Background from '../components/pages/background';
import Start from './Start.page.jsx';
import Vision from './Vision.page.jsx';

const fs = window.require('fs');

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state={
            current: <div></div>,
            file_dir: '',
            file_name: 'default',
            obj: null,
        }
        this.setDifault();
    }
    nextStep = () => {
        this.setState({
            current: <Vision
                        fileDir = {this.state.file_dir}
                        obj = {this.state.obj}
                    />
        });
    }
    setDifault = async () => {
            try {
            await fetch(this.props.defaulturl)
              .then(res => res.json())
              .then(data => this.setState({obj: data}))
    
            } catch (e) {
              console.log("There was an error fetching the data: " + e)
            }
    }
    createFile = () =>{
        var { obj } = this.state;

        // String dat shit
        obj = JSON.stringify(obj, null,' ')
        console.log(__dirname)
        fs.writeFile(`./pipelines/${this.state.file_name}.json`, obj , function (err) { 
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
        });
        this.setFile(`./pipelines/${this.state.file_name}.json`)
    }
    setFile = (dir) => {
        this.setState({file_dir: dir});
        // read the file
    }

    componentDidMount() {
        this.setState({
            current: <Start
                        nextStep = {this.nextStep}
                        setFile= {this.setFile}
                    />
        });
    }

    render() {
        return (
            <div>
                <Background/>
                {this.state.current}
            </div>
        )
    }
}
