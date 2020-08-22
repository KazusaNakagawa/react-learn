import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom'

import { postEvent } from '../actions';


class EventsNew extends Component {
  constructor(props) {
    super(props)
    // 決まり文句
    this.onSubmit = this.onSubmit.bind(this)
  }
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>} 
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    console.log(values)
    console.log(this.props.history);
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit } = this.props
    console.log({handleSubmit})

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        
        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/" >Cancel</Link>
        </div>

      </form>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}


// args state要らない: 理解してなくて、submit 反映されなくて苦戦した
// const mapDispatchToProps = state => ({ postEvent })
const mapDispatchToProps = ({ postEvent })
console.log(mapDispatchToProps)

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(EventsNew)
)