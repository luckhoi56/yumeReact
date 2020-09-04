import React from "react";
import Grid from './components/layout/Grid'
function App(){
  return(
    <Grid>
  <Grid.Row columns={3}>
    <Grid.Column>1</Grid.Column>
    <Grid.Column>2</Grid.Column>
    <Grid.Column>3</Grid.Column>
  </Grid.Row>
</Grid>
  )
}
export default App;