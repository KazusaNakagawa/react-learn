import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isPristine } from 'redux-form';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

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
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubmit(values) {
    await this.props.postEvent(values)
    console.log(values)
    console.log(this.props.history);
    this.props.history.push('/')
  }

  render() {
    /* 不活性
      pristine   : 未入力時選択
      submitting : 重複押し
      invalid    : error message時
    */
    const { handleSubmit, pristine, submitting, invalid } = this.props
    // console.log({handleSubmit})
    const style = { margin: 12}

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
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
