import React, {Component, PropTypes} from 'react'
import { DatePicker, message } from 'antd';

class componentName extends Component {
  constructor (props) {
    super(props)

  }

  state = {
    date: ''
  }

  componentWillMount () {

  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {

  }

  componentWillUpdate (nextProps, nextState) {

  }

  componentDidUpdate (prevProps, prevState) {

  }

  componentWillUnmount () {

  }

  handleChange(date) {
      message.info('您选择的日期是: ' + date.toString());
      this.setState({ date });
  }

  render () {
    return (
      <div>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
      </div>
    )
  }
}

export default componentName