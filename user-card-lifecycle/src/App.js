import './App.css';
import React from 'react';
import axios from 'axios';
import Card from './CardComponents/Card';
import FollowerCard from './CardComponents/FollowerCard';

class App extends React.Component {
  state={
    user:[],
    followers:[],
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/bbrooksy')
    .then(res => {
      this.setState({...this.state, user: res.data})
    })
    .catch(err => console.log('ERROR'))
    

    axios
    .get(`https://api.github.com/users/justsml/followers`)
    .then(res => {
    this.setState({...this.state, followers: res.data})
})
    .catch(err => console.log('Error', err))
}

    render(){
    return (
      <div className='app-container'>

        <h1>Github User Card</h1>

        <div classname= 'card-container'>
        <Card user={this.state.user}/>
        {this.state.followers && this.state.followers.map((follower, index) => {
      
    return <FollowerCard follower={follower} key={index}/>
      
    })}

        </div>
      </div>
    )}
  }

export default App;
