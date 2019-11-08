import React, { Component } from 'react'; 
import Background from '../components/pages/background';
import Start from './Start.page.jsx';
import Vision from './Vision.page.jsx';

export default class Main extends Component {

    constructor(props){
        super(props);

        this.state={
            current: <div></div>,
            file_dir: '',
            obj: null,
        }
    }
    nextStep = () =>{
        this.setState({current: <Vision/>});
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
