import React, {useState} from 'react';
import TaskBar from '../components/pages/TaskBar.visionpage';
import Form from '../components/pages/Form.visionpage';

import '../css/Pages/VisionPage/VisionPage.css';

const PutPage = (name, setter, save) => {
    //TODO: get a function and exce it if its not
    //      undefined
    if(save !== undefined) save();
    switch(name){
        case 'camera settings':{
            setter(<Form><h1>Heelo World</h1></Form>);
            break;
        }
        case 'publishers':{
            setter(<h1>publishers</h1>);
            break;
        }
        default:{
            setter(<div></div>);
            break;
        }
    }
}

export default function Vision(props) {

    const [pageSeen, SetPageSeen] = useState(<div></div>);


    console.log(props.obj);
    return (
        <div className="vision-page">
            <div>
                <TaskBar
                names= {Object.keys(props.obj)}
                setPage = {(name, save) => PutPage(name, SetPageSeen, save)}
                />
            </div>
            {pageSeen}
            <h1 style= {{width: "100%", background: "#dddddda8"}}>Camera</h1>
        </div>
    )
}
