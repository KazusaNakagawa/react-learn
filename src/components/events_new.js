import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions';


class EventsNew extends Component {

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (<div></div>)
  }

  render() {
    return (
      <form>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <input type="submit" value="Submit" disabled={false} />
        <Link to="/" >Cancel</Link>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  return errors
}

// const mapStateToProps = state => ({ postEvents })

export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)
