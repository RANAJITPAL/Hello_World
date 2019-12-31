import React from 'react';
import '../App.css';
import Button from '@material-ui/core/Button';


function hello(){
    return(
        <div>
            hello World
            {alert('hello world')}
        </div>
    );
}

function Welcome_Button(){
    return(
        <div>
            <Button variant="contained" color="#1a1aff" disableElevation onclick ={()=>hello()}>Welcome</Button>
        </div>
    );
}

export default Welcome_Button;