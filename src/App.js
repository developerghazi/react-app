import React from 'react';

export class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      buyItems:['milk','bread','cake','coffee'],
      message:''

    }
  }

  addItem(e){
    e.preventDefault();
    const{buyItems} = this.state;
    const newItem = this.newItem.value;

    const isOnTheList= buyItems.includes(newItem);

    if(isOnTheList){
        this.setState({
          message: 'This item is already on the list.' 
        })
    }
    else{

      newItem !=='' && this.setState({
        buyItems: [...this.state.buyItems,newItem],
        message: ''
      })

    }

    this.addForm.reset();
  }

  removeItem(items){
    const newBuyItems= this.state.buyItems.filter(buyItems=>{
      return buyItems !== items;
    })

    this.setState({
      buyItems: [...newBuyItems]
    })

     if(newBuyItems.length === 0){
       this.setState({
         message: 'No items on the list yet! Add some :)'
       })
     }
  }

  clearAll(){
    this.setState({
      buyItems: [],
      message: 'No items on the list yet! Add some :)'
    })
  }

  

  render(){
    const {buyItems, message}=this.state;


    return(
      <div>
        <header>
          
          <h3 className="head">Shopping-List</h3>

          <form ref={input => this.addForm = input} className="form-inline" onSubmit={(e) => {this.addItem(e)}}>
            <div className="form-group">
                <input ref={input => this.newItem = input} type="text" placeholder="add your item" className="form-control" id="newItemInput"/>
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
            
          </form>
          
        </header>

        <div className="content">
           {
             (message !== '' || buyItems.length === 0) && <p className="message text-danger">{message}</p>
           }

           {
             buyItems.length > 0 &&

             <table className="table table-dark">
             {/* <caption>Shopping List</caption> */}
            <thead>
               <tr>
                  
                  <th>Item</th>
                  <th>Action</th>     
               </tr>
            </thead>
           <tbody>

              {
                buyItems.map(items =>{
                return (
                 <tr key={items}>
                   
                   <td>{items}</td>
                   <td className="text-right">
                     <button onClick={(e)=>this.removeItem(items)} type="button" className="btn btn-secondary btn-sm">Remove</button>
                   </td>
                 </tr>
                )
                 })
              }

              
          </tbody>
       </table>

           }
          
          <button onClick={(e) => this.clearAll()} className="btn btn-secondary btn-sm">Clear List</button>
        </div>
        
      </div>
    )
  }
}