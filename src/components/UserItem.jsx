import React from 'react';



function UserItem(props) {
    const {name, email, isGoldClient, salary, image,id} = props;
    
    return (
        <div className ="userItem d-flex flex-column align-items-center mx-5"> 
            
            <img className="img-thumbnail "  width={155} height={230} src={image} />
            <h3 className="text-center" style={{fontSize:15}}>{ name }</h3>
            <p className="text-center" >  { email }</p>
            <p className="text-center"> Salary: {salary}</p>
             { isGoldClient
                ? <h3 className="text-center" style={{fontSize:15}}>Client GOLD</h3>
                : null
             }

           <button className='deleteButton mb-5 ' onClick={props.deleteEvent}> Delete User</button> 
        </div>
    );
}

export default UserItem;