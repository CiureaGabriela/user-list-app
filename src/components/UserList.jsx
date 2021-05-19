import React from 'react';
import UserItem from './UserItem';

 function UserList (props) {
    const { users } = props;
    
    return (
        <div className= "mx-5 ">
           <h2 className=" userListTitle text-center mb-5 text-capitalize ">user list</h2>
         
           <div className="columns col-12 d-flex flex-wrap align-items-center">
           
           { users.map((user, index) => {
               return <UserItem
                   id={ user.id }
                   name={ user.name }
                   email={ user.email }
                   isGoldClient={ user.isGoldClient }
                   key={ index }
                   salary ={user.salary}
                   image = {user.image}                
                  
               />
           })}
          </div>

                      
           
            
        </div>
    );
}

export default UserList;