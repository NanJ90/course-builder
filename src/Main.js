import React, { Component } from 'react'
import update from 'immutability-helper'

import {MetaData, Section, Practice, BtnGroup } from './components/index'
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
        // visibility: [
        //   {section: false},
        //   {practice: false},
        //   {subSec: false},
        //   {download: false}
        // ],
        sectionVisilibity: false,
        practiceVisilibity: false,
        section: {},
        practice:{}
    }
  }
  handleOnChange = (event) => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked: target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  // createField = (e, idx, propertyName) => {
  //   let visibility = this.state.visibility
  //   visibility[idx].propertyName = true
  //   this.setState({
  //     visibility: visibility
  //   })
  // }
  // createSection = () => {
  //   this.setState({
  //     sectionVisilibity: !this.state.sectionVisilibity
  //   })
  // }
  //
  // createPractice = () => {
  //   this.setState({
  //     practiceVisilibity: !this.state.practiceVisilibity
  //   })
  // }
  handleClick = (ev) => {
    const type = ev.target.dataset.clickType
    switch (type) {
      case 'section':
      this.setState({
          sectionVisilibity: !this.state.sectionVisilibity
        })
        break;
      case 'practice':
      this.setState({
        practiceVisilibity: !this.state.practiceVisilibity
      })
        break;
      default:

    }
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

  createSubSec = () => {
    const { sectionVisilibity } = this.state
    if(!sectionVisilibity) alert("You have to create Section or Practice first!")
    return this.setState({
      subSecVisibility: sectionVisilibity ? true : false
    })
  }

  createDownload = () => {
    const { sectionVisilibity } = this.state
    if(!sectionVisilibity) alert("You have to create Section or Practice first!")
    return this.setState({
      downloadVisilibity: sectionVisilibity ? true : false
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
          <BtnGroup
            // createField={this.createField}
            // visibility={this.state.visibility}
            // createSection={this.createSection}
            // createPractice={this.createPractice}
            // createSubSec={this.createSubSec}
            // createDownload={this.createDownload}
            handleClick = {this.handleClick}
          />
        </div>

        <div>
          {this.state.sectionVisilibity ?
            <Section
              handleOnChange={this.handleSecOnChange}
              subSecVisibility={this.state.subSecVisibility}
             /> :
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
