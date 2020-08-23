import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, isPristine } from 'redux-form';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { getEvent, deleteEvent, putEvent } from '../actions';


class EventsShow extends Component {
  constructor(props) {
    super(props)
    // 決まり文句
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
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

  async onDeleteClick() {
    // console.log(this.props.match)
    const {id} = this.props.match.params
    // console.log(id)
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
    await this.props.putEvent(values)
    console.log(values)
    console.log(this.props.history);
    this.props.history.push('/')
  }

  render() {
    /* submit 不可に
      pristine   : 未入力時
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
        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
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

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event}
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })
console.log(mapDispatchToProps)

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)
