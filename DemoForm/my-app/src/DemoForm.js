import React, { Component } from 'react'
import './DemoForm.css'
class DemoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      comment: '',
      language: 'react',
      gender: 'female',
      file: '',
      date: '',
      bdaymonth: '',
      checkedOne: false,
      checkedTwo: false,
    }
  }
  toppings = [
    {
      name: 'Capsicum',
      price: 1.2,
    },
    {
      name: 'Paneer',
      price: 2.0,
    },
    {
      name: 'Red Paprika',
      price: 2.5,
    },
    {
      name: 'Onions',
      price: 3.0,
    },
  ]
  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    })
  }

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    })
  }

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    })
  }
  handleFileChange = (event) => {
    this.setState({
      file: event.target.value,
    })
  }
  handleMonthChange = (event) => {
    this.setState({
      bdaymonth: event.target.value,
    })
  }
  handleDateChange = (event) => {
    this.setState({
      date: event.target.value,
    })
  }
  handleChangeOne = () => {
    this.setState({
      checkedOne: !this.state.checkedOne,
    })
  }

  handleChangeTwo = () => {
    this.setState({
      checkedTwo: !this.state.checkedTwo,
    })
  }
  handleBtnGender = (event) => {
    this.setState({
      gender: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(
      `${this.state.email} ${this.state.comment} ${this.state.language}
        ${this.state.file} ${this.state.date} ${this.state.bdaymonth} ${this.state.checkedOne} ${this.state.checkedTwo} ${this.state.gender}`,
    )
  }
  getFormattedPrice = (price) => `$${price}`
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>Demo Form</h2>
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Comments</label>
          <textarea
            id="comment"
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="language">Language</label>
          <select
            id="language"
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="angular">Angular</option>
            <option value="react">React</option>
            <option value="reactnative">React Native</option>
            <option value="flutter">Flutter</option>
          </select>
        </div>
        <div onChange={this.handleBtnGender}>
          <label htmlFor="gender">Gender</label>
          <br />
          <br />
          <label className="container">
            Female&nbsp;&nbsp;&nbsp;
            <input type="radio" name="radio" id="female" value="female"></input>
          </label>
          <label className="container">
            Male&nbsp;&nbsp;&nbsp;
            <input type="radio" name="radio" id="male" value="male"></input>
          </label>
        </div>
        <div>
          <br />
          <label htmlFor="checkedOne">Select Pizza Toppings :</label>
          <br />
          <br />
          <ul className="check-list">
            <li>
              <label>Capsicum</label>
              <input
                type="checkbox"
                id="checkedOne"
                value={this.state.checkedOne}
                onChange={this.handleChangeOne}
              />
            </li>
            <br />
            <li>
              <label>Onions</label>
              <input
                type="checkbox"
                id="handleChangeTwo"
                value={this.state.checkedTwo}
                onChange={this.handleChangeTwo}
              />
            </li>
          </ul>

          <br />
          <br />
        </div>
        <div>
          <label htmlFor="file">Choose file :</label>&nbsp;
          <input
            type="file"
            className="custom-file-input"
            id="file"
            value={this.state.file}
            onChange={this.handleFileChange}
          />
        </div>
        <div>
          <br />
          <label htmlFor="date">Birthday :</label>
          <br />
          <br />
          <input
            type="date"
            id="birthday"
            name="birthday"
            id="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />
        </div>
        <div>
          <br />
          <label htmlFor="bdaymonth">Birthday (month):</label>
          <br />
          <br />
          <input
            type="month"
            id="bdaymonth"
            name="bdaymonth"
            id="bdaymonth"
            value={this.state.bdaymonth}
            onChange={this.handleMonthChange}
          />
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default DemoForm
