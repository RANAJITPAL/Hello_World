import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Welcome_Button from './Components/Welcome_Button';

function makeList(){
  return(
    <div >
      {alert('hello world')}
    </div>
  );
}



function App() {
  return (
    <div className="App">
       <Grid container spacing={0}>
          <Grid item xs={12}>
            <div style = {{backgroundColor :'#ffe066' ,height: '75vh'}}> red</div>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
