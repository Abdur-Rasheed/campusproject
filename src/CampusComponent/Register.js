import React, { Component } from 'react';


  class Register  extends Component{
    constructor(props){
      super(props);
      this.state = {
        name:'',
        campusName: '',
        url: ''
      }
    }

   onNameChange =(event) =>{
     this.setState({name:event.target.value})
   }

   onCampNameChange = (event) =>{
     this.setState({campusName:event.target.value})
   }

   onLinkChange =(event) =>{
     this.setState({url:event.target.value})
   }


   onSubmit =()=>{
     alert('Successfull regisetered')
    fetch('http://localhost:3000/register',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        url: this.state.url,
        name: this.state.name,
        campusName:this.state.campusName, 
       })
   
    })
     .then(response => response.json())
     .then(user =>{
         if(user){
           this.props.loadUser(user)
           this.props.onRoutechange('home')
         }
       })
   }

    render(){
      return(
        <article className="br3 ba dark-gray b--black-10 mv5 w-150 w-50-m w-25-l mw6 center shadow-5">
          <main className="pa4 black-100">
        <div >
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Campus Name</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="Name" 
               id="Name"
               onChange = {this.onNameChange}/>
            </div>
  
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Campus Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
              type="text" 
              name="campus names" 
               id="campus id"
               onChange = {this.onCampNameChange}/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Url</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
               type="text" 
               name="url"  
               id="url"
               onChange = {this.onLinkChange}
               />
            </div>
          </fieldset>
          <div className="">
            <input
               onClick = {this.onSubmit}
             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer" 
             type="submit" 
             value="Register"/>
          </div>
        </div>
    </main>
  </article>
      )
    }
   
    
}

export default Register;