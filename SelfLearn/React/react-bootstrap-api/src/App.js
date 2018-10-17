import React, { Component } from 'react';
// import TimeAgo from 'react-timeago';
 import LazyLoad from 'react-lazy-load'; //https://www.npmjs.com/package/react-lazy-load
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

//const apiurl = "https://randomuser.me/api/?results=960";
const apiurl = "https://api.github.com/users?since=";

function ReactHeader(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{props.headermsg}</h1>
      </header>
    </div>)
}

function LoaderSpinner() {
  return (
    <div className="card text-white bg-secondary">
      <h2 className="card-body text-center ">
        <span className="fa fa-spinner fa-spin"></span>Loading...
      </h2>
    </div>)
}

function ErrorDisplay(props) {
  return (
    <div className="card text-white bg-danger">
      <h4 className="card-body text-center">
        {props.errormsg}
      </h4>
    </div>)
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      error: null
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(apiurl+getRandomInt(500))
      .then(response => {
        if (response.ok)
          return response.json();
        else
          throw new Error("Something went wrong");
      })
      //.then(data => this.setState({ users: data.results, isLoading: false }))
      .then(data => this.setState({ users: data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
    console.log("state", this.state.users);
  }
  render() {
    const { users, isLoading, error } = this.state;
    if (error)
      return <ErrorDisplay errormsg={error.message} />
    if (isLoading)
      return <LoaderSpinner />
    return (
      <div className="row">
        {users.map(user =>
          <div key={user.id} className="col-sm-12 col-md-6 col-lg-4 mt-4">
            <div className="card text-center">
              <h3 className="card-header">
                {user.login}
              </h3>
              <div className="card-body">
                <LazyLoad>
                  <img src={user.avatar_url} width="160" className="img-thumbnail" alt={user.login} title={user.login}></img>
                </LazyLoad>
                <h6 className="card-title">{user.type}</h6>
                {/* IsSiteAdmin:<div className="card-text">{user.site_admin}</div> */}
              </div>
              <div className="card-footer text-muted small">
              <div><a href={user.html_url} target="_blank">{user.html_url}</a></div>
                {/* Registered on {user.registered.date}<br />(<TimeAgo date={user.registered.date} />) */}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReactHeader headermsg="Welcome to Demo project on React with Boostrap & API" />
        <CardsList />
      </div>
    );
  }
}
export default App;