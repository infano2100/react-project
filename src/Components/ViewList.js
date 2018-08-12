import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Table } from 'antd'

const data = [
  {
    title: 'Sunday',
    dataIndex: 'Sunday',
    day: 'Sunday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Monday',
    dataIndex: 'Monday',
    day: 'Monday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Tuesday',
    dataIndex: 'Tuesday',
    day: 'Tuesday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Wednesday',
    dataIndex: 'Wednesday',
    day: 'Wednesday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Thursday',
    dataIndex: 'Thursday',
    day: 'Thursday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Friday',
    dataIndex: 'Friday',
    day: 'Friday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  },
  {
    title: 'Saturday',
    dataIndex: 'Saturday',
    day: 'Saturday',
    render: data =>
      data.map(function(val, index) {
        return (
          <div key={index}>
            <img width="35%" src={val.photo} alt={val.name} />
            <p>
              {val.title}. {val.name} {val.surname}
            </p>
          </div>
        )
      })
  }
]

class ViewList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listData: []
    }
  }

  componentDidMount() {
    axios.get(`http://uinames.com/api/?ext&amount=25`).then(res => {
      const listData = res.data
      const newData = []
      const groups = {}
      const newData2 = []

      listData.forEach(function(val) {
        const getDay = moment(val.birthday.mdy).format('dddd')
        const setData = Object.assign({ ...val }, { day: getDay })
        newData.push(setData)
      })

      newData.forEach(function(item) {
        const list = groups[item.day]
        if (list) {
          list.push(item)
        } else {
          groups[item.day] = [item]
        }
      })
      newData2.push(groups)

      this.setState({ listData: newData2 })
    })
  }

  render() {
    const { listData } = this.state
    return (
      <div>
        {listData ? (
          <Table
            columns={data}
            dataSource={listData}
            size="small"
            pagination={false}
            rowKey={record => record.Sunday[0].name}
          />
        ) : null}
      </div>
    )
  }
}

export default ViewList
