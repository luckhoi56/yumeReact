import React from "react";
import Grid from './components/layout/Grid';
import Background from './components/layout/Background';
function App(){
  return(
    <Grid>
    <Grid.Row columns={3}>
    
      <Grid.Column width={3}>
      <Background></Background>
      </Grid.Column>
    </Grid.Row>
  </Grid>
  
  
   
  )
}
export default App;