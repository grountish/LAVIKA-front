import React, { Component } from "react";
import axios from "axios";
import { withAuth } from "./../lib/Auth";
import WaveForm from './../components/WaveForm'
import { Link } from 'react-router-dom';

class Profile extends Component {
    state = {
        user: null,
    };

    componentDidMount() {
        axios
            .get("http://localhost:5000/users", { withCredentials: true })
            .then((response) => this.setState({ user: response.data }));
    }

    render() {
        const { user } = this.state;
        return (
            <div>
                {
                    !user
                        ? 'loading'
                        :
                        <div>
                            <div>
                                <h1>{user.username}</h1>
                                <h2>{user.email}</h2>
                                <Link to={`/edit-profile`}>
                                    <button className="btnBorder ">
                                        <img className="logo-edit" src={edit} alt="" />
                                    </button>
                                </Link>
                                <img src={user.imgPath} alt="avatar" />
                            </div>
                            {user.songs.map((song, ind) => {
                                return (
                                    <WaveForm key={ind} urlPath={song.urlPath} />)
                            })}
                        </div>
                }
            </div>
        )
    }
}

export default withAuth(Profile);
