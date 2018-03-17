import React, { Component } from 'react'
import update from 'immutability-helper'

import {MetaData, Section, Practice } from './components/index'
// import BtnGroup from './components/BtnGroup'
// import handleInputChange from './helpers/helper.js'

export default class Main extends Component{
  constructor() {
    super();
    this.state = {
        courseName:'',
        testAbbr:'',
        metaIntroVideo:'',
        salesPage:'',
        courseDesc:'',
        sectionVisilibity:false,
        practiceVisilibity:false,
        section: {

        },
        practice:{}
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleSecOnChange = this.handleSecOnChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.createSection = this.createSection.bind(this)
    this.createPractice = this.createPractice.bind(this)
  }
  handleOnChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked: target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  createSection = (evt) => {
    this.setState({
      sectionVisilibity: !this.state.sectionVisilibity
    })
  }

  createPractice = (evt) => {
    this.setState({
      practiceVisilibity: !this.state.practiceVisilibity
    })
  }

  handleSecOnChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked: target.value
    const name = target.name
    let newSec = update(this.state.section, {$merge: {[name]:value}})
    this.setState({
      section: newSec
    })
  }
  handleSubmit = (evt) => {
    alert(JSON.stringify(this.state))
  }

  render() {
    // console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
           <MetaData handleOnChange={this.handleOnChange} />
        </div>

        <div>
          <ul>
            <li onClick={this.createSection}>Section</li>
            <li onClick={this.createPractice}>Practice</li>
          </ul>
        </div>

        <div>
          {this.state.sectionVisilibity ?
            <Section handleOnChange={this.handleSecOnChange} /> :
            null
         }
         {this.state.practiceVisilibity ?
           <Practice /> :
           null
        }
        </div>
      <button>Submit</button>
    </form>
  )
  }
}
