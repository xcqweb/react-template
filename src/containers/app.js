import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import logo from '~/assets/logo.png';
import * as homeActions from '../redux/reduces/home';
import * as cartActions from '../redux/reduces/cart';




@connect(
  state => (Object.assign({},{home: state.home},{cart:state.cart})),
  dispatch => bindActionCreators(Object.assign({},homeActions,cartActions),dispatch),
)
class App extends Component {
  state = {
  }
  componentWillMount() {
  	console.log(this)
    const {initalLogo} = this.props;
    console.log(this.props);
    initalLogo();
  }
  handleBrowserChange = () => {
    const {history, changeRoute} = this.props;
    changeRoute();
    history.push('/docs');
  }
  
  addChange = () => {
  	
  	const {initalNum,addNum} = this.props;
  	addNum({num:3,text:'hello'})
  	console.log(this)
  }
  
  render() {
    const {home: {movelogo}} = this.props;
    return (
      <div className="home" style={{paddingTop: 100}}>
        <div className={`center ${movelogo ? 'logo-move' : ''}`}>
          <div className="logo-box">
            <img src={logo} className="logo" onClick={this.handleBrowserChange} />
            
          </div>
          <h1>React Project</h1>
          <h1 onClick={this.addChange}>{this.props.cart.num}{this.props.cart.text}</h1>
        </div>
        <div style={{width: '1000px', margin: '0 auto'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
