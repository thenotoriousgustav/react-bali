import React, {Component} from 'react';
import Background from './bg.png';
import Chevron from './down-chevron.png';
import Foto from "./assets/img/habib.jpg";
import {Header, Button} from "./components";
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 648px)").matches,
    email: ''
  };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 648px)").addListener(handler);
  }


  onChangeText = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  onButtonPress = () =>{
    alert(`anda telah terdaftar sebagai ${this.state.email}`)
  }
  render(){  
    const {matches, email} =this.state
    return(
      <Router>
        <div style={styles.background}>
        <div style={styles.overlay}>
          <div style={{display:'flex', position:"absolute", width:"100%", backgroundColor:"rgba(255, 255, 255, 0.75)", justifyContent: 'center'}}>
          <Link style={styles.Link} to="/"><section style={styles.section}>Home</section></Link>
           <Link style={styles.Link} to="/about"><section style={styles.section}>about me</section></Link>
          </div>
         
         <Switch>
          <Route path="/about">
            <div style={styles.container}>
            <div style={{marginTop: 85, alignSelf:'center'}}>
              <center>
              <img src={Foto} alt="" style={{height: 168, width: 150}}/></center>
          <div style={matches ? styles.h1 : styles.h2}>
        hello my name is <b>Risti</b> as full-stack developer from <b>arkademy</b>
          </div>
          </div>
          </div>
          </Route>
          <Route path="/">
          <div style={styles.container}>
            <Header title="Risti"/>
            <div style={matches ? styles.h1 : styles.h2}>
              This Most Simple & Yet <b>Powerful</b> <b>Way</b> To <b>Launch</b> Your Startup
              </div>
              <div style={styles.wrapperInput}>
               <div style={styles.bgInput}>
                <input onChange={(e) => this.onChangeText(e)} value={email} type="text" name="name" placeholder="Enter Your Email" style={matches ? styles.input : styles.input2}/>
            </div>
            <a href="/" onClick={this.onButtonPress} style={{textDecoration: 'none'}}>
            <Button value={email} title="DAFTAR"/>
            </a>
          </div>

            <div style={styles.wrapperScroll}>
              <p style={styles.textScroll}>Scroll Down To explore</p>
              <img alt='chevron' style={styles.icon} src={Chevron} height="24" width="24"/>
            </div>
         </div>  
           
          </Route>
        </Switch>
      </div>
     </div>
    </Router>
    
    );
  }
}

let w = window.innerWidth;
let h = window.innerHeight;
const styles = {
  background: {
    display: 'flex',
    backgroundImage: `url(${Background})`,
    /*full height*/
    height: '100%',
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
  display:'flex',
   flexDirection: 'column'
},
topText: {
alignSelf: 'center',
 marginTop: 50, 
 borderStyle:'solid', 
 borderWidth: 5, 
 maxWidth: 50, 
 color: '#fff', 
 justifyContent: 'center', 
 padding: 10,
 fontWeight: 'bold'
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
  alignSelf: 'center', 
  marginTop: 50, 
  color: 'white', 
  fontSize: 36, 
  textAlign: 'center'
},
wrapperInput: {
  display: 'flex',
   alignSelf: 'center', 
   marginTop: 60
},
bgInput:{
  display:'flex',
  backgroundColor: '#fff',
  borderRadius: 10, 
  marginRight: 16
},
input:{
borderRadius: 6, padding: 16, width: 250, borderStyle: 'none', fontSize: 14
},
input2:{
  borderRadius: 6, 
  padding: 10, 
  borderStyle: 'none', 
  fontSize: 14
  },
button:{
display:'flex', backgroundColor: '#2CA64E', padding: 16, color: '#fff', borderRadius: 10
},
wrapperScroll:{
  display: 'flex', alignSelf: 'center', marginTop: 60, flexDirection: 'column'
},
textScroll:{
  color: '#fff', maxWidth: 100, textAlign: 'center'
}, 
icon:{
  alignSelf: 'center'
},
section:{
  margin: 8,
  padding: 8,
  borderStyle: 'groove',
  borderWidth: 1,
  color: '#000'
},
Link:{
  textDecoration: 'none'
}
};

export default App;

