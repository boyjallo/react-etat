import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: 'Ousmane Diao DIALLO',
      bio: 'Un Developpeur web',
      imgSrc: 'https://i.pinimg.com/564x/f6/4b/90/f64b90e4ac925620eb509fc47f953e79.jpg',
      profession: 'Etudiant',
      showBio: false,
      elapsedTime: 0
    };
    this.toggleBio = this.toggleBio.bind(this);
  }

  componentDidMount() {
    this.startTime = Date.now();
    this.intervalId = setInterval(() => {
      this.setState({
        elapsedTime: (Date.now() - this.startTime) / 1000
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleBio() {
    this.setState({
      showBio: !this.state.showBio
    });
  }

  render() {
    return (
      <div className='App'>
        <h1 className='name'>{this.state.fullName}</h1>
        <img  className='avatar'
        src={this.state.imgSrc} alt={this.state.fullName} />
        {this.state.showBio ? (
          <div className='bio'>
            <p className='PRO'>{this.state.bio}</p>
            <p className='PRO'>Profession: {this.state.profession}</p>
          </div>
        ) : null}
        <button className='toggle-bio-btn' onClick={this.toggleBio}>
          {this.state.showBio ? 'Masquer la' : 'Afficher la'} Bio
        </button>
        <p>Le temps écoulé: {this.state.elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;
