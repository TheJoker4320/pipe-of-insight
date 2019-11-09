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
            obj: {},
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

    updateObj = (state,props) => {
        return {...state, obj: this.our_obj};
    }
    componentDidMount() {
        const nxt = <Start
        newPipeCmd = {() =>{
            // Create the new diffault file
            this.createFile();

            this.props.setTop(`${this.state.file_name}.json - Pipe Of Insight`);
            // Move on to next page
            this.nextStep();
        }}
        usePipeCmd = {(dir) =>{
            console.log(dir);
            // Save as JS objact
            var our_obj = JSON.parse(fs.readFileSync(dir, 'utf8'));
            this.state.obj = our_obj; // Don't remove it just works
            this.setState({obj: our_obj});

            var filename = dir.replace(/^.*[\\\/]/, '')

            this.state.file_name = filename; // Don't remove it just works
            this.setState({file_name: filename});
            
            this.props.setTop(`${filename} - Pipe Of Insight`);

            this.setFile(dir);
            // Move on to next page
            this.nextStep();
        }}
    />
        this.setState({
            current: nxt
        });
    }

    render() {
        return (
            <div style={{
                background: 'transparent',
                heihgt: '100%'
            }}>
                <Background/>
                {this.state.current}
            </div>
        )
    }
}
