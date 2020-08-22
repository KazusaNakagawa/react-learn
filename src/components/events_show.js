import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isPristine } from 'redux-form';
import { Link } from 'react-router-dom'

import { getEvent, deleteEvent, putEvent } from '../actions';


class EventsShow extends Component {
  constructor(props) {
    super(props)
    // 決まり文句
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
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

  async onDeleteClick() {
    // console.log(this.props.match)
    const {id} = this.props.match.params
    // console.log(id)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    // await this.props.postEvent(values)
    console.log(values)
    console.log(this.props.history);
    this.props.history.push('/')
  }

  render() {
    /*
      pristine   : 未入力時選択不可に
      submitting : 重複押し不可に
    */
    const { handleSubmit, pristine, submitting } = this.props
    console.log({handleSubmit})

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/" >Cancel</Link>
          <Link to="/" onClick={this.onDeleteClick} >Delete</Link>
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

const mapDispatchToProps = ({ deleteEvent })
console.log(mapDispatchToProps)

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm'})(EventsShow)
)