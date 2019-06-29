import React,{Component} from 'react';




class ContactList extends Component{
  render() {
      const people=this.props.contacts;
  
  return React.createElement('ol',{className:'welcome-message'},
      people.map((person,index) => (
          <li key={index}>{person.name}</li>)
          )
          )

}
}



class App extends Component{
  render()
  {
    return(
      <div className="App">
    <ContactList contacts={[
      {name:'Ram'},
      {name:'Hari'},
      {name:'Shyam'}
    ]}/>
    <ContactList 
    contacts={[
      {name:'Rajiv'},
      {name:'Ravi'},
      {name:'Krishna'}
    ]}
    />
    
    </div>)
  }
}



export default App;
