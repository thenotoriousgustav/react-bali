import React, { Component } from 'react';
import Background from './bg.png';
import Foto from './assets/img/logo.png';
import { Button, Button2 } from './components';
class App extends Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <div style={styles.container}>
            <img src={Foto} alt="" style={{ height: 168, width: 150 }} />
            <div style={styles.h1}>
              A Better way to
                            <div style={styles.h2}>
                Travel to Bali
                            </div>
            </div>
            <div style={styles.subTittle}>
              Cheapest and Easyer
                        </div>
            <div style={styles.wrapperInput}>
              <Button2 title="Read More" />
              <Button title="Reservation" />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
  background: {
    display: 'flex',
    backgroundImage: `url(${Background})`,
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgoundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  overlay: {
    backgroundColor: "rgba(81, 77, 67, 0.7)",
    height: h,
    width: '100%'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Pacifico'
  },
  h1: {
    alignSelf: 'center',
    marginTop: 50,
    color: 'white',
    fontSize: 48,
    textAlign: 'center',
    maxWidth: 700
  },
  h2: {
    color: 'orange',
    textAlign: 'center',
    maxWidth: 700
  },
  wrapperInput: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 60
  },
  subTittle: {
    color: 'white',
    fontFamily: "Roboto",
    marginTop: 20
  },
}

export default App;

