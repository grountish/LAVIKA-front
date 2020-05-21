import React, { Component } from "react";
import axios from 'axios';
// import the service file since we need it to send (and get) the data to(from) server
//import service from '../api/service';
class AddThing extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          description: "",
          urlPath: ""
        };
    }
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    // this method handles just the file upload
    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
        // urlPath => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("urlPath", e.target.files[0]);
        axios.post("http://localhost:5000/scenes/file", uploadData, { withCredentials: true })
        .then(response => {
            // console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ 
                urlPath: response.data.urlPath
             });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }
    // this method submits the form
    handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/scenes', this.state, { withCredentials: true })
        .then(res => {
            console.log('added: ', res);
            // here you would redirect to some other page 
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }  
    render() {
        return (
          <div>
            <h2>New Thing</h2>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    value={ this.state.name } 
                    onChange={ e => this.handleChange(e)} />
                <label>Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    value={ this.state.description } 
                    onChange={ e => this.handleChange(e)} />
                <input 
                    type="file" 
                    onChange={(e) => this.handleFileUpload(e)} /> 
                <button type="submit">Save new thing</button>
            </form>
          </div>
        );
    }
}
export default AddThing;