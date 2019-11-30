import React, {Component}from 'react';
import Button from './Button.visionpage';
import '../../css/Pages/VisionPage/TaskBar.visionpage.css';


export default class TaskBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            pressedBtn: '',
            setPage: this.props.setPage,
        }
        this.setCurrent = (name) => {
            this.setState({pressedBtn:name});
            this.props.setPage(name);
        }
    }

    AddShortCuts = (binder) => {

        const names = [
            'modifiers','extractors',
            'filters','calculations',
            'publishers','camera settings'
        ]
        window.addEventListener('keydown', (e) => {
            var name = this.state.pressedBtn;
            if(e.ctrlKey)
                switch(String.fromCharCode(e.which).toLowerCase()){
        
                    case 'm':{
                        binder(name=== names[0] ? '':names[0]);
                        break;
                    }
                    case 'e':{
                        binder(name=== names[1] ? '':names[1]);
                        break;
                    }
                    case 'f':{
                        binder(name=== names[2] ? '':names[2]);
                        break;
                    }
                    case 'c':{
                        binder(name=== names[3] ? '':names[3]);
                        break;
                    }
                    case 'p':{
                        binder(name=== names[4] ? '':names[4]);
                        break;
                    }
                    case 'q':{
                        binder(name=== names[5] ? '':names[5]);
                        break;
                    }
                    default: {
                        break;
                    }
        
                }  
        }, true)
    }
    

    componentDidMount() {
        this.AddShortCuts((name) => this.setCurrent(name))
    }
    
    render(){
        const down = <svg version="1.1" id="down" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 240.811 240.811" >
            <path  d="M220.088,57.667l-99.671,99.695L20.746,57.655c-4.752-4.752-12.439-4.752-17.191,0
                c-4.74,4.752-4.74,12.451,0,17.203l108.261,108.297l0,0l0,0c4.74,4.752,12.439,4.752,17.179,0L237.256,74.859
                c4.74-4.752,4.74-12.463,0-17.215C232.528,52.915,224.828,52.915,220.088,57.667z"/>
        </svg>
        return (
            <div className="task-bar">
                
                <ul>
                    <li>
                        <Button name = {'modifiers'}
                            className = {"btn"}
                            title = {'Modifiers'}
                            setCurrent = {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}                        
                            >
                                <svg version="1.1" id="img-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 249.745 249.745">

                                    <g>
                                        <path  d="M200.43,213.047c0,13.641-11.096,24.731-24.726,24.731H35.604
                                            c-13.636,0-24.726-11.09-24.726-24.731V72.953c0-13.63,11.096-24.726,24.726-24.726h118.098l10.878-10.878H35.604
                                            C15.969,37.349,0,53.324,0,72.953v140.099c0,19.635,15.975,35.61,35.604,35.61h140.099c19.635,0,35.604-15.975,35.604-35.61
                                            V88.074l-10.878,10.878C200.429,98.952,200.429,213.047,200.43,213.047z"/>
                                        <path  d="M244.181,6.477c-7.19-7.196-19.727-7.19-26.923,0L108.286,115.443
                                            c-1.12,1.115-4.09,4.085-6.065,27.092l-0.555,6.456l6.451-0.571c23.062-2.029,25.982-4.95,27.081-6.048L244.176,33.395
                                            C251.6,25.971,251.6,13.896,244.181,6.477z M236.491,25.704L127.889,134.306c-1.904,0.81-7.87,1.822-14.142,2.589
                                            c0.751-6.26,1.762-12.227,2.589-14.114L224.954,14.163c3.084-3.079,8.452-3.079,11.542,0
                                            C239.667,17.345,239.667,22.522,236.491,25.704z"/>
                                    </g>

                                </svg>

                        </Button>
                    </li>
                    <center>{down}</center>
                    <li>
                        <Button name = {'extractors'}
                            className = {"btn"} 
                            title = {'Extractors'}
                            setCurrent =  {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}                        
                            >                          
                                <svg id="img-btn" viewBox="0 -6 512.00036 512"  xmlns="http://www.w3.org/2000/svg"><path d="m504.746094 326.867188-56.027344-16.003907 62.992188-256.054687c.003906-.019532.007812-.035156.011718-.054688.042969-.1875.074219-.378906.109375-.570312.023438-.140625.058594-.285156.078125-.425782.011719-.109374.015625-.21875.027344-.324218.128906-1.238282.027344-2.464844-.28125-3.617188l-11.347656-42.398437c-1.425782-5.332031-6.902344-8.5-12.238282-7.078125l-187.058593 49.914062c-2.5625-2.164062-5.324219-4.128906-8.292969-5.84375-13.046875-7.539062-28.246094-9.542968-42.796875-5.648437-18.53125 4.957031-32.429687 18.648437-38.484375 35.460937l-119.109375 31.753906-19.289063-72.082031c-1.425781-5.335937-6.90625-8.5-12.246093-7.074219l-53.230469 14.242188c-4.265625 1.140625-7.273438 4.941406-7.410156 9.355469-2.324219 75.566406 22.582031 126.882812 43.890625 156.625 23.316406 32.554687 47.285156 47.011719 48.292969 47.609375 1.5625.929687 3.328124 1.40625 5.109374 1.40625.867188 0 1.734376-.113282 2.585938-.339844l20.542969-5.5c5.335937-1.425781 8.503906-6.910156 7.074219-12.246094l-18.800782-70.257812 118.914063-31.707032c.621093.53125 1.25 1.046876 1.890625 1.550782l-14.378906 73.167968c-.007813.03125-.015626.066407-.019532.101563l-30.253906 153.929687c-.007812.039063-.015625.074219-.023438.113282l-14.207031 72.289062h-34.851562c-5.523438 0-10 4.476563-10 10v32.222656h-115.875c-5.523438 0-10.0000002 4.476563-10.0000002 10 0 5.523438 4.4765622 10 10.0000002 10h491.957031c5.523438 0 10-4.476562 10-10v-152.898437c0-4.46875-2.960938-8.390625-7.253906-9.617187zm-405.519532-91.640626c-15.519531-11.019531-79.917968-63.640624-79.222656-176.789062l36.300782-9.710938 49.441406 184.757813zm392.773438 108.800782v32.007812l-55.574219 15.871094c-9.683593 2.011719-19.714843-.300781-27.558593-6.371094-7.609376-5.882812-12.191407-14.671875-12.574219-24.105468-.035157-.929688-.035157-1.859376 0-2.789063.382812-9.445313 4.964843-18.234375 12.574219-24.117187 4.464843-3.457032 9.640624-5.691407 15.058593-6.609376l-7.3125 29.726563c-1.320312 5.363281 1.957031 10.777344 7.320313 12.097656.804687.199219 1.605468.292969 2.394531.292969 4.496094 0 8.582031-3.054688 9.703125-7.613281l7.902344-32.121094zm-2.246094-298.6875-46.851562 12.503906c-5.335938 1.421875-8.507813 6.902344-7.082032 12.238281 1.421876 5.335938 6.902344 8.511719 12.238282 7.085938l40.195312-10.726563-59.292968 241.007813c-11.605469.125-22.949219 4-32.332032 11.253906-12.289062 9.503906-19.695312 23.765625-20.320312 39.140625-.054688 1.460938-.054688 2.925781 0 4.386719.625 15.359375 8.03125 29.621093 20.320312 39.125 9.535156 7.375 21.09375 11.265625 32.894532 11.265625 3.808593 0 7.640624-.40625 11.4375-1.230469.210937-.046875.417968-.097656.625-.15625l2.367187-.675781v68.824218h-40.742187v-32.222656c0-5.523437-4.476563-10-10-10h-35.609376l-30.464843-155.007812c0-.007813 0-.015625-.003907-.023438l-24.746093-125.917968c-.003907-.023438-.011719-.050782-.015625-.074219l-3.5625-18.125c8.722656-6.703125 15.253906-15.804688 18.878906-26.050781l43.742188-11.675782c5.335937-1.421875 8.507812-6.902344 7.082031-12.238281-1.421875-5.339844-6.910157-8.511719-12.238281-7.085937l-35.4375 9.457031c-.386719-8.019531-2.5625-15.957031-6.234376-23.089844l168.96875-45.085937zm-217.875 103.832031c2.5-.335937 4.976563-.835937 7.410156-1.496094.328126-.089843.65625-.179687.984376-.273437l1.304687 6.636718-41.375 33.550782 7.929687-40.339844c7.625 2.332031 15.644532 2.996094 23.625 1.9375.039063-.003906.082032-.011719.121094-.015625zm65.339844 287.984375h-117.363281l106.464843-55.449219zm-15.820312-80.496094h-93.792969l82.84375-55.714844zm-16.203126-82.449218-64.910156-.1875 56.328125-43.480469zm-14.046874-71.46875h-37.875l32.667968-26.492188zm-57.851563 20h40.6875l-47.96875 37.027343zm-14 71.21875 65.414063.191406-75.417969 50.722656zm-16.25 82.699218h89.660156l-99.886719 52.027344zm52.042969-318.578125c3.132812-.839843 6.3125-1.253906 9.46875-1.253906 6.3125 0 12.542968 1.65625 18.15625 4.898437 3.066406 1.773438 5.808594 3.945313 8.1875 6.441407.019531.019531.035156.042969.054687.066406 2.585938 2.726563 4.730469 5.855469 6.359375 9.246094 8.019532 16.042969 2.050782 36.328125-12.722656 46.125-7.890625 5.234375-17.78125 7.203125-27.074219 5.367187-8.605469-1.699218-16.550781-6.574218-21.886719-13.550781-6.492187-8.488281-9.007812-19.628906-6.65625-30.074219 2.875-12.808594 12.582032-23.644531 26.113282-27.265625zm-46.933594 37.714844c.363281 8.015625 2.457031 15.960937 6.109375 23.113281l-110.582031 29.484375-6.179688-23.097656zm-62.238281 383.585937v-22.222656h33.0625.027343.035157 204.167969v22.222656zm318.035156 0v-74.539062l28.046875-8.007812v82.546874zm0 0"/><path d="m392.753906 83.730469c1.597656 3.839843 5.550782 6.375 9.71875 6.15625 4.183594-.21875 7.84375-3.082031 9.074219-7.082031 1.203125-3.917969-.214844-8.351563-3.476563-10.832032-3.472656-2.644531-8.351562-2.722656-11.910156-.195312-3.753906 2.664062-5.144531 7.714844-3.40625 11.953125zm0 0"/></svg>
                        </Button>
                    </li>
                    <center>{down}</center>
                    <li>
                        <Button name ={'filters'}
                            className = {"btn"}
                            title = {'Filters'}
                            setCurrent =  {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}
                            
                            >   
                                <svg version="1.1" id="img-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 512 512" >
                                    <g>
                                        <path   d="M451.449,168.599C447.967,162.061,441.204,158,433.797,158h-56.81c-4.743-26.675-28.087-47-56.104-47
                                            c-28.017,0-51.361,20.325-56.104,47h-57.555c4.514-6.908,7.15-15.15,7.15-24c0-24.262-19.738-44-44-44c-24.262,0-44,19.738-44,44
                                            c0,8.85,2.636,17.092,7.15,24H86.598c-7.407,0-14.17,4.061-17.652,10.599c-3.481,6.537-3.077,14.416,1.056,20.562l134.196,199.556
                                            V502c0,3.372,1.699,6.517,4.52,8.364c1.653,1.083,3.562,1.636,5.481,1.636c1.354,0,2.713-0.275,3.992-0.832l92-40.063
                                            c3.648-1.589,6.007-5.189,6.007-9.168v-73.221L450.393,189.16C454.526,183.015,454.931,175.136,451.449,168.599z M320.883,131
                                            c16.937,0,31.241,11.443,35.616,27h-71.231C289.642,142.443,303.947,131,320.883,131z M170.375,110c13.233,0,24,10.767,24,24
                                            c0,13.233-10.767,24-24,24c-13.233,0-24-10.767-24-24C146.375,120.767,157.142,110,170.375,110z M297.899,380.086
                                            c-1.109,1.649-1.702,3.592-1.702,5.58v69.719l-72,31.353v-91.072h36.127c5.523,0,10-4.477,10-10s-4.477-10-10-10h-40.801
                                            L118.88,226h202.003c5.523,0,10-4.477,10-10s-4.477-10-10-10H105.431l-18.829-28h347.194L297.899,380.086z"/>
                                    </g>
                                    <g>
                                        <path   d="M294.324,0c-24.262,0-44,19.738-44,44s19.739,44,44,44c24.262,0,44-19.738,44-44S318.586,0,294.324,0z M294.324,68
                                            c-13.233,0-24-10.767-24-24c0-13.233,10.767-24,24-24c13.233,0,24,10.767,24,24S307.557,68,294.324,68z"/>
                                    </g>

                                    <g>
                                        <path   d="M401.197,48.333c-5.523,0-10,4.477-10,10v56.834c0,5.524,4.477,10.001,10,10.001s10-4.477,10-10V58.333
                                            C411.197,52.81,406.72,48.333,401.197,48.333z"/>
                                    </g>

                                    <g>
                                        <path   d="M408.267,18.43c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21,1.07-7.07,2.93s-2.93,4.44-2.93,7.07s1.07,5.21,2.93,7.07
                                            s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07S410.127,20.29,408.267,18.43z"/>
                                    </g>


                                    <g>
                                        <path   d="M204.375,12.755c-5.523,0-10,4.477-10,10v41c0,5.523,4.477,10,10,10s10-4.477,10-10v-41
                                            C214.375,17.232,209.898,12.755,204.375,12.755z"/>
                                    </g>


                                    <g>
                                        <path   d="M68.197,0c-5.523,0-10,4.477-10,10v65.168c0,5.523,4.477,10,10,10s10-4.477,10-10V10C78.197,4.477,73.72,0,68.197,0z"/>
                                    </g>

                                    <g>
                                        <path   d="M75.267,105.6c-1.86-1.87-4.44-2.93-7.07-2.93s-5.21,1.06-7.07,2.93c-1.86,1.86-2.93,4.43-2.93,7.07
                                            c0,2.63,1.07,5.21,2.93,7.07s4.44,2.93,7.07,2.93s5.21-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                                            C78.197,110.03,77.127,107.46,75.267,105.6z"/>
                                    </g>
                                    <g>
                                        <path   d="M372.417,208.93c-1.86-1.86-4.44-2.93-7.07-2.93c-2.64,0-5.22,1.07-7.07,2.93c-1.87,1.86-2.93,4.44-2.93,7.07
                                            s1.06,5.21,2.93,7.07c1.86,1.86,4.43,2.93,7.07,2.93c2.63,0,5.2-1.07,7.07-2.93c1.86-1.86,2.93-4.44,2.93-7.07
                                            S374.277,210.79,372.417,208.93z"/>
                                    </g>

                                </svg>
                                
                        </Button>
                    </li>
                    <center>{down}</center>
                    <li>
                        <Button name ={'calculations'}
                            className = {"btn"}
                            title ={'Calculations'}
                            setCurrent =  {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}
                            
                            >
                                <svg version="1.1" id="img-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 556.422 556.423" >
                                    <g id="iconos_8_">
                                        <path d="M135.596,426.698l-2.189,61.993l23.801,9.534l22.175-55.396c-3.547,1.07-7.239,1.826-11.14,1.826
                                            C154.521,444.656,142.51,437.465,135.596,426.698z"/>
                                        <path d="M388.18,444.656c-4.38,0-8.511-0.89-12.44-2.229l22.338,55.798l23.801-9.534l-2.133-60.416
                                            C412.699,438.153,401.213,444.656,388.18,444.656z"/>
                                        <polygon points="131.484,556.423 144.786,517.57 132.632,511.594 		"/>
                                        <path d="M431.632,551.249c3.395-1.434,5.307-4.57,4.284-6.999l-12.775-33.728l-12.278,5.192l12.775,33.728
                                            C424.661,551.871,428.247,552.684,431.632,551.249z"/>
                                        <circle cx="168.243" cy="405.813" r="19.718"/>
                                        <circle cx="388.18" cy="405.813" r="19.718"/>
                                        <path d="M280.602,90.05c5.719,0,11.293,0.593,16.734,1.588V76.5h19.125V0h-66.938v76.5h19.125v14.401
                                            C272.569,90.395,276.547,90.05,280.602,90.05z"/>
                                        <path d="M206.493,183.284c0,13.55,3.691,26.211,10.041,37.131c8.683,14.946,22.415,26.536,38.881,32.494
                                            c7.87,2.85,16.323,4.484,25.178,4.484c6.924,0,13.588-1.023,19.938-2.792c16.571-4.628,30.771-14.832,40.478-28.506
                                            c8.606-12.097,13.703-26.852,13.703-42.812c0-40.927-33.182-74.109-74.109-74.109S206.493,142.347,206.493,183.284z
                                            M280.602,149.815c18.484,0,33.469,14.985,33.469,33.469c0,18.484-14.984,33.469-33.469,33.469s-33.469-14.984-33.469-33.469
                                            C247.133,164.8,262.118,149.815,280.602,149.815z"/>
                                        <path d="M106.086,306v28.688h28.688v-9.562h39.847l-17.471,43.644c3.538-1.062,7.219-1.808,11.102-1.808
                                            c14.439,0,26.918,8.014,33.612,19.737l24.643-61.573h42.142v29.586c0,4.781,3.882,8.664,8.664,8.664h1.797
                                            c4.781,0,8.664-3.883,8.664-8.664v-29.586h41.004l25.13,62.777c6.503-12.383,19.336-20.941,34.272-20.941
                                            c3.404,0,6.655,0.583,9.802,1.405l-17.309-43.241h40.976v9.562h28.688V306h-28.688v9.562h-44.81l-27.731-69.261
                                            c-11.121,12.078-25.321,21.267-41.415,26.172l17.26,43.089h-37.179v-20.023c0-4.781-3.883-8.664-8.664-8.664h-1.797
                                            c-4.781,0-8.664,3.883-8.664,8.664v20.023h-38.308l17.987-44.925c-15.921-5.9-29.825-15.969-40.296-28.965l-29.586,73.89h-43.672
                                            V306H106.086z"/>
                                    </g>

                                </svg>
                                
                        </Button>
                    </li>
                    <center>{down}</center>
                    <li>
                        <Button name ={'publishers'}
                            className = {"btn"}
                            title = {'Publishers'}
                            setCurrent =  {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}
                            
                            >
                                <svg version="1.1" id="img-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                    viewBox="0 0 512.001 512.001" >
                                    <g>
                                        <path d="M404.99,344.077c-26.743,0-50.588,12.583-65.974,32.124l-154.093-88.964c3.888-9.662,6.049-20.198,6.049-31.236
                                            c0-11.037-2.162-21.573-6.049-31.236l154.093-88.964c15.387,19.54,39.231,32.124,65.974,32.124
                                            c46.297,0,83.962-37.666,83.962-83.962C488.952,37.666,451.288,0,404.99,0s-83.962,37.665-83.962,83.961
                                            c0,11.038,2.163,21.576,6.052,31.24l-154.091,88.964c-15.387-19.542-39.233-32.127-65.978-32.127
                                            c-46.297,0-83.962,37.666-83.962,83.962c0,46.296,37.665,83.962,83.962,83.962c26.745,0,50.591-12.585,65.978-32.127L327.08,396.8
                                            c-3.889,9.664-6.052,20.201-6.052,31.24c0,46.297,37.665,83.961,83.962,83.961s83.962-37.665,83.962-83.961
                                            C488.952,381.744,451.288,344.077,404.99,344.077z M404.99,23.808c33.169,0,60.155,26.985,60.155,60.153
                                            c0,33.169-26.985,60.155-60.155,60.155c-33.169,0-60.155-26.986-60.155-60.155C344.836,50.792,371.822,23.808,404.99,23.808z
                                            M107.011,316.155c-33.169,0-60.155-26.986-60.155-60.155c0-33.169,26.985-60.155,60.155-60.155
                                            c33.169,0,60.155,26.986,60.155,60.155C167.166,289.169,140.18,316.155,107.011,316.155z M404.99,488.192
                                            c-33.169,0-60.155-26.985-60.155-60.153c0-33.169,26.985-60.155,60.155-60.155c33.169,0,60.155,26.986,60.155,60.155
                                            C465.145,461.208,438.159,488.192,404.99,488.192z"/>
                                    </g>

                                    <g>
                                        <path d="M107.011,220.606c-19.516,0-35.394,15.877-35.394,35.394c0,6.573,5.329,11.904,11.904,11.904s11.904-5.331,11.904-11.904
                                            c0-6.389,5.197-11.586,11.586-11.586c6.574,0,11.904-5.331,11.904-11.904C118.915,225.936,113.585,220.606,107.011,220.606z"/>
                                    </g>

                                </svg>

                        </Button>
                    </li>

                </ul>  
                <Button name={'camera settings'}
                            className = {"btn camera-settings"}
                            title = {'Camera Settings'}
                            setCurrent = {(name) => this.setCurrent(name)}
                            current = {this.state.pressedBtn}
                            
                            >
                                <svg id= "img-btn" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" x="0px" y="0px" fill= "current-color">
                                    <g><g>
                                        <path fill="current-color" d="M457.4,212.4C457.4,101.3,367.1,11,256,11C144.9,11,54.6,101.3,54.6,212.4c0,104.2,79.5,190.1,181,200.4v47.4h-56.1    c-11.3,0-20.4,9.1-20.4,20.4c0,11.3,9.1,20.4,20.4,20.4h153.1c11.3,0,20.4-9.1,20.4-20.4c0-11.3-9.1-20.4-20.4-20.4h-56.1v-47.4    C377.9,402.5,457.4,316.6,457.4,212.4z M95.4,212.4c0-88.5,72-160.6,160.6-160.6c88.5,0,160.6,72,160.6,160.6    c0,88.5-72,160.6-160.6,160.6C167.5,373,95.4,300.9,95.4,212.4z"/>
                                        <path  fill="current-color" d="m349.5,212.4c0-51.6-41.9-93.5-93.5-93.5-51.6,0-93.5,42-93.5,93.5 0,51.6 41.9,93.5 93.5,93.5 51.6,0 93.5-41.9 93.5-93.5zm-146.2,0c0-29 23.6-52.7 52.7-52.7 29,0 52.7,23.6 52.7,52.7 0,29-23.6,52.7-52.7,52.7-29,5.68434e-14-52.7-23.7-52.7-52.7z"/>
                                    </g></g>
                                </svg>
                                
                </Button>   
            </div>
        )
    }
}