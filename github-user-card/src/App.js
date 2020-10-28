
import React from 'react'
import './App.css';

class App extends React.Component {

  state = {

    user: [],
    followers: [],
    url: '',
  }
  
  componentDidMount() {

 
    this.fetchGithubFollowers()
    this.fetchMe()
    console.log(this.state.user)

  }

  fetchMe = () =>{ 
      fetch('https://api.github.com/users/robertmasters')
      .then((good) => good.json())
      .then((good) => {
        this.setState({
          user: good
        })
        console.log('me: ',good)
      })
      .catch((err) => console.log("Err: ", err))
  }
  fetchGithubFollowers = () => {
    fetch('https://api.github.com/users/robertmasters/followers')
      .then((good) => good.json())
      .then((good) => {
        this.setState({
          followers: good
        })
        console.log('f',good)
      })
  }

  render() {
    return (
      <div className='mainContainer'>
        <div>
        <h1>{this.state.user.name}</h1>
          <img src={this.state.user.avatar_url} alt="user" />
          <h3>{this.state.user.bio}</h3>
          <p>Following: {this.state.user.following}</p> 
          <p>Followers: {this.state.user.followers}</p> 
          <a href='https://github.com/robertmasters'>Github profile</a>
        </div>

        <h2>Followers: </h2>

        
          {this.state.followers.map((follower) => (
            <div className="userCardContainer">  
            <div key={follower.id}>    
             
              <img src={follower.avatar_url} alt='avatar' />
              <p>Username: {follower.login}</p>
              <a href={follower.html_url}>Github profile</a>
              </div>
            </div>
          ))}
        </div>
      
      
    )
  }
}
export default App

