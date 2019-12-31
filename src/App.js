import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Welcome_Button from './Components/Welcome_Button';





function App() {
  return (
    <div className="App">
       <Grid container spacing={0}>
          <Grid item xs={12}>
            <div style = {{backgroundColor :'#85e085' ,height: '75vh'}}>
              <Welcome_Button/>
            </div>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
