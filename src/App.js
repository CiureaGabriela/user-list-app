import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import './App.css';
import PostList from './components/PostList';




class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      background: '',
      color:'',
      users: [],
      posts: [],
      display: true   
      
    };

  
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 10);
        data.forEach(user => {
          user.isGoldClient = true;
          user.salary= 5000;
          user.image= 'https://thumbs.dreamstime.com/b/portrait-young-pretty-positive-girl-smiling-looking-camera-over-white-background-portrait-young-pretty-positive-girl-141156819.jpg';

        });
        this.setState({users: data});
      })
    
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(info =>{
         info = info.filter(info => info.id<7);
         this.setState({posts:info});
         

      } )  

   
  }
     userListButton(eventUser){
        this.setState({display:true})

     }
     postListButton(eventPost){
      this.setState({display:false})

   }

  changeColor(event) {
    this.setState({background: event.target.value});
  }

  changeTextColor(event){
    this.setState({color: event.target.value});
    
  }

  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });
    console.log(this.state.users.id);

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient, salary) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient,
            salary,
            image: 'https://thumbs.dreamstime.com/b/portrait-young-pretty-positive-girl-smiling-looking-camera-over-white-background-portrait-young-pretty-positive-girl-141156819.jpg',
          }
        ]
      }
    });
  }



  render() {
    
    return(
      <div className="app" style={{background: this.state.background ,color: this.state.color} }  >
        <div className="divTitle">
          <h1 className="title text-center text-uppercase ">My Project</h1>
        </div>
        
        <UserAddForm submitAddForm={(event, name, email, isGoldClient, salary,image,fields, errors) => this.submitAddForm(event, name, email, isGoldClient,salary,image)} />
           
        
        <div className= "col-12 d-flex flex-wrap align-items-center mb-5 mx-5">
        <button className="userButton" onClick={(eventUser)=>this.userListButton(eventUser)} >UserList </button>
        <button className='postButton' onClick={(eventList)=>this.postListButton(eventList)}  >PostList </button>
         
          <label className="backgroundColorLabel" htmlFor= "background"> Change background color: </label>
          <input className="backgroundColorInput" type="color" id="background"  onChange={(event) => this.changeColor(event)}/>
          
        
           <label className="textColorLabel"  htmlFor="text"> Change text color: </label>
           <input className=" textColorInput" id ="text" type="color" onChange={(event) => this.changeTextColor(event) }/>
         
        </div>
        
        
           {  this.state.display === true
             ?<UserList  users={this.state.users} />
             
             :<PostList posts= {this.state.posts}/>

           }
        
        
       
        
        
      </div >
    );

    
  }
}

export default App;
