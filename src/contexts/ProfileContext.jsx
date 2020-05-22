import React, { createContext, Component } from "react";
import axios from "axios";

export const ProfileContext = createContext();

class ProfileContextProvider extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios.get('http://localhost:5000/users', { withCredentials: true })
      .then((response) => {
          console.log(response);
        const user = response.data;
        this.setState({ data:user });
      })
      .catch((err) => this.setState({ data: [] }));
  }
  render() {
    return (
      <ProfileContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
}

export default ProfileContextProvider;
