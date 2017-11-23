import React, { Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

class ShowComponent extends Component{

  componentDidMount(){
    this.props.dispatch({
      type: 'INCREMENT'
    })
  }

  render(){
    return(
      <div>
        <div className="counter">  Count: {this.props.count} </div>
        <h1 className='titleTag'>Simple Redux Counter</h1>
        <button className='incButt' onClick={() => this.props.dispatch({type: 'INCREMENT'})}>increment</button>
        <button className='decButt' onClick={() => this.props.dispatch({type: 'DECREMENT'})}>decrement</button>
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ShowComponent);
