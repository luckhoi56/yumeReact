import React from 'react';
import background from './background.png';

function Background(){
    return(
       <div
           style={{backgroundImage:`url(${background})`}}>
           Nice Snippet
       </div>
    );
}
export default Background;