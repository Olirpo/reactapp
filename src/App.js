import React from 'react';
import './App.css';

import task from './sample/test.json'

import Tasks from './components/Tasks'

class App extends React.Component{  
 state = {
   task: task
 }
  render(){
    return (
    <div>
     <Tasks tasks={this.state.task} />
    </div>
    
    );
  }
}

export default App;
