import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
const minu = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    //limit="00:00:10"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
            
          
             if ( hours==0) 
      return (
          <span  style={{    paddingLeft: '2px',
    paddingRight: '2px'}}>
            { minutes } minutes ago 
          </span>
      
      )
            
            else if (hours>0)
                 return (
          <span  style={{    paddingLeft: '2px',
    paddingRight: '2px'}}>
            { hours } hours ago 
          </span>
      
      );
    }}
   />
);
 
export default minu;