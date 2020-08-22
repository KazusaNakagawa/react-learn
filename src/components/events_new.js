import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

// implement func
import { postEvents } from '../actions';



class EventsNew extends Component {
  
  render() {
    const insert = "insert new"
    return (
      <React.Fragment>
        <div>
          <h2>{ insert }</h2>
        </div>
      </React.Fragment>
    )
  }
}

// const mapStateToProps = state => ({ postEvents })

export default connect(null, null)(EventsNew)
