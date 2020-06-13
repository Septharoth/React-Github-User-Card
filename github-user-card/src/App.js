import React from 'react' 
import axios from 'axios' 
import UserCard from './components/UserCard' 
import FollowerCard from './components/FollowerCard.js' 
import './App.css' 

class App extends React.Component {
  constructor() {
    super() 
    this.state = {
      user: {},
      followers: [],
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/septharoth')
      .then(res => {
        this.setState({
          user: res.data
        }) 
        console.log(res.data, 'this is user response') 
      })
      .catch(err => console.log(err)) 

    axios
      .get('https://api.github.com/users/septharoth/followers')
      .then(res => {
        this.setState({
          followers: res.data
        }) 
      })
      .catch(err => console.log(err)) 
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <UserCard user={this.state.user}/>
          <h3>Followers</h3>
          <FollowerCard followers={this.state.followers}/>
        </div>
      </div>
    ) 
  }
}

export default App 