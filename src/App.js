import React from 'react';


export class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      buyItems:['milk','bread','cake']
    }

  }

  render(){
    const {buyItems}= this.state;
    return (
      <div>
        <h1>Shopping List</h1> 
        {
          this.state.buyItems.map(items=>{
            return <p key={items}>  {items}</p>
          })
        }  
      </div>
    )
  }
}



