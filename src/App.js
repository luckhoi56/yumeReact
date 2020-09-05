import React from "react";
import Grid from './components/layout/Grid'
function App(){
  return(
  <Grid>
  <Grid.Row columns={5}>
    <Grid.Column></Grid.Column>
    <Grid.Column></Grid.Column>
    <Grid.Column>Yume House Pho</Grid.Column>
    <Grid.Column></Grid.Column>
    <Grid.Column>Order Now</Grid.Column>
  </Grid.Row>
  </Grid>
  
  )
}
export default App;