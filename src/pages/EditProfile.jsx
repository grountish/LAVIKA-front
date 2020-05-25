import React, { Component } from 'react'
import axios from "axios";
import { withAuth } from './../lib/Auth';

// import axios from "axios";
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          aboutMe: "",
          imgPath: "",
          email:'',
        };
    }
    componentDidMount() {
        axios
          .get("http://localhost:5000/users", { withCredentials: true })
          .then((response) => console.log(response));
      }
    
    
    handleFileUpload = (e) => {
      console.log("The file to be uploaded is :", e.target.files[0]);
      const uploadData = new FormData();
      uploadData.append("imgPath", e.target.files[0]);
      axios.post("http://localhost:5000/users/file", uploadData, { withCredentials: true })
      .then(response => {
          // console.log('response is: ', response);
          // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
          this.setState({ 
              imgPath: response.data.imgPath
           });
        })
        .catch(err => {
          console.log("Error while uploading the file: ", err);
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/users', this.state, { withCredentials: true })
        .then(res => {
            console.log('added: ', res);

            this.props.me(()=>{
              this.props.history.push('/profile')

            })
           
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }  

    componentDidMount = () => {
      this.setState(this.props.user)
    }

    handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( {[name]: value })
      };


    render() {
        return (
      <div className="">
        <h2 className ="">Edit User</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group">
            <div className="">
            <img className ="profileImg" src={this.state.imgPath ? this.state.imgPath : 'nothing'} alt=""/>
            </div>
            
            <input
              type="file"
              required
              className="form-control"
              id="idProfileImg"
                name= "imgPath"
              aria-describedby="image"
              placeholder={this.state.imgPath}
              onChange={(e) => this.handleFileUpload(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idName">Username</label>
            <input
              className="form-control"
              id="idName"
              aria-describedby="Name"
              placeholder={this.state.username}
              type="text"
              name="username"
              value={this.state.username || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              id="idLastName"
              aria-describedby="Lastname"
              placeholder={this.state.email}
              type="email"
              name="email"
              value={this.state.email || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="idSobreMi">About me</label>
            <textarea
              className="form-control"
              id="idSobremi"
              aria-describedby="AboutMe"
              placeholder={this.state.aboutMe}
              type="text"
              name="aboutMe"
              value={this.state.aboutMe || ''}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          
          <div className="text-center">
          <button  className="btn btnBlue" type="submit">
            Save Profile
          </button>
          </div>
        </form>
            </div>
        )
    }
}
export default withAuth(EditProfile);