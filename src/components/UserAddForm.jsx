import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            salary: '',
            image: '',
           
           
           
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }
    updateSalary(event) {
        this.setState({salary: event.target.value});
    }
    
   

    render() {
        const {name, email, isGoldClient, salary,image} = this.state;

        return (
           
            
            <form
                
                onSubmit={(event) => this.props.submitAddForm(event, name, email, isGoldClient,salary, image)}>
                
                <div className="col-12 d-flex flex-wrap align-items-center mx-5 mt-5 mb-5 ">
                <div className='div-name'>
                 <label className="labelName " htmlFor="name">Name: </label>
                 <input className="name"
                    type="text"
                    id="name"
                    required
                    onChange={(event) => this.updateName(event)}
                />

                </div>
                 <div className='div-email'>
                  <label className="labelEmail" htmlFor="email">Email: </label>
                  <input
                  
                   required
                    refs="email"
                    className='email'
                    type="text"
                    id="email"
                    onChange={(event) => this.updateEmail(event)}
                  />
                 </div>
                
                <div className="div-salary">
                <label className="labelSalary" htmlFor="salary"> Salary: </label>
                <input
                    required
                    type="text"
                    id="salary"
                    onChange={(event) => this.updateSalary(event)  }
                />
                </div>

                <div className="div-client">
                <label className="labelGoldClient"  htmlFor="is-gold-client"> GOLD Client </label>
                <input
                    className="ml-2"
                    className='is-gold-client'
                    type="checkbox"
                    id="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />
                </div>
                
                <input className='submit ' type="submit" value="Submit"/>
                </div>
                
                
            </form>
        )
    }
}

export default UserAddForm;