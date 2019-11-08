import React, {Component} from 'react';
import '../../css/Pages/StartPage/Card.startpage.css';

const {dialog } = window.require('electron').remote;

export default class Card extends Component {

    constructor(props){
        super(props);
        this.newPipeCmd = this.props.newPipeCmd;
        this.usePipeCmd = this.props.usePipeCmd;
    }

    render(){
    return (
        <div className="welcome-card">
                <h1 className= "title">Welcome!</h1>
                <p className= "content">This is the offcial app for the FRC team 4320 The Joker
                    for their vision framework, enjoy using it.
                </p>
                <p className= "writter"><b>- The Joker 4320</b></p>
                <ul className= "create-pipes">

                    <li>
                        <button className="pipes-btns" id= "new-pipe" onClick= {(e) => {
                            e.preventDefault();
                            this.newPipeCmd();
                        }}>
                            New Pipeline
                        </button>
                    </li>
                    <li>
                        <button type="file" className="pipes-btns" id= "use-pipe"
                        onClick= {(e) => {
                            var dir;
                            dir= dialog.showOpenDialog({ 
                                properties: ['openFile', 'multiSelections'],
                                filters: [{ name: 'Custom File Type', extensions: ['json'] }],
                                defaultPath : `${__dirname}/pipelines/.json`
                            })
                            if(dir !== undefined)
                                this.usePipeCmd(dir[0]);

                        }}>
                            Use Pipeline
                        </button>
                    </li>
                </ul>  
        </div>
    );
}
}

