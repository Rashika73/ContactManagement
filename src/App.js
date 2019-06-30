import React,{Component} from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import {Route} from 'react-router-dom'




class App extends Component{

  state={ 
    screen:'list',
    contacts:[]
  
}

componentDidMount(){
  ContactsAPI.getAll().then((contacts)=>{
    this.setState({contacts})
  })
}

removeContact=(contact)=>{
  this.setState((state)=>(
    {
        contacts:state.contacts.filter((c)=>c.id!==contact.id)
    }
  ))

  ContactsAPI.remove(contact)
}

 
  render()
  {
    return(
      <div className="Contacts">


        {/** 
        {this.state.screen==='list'&&(
          <ListContacts onNavigate={()=>{this.setState({screen:'create'})}} onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
          )}
          */}

  {/** if no match then the path is partial that is even if it partially matched it does display*/ }  


<Route  exact path='/'  render={()=>(<ListContacts onNavigate={()=>{this.setState({screen:'create'})}} onDeleteContact={this.removeContact} contacts={this.state.contacts}/>)}/>




          {/** {this.state.screen==='create'&&(
          <CreateContact/>
          )*/}



<Route path='/create' render={()=><CreateContact/>}/>


{/** 
  Same as above 

<Route path='/create' component={CreateContact}/>

*/}

      </div>
     )
  }
}




export default App;
