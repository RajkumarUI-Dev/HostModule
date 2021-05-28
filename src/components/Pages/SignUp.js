import React,{Component} from 'react';

const url="http://localhost:3000/artists";

class SignUp extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            bio:'',
            genre:'',
            Contact:''
        }
        
    }
    
    handleTextChanged = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleSubmit=(e)=>{
        var random=Math.floor(Math.random()*10)
        var data={
            "id":random,
            "name":this.state.name,
            "bio":this.state.bio,
            "genre":this.state.genre,
            "Contact":this.state.Contact
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Accept':'Application/json',
                "Content-Type":'Application/json'
            },
            body:JSON.stringify(data)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                      Register User
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"
                               name="name"
                                 placeholder="Enter Your Name"
                                  value={this.state.name}
                                onChange={this.handleTextChanged}
                            />
                        </div>
                        <div className="form-group">
                            <label>Bio Graphy</label>
                            <input type="text" className="form-control"
                               name="bio"
                                placeholder="Enter Your Bio Graphy"
                                
                               value={this.state.bio}
                                onChange={this.handleTextChanged}
                            />
                        </div>
                        <div className="form-group">
                            <label>Genre</label>
                            <input type="text" className="form-control"
                             name="genre"
                              placeholder="Enter Genre"
                                value={this.state.genre}
                                onChange={this.handleTextChanged}
                            />
                        </div>
                        <div className="form-group">
                            <label>Contact</label>
                            <input type="text" className="form-control"
                               name="Contact"
                               placeholder="Enter Contact number"
                               value={this.state.Contact}
                                onChange={this.handleTextChanged}
                            />
                        </div>
                        <button className="btn btn-success"
                        onClick={this.handleSubmit}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;
