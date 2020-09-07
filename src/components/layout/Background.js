import React, { Component} from "react";
import background from './background.png';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${background})`,
    
}
class Background extends Component {
    render(){
        return(
            <section style={sectionStyle}>

            </section>
        );
    }
}
export default Background;