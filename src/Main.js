import React, { Component } from 'react'
import update from 'immutability-helper'

import {MetaData, Section, Practice, BtnGroup, SubSection } from './components/index'
import SubBtnGroup from './components/SubBtnGroup'
// import BtnGroup from './components/BtnGroup'
// import handleInputChange from './helpers/helper.js'

export default class Main extends Component{
  constructor() {
    super();
    this.state = {
        sectionVisibility: false,
        // practiceVisibility: false,
        // subSecVisibility: false,
          sections: [{}],
          practices:[

          ]

  }
}

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({...this.state, [name]: value})
  }

  handleClick = (ev) => {
    const type = ev.target.dataset.clickType
    switch (type) {
      case 'section':
        this.setState({
          sectionVisibility: !this.state.sectionVisibility
        })
        break;
      case 'practice':
        this.setState({
          practiceVisibility: !this.state.practiceVisibility
        })
        break;
        default:
    }
  }

  handleSecOnChange = (event, i) => {
   const { name, value } = event.target
   const sections = this.state.sections
   const newSection = sections.map((section,si) => {
     //enter new content
     if(si === i) return {...section, [name]: value}
     return section
   })
     this.setState({
       ...this.state,
       sections: newSection
     })
  }

  handleSubsecOnChange = (event) => {
    const { name, value } = event.target
    // const section = this.state.section
    // subArray.map(arr => (
    //   let newSub = update(arr, {$merge: {[name]: value }})
    //   this.setState({
    //     subArray: newSub
    //   })
    // ))
    // this.setState({ ...this.state.section })
  }

  addSection = (e) => {
    e.preventDefault()
    this.setState((prevState) => {
      return {
          ...prevState,
          sections:this.state.sections.concat({})
        }

    })
  }

  addSubComponent = (i) => (e) => {
    e.preventDefault()
    console.log(i)
    const sections = this.state.sections
    //single section object: section[i]
    let newSecObj = {...sections[i],subArray:[{}]}
    console.log(newSecObj)
    this.setState({
        sections:[
          ...sections.slice(0,i),
          Object.assign({}, sections[i], newSecObj),
          ...sections.slice(i+1)
        ]
    })

}
  removeSection = (e,i) => {
    e.preventDefault()
    let newSection = this.state.sections
    if(i === 0) return
    newSection.splice(i,1)
    this.setState((prevState) => {
      return {
          ...prevState,
          sections:newSection
        }
    })
  }

  handleSubmit = (evt) => {
    alert(JSON.stringify(this.state))
  }

  render() {
    // console.log(this.state.sections)
    // console.log(this.state.course.sections.length)
    // console.log(this.state.course.practices.length)
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
           <MetaData handleOnChange={this.handleOnChange} />
        </div>

        <div>
          <BtnGroup
            handleClick = {this.handleClick}
          />
        </div>

        <div>
          {this.state.sectionVisibility ?
            <div style= {{ border: '2px solid black'}}>
              <Section
                handleSecOnChange={this.handleSecOnChange}
                addSubComponent={this.addSubComponent}
                handleClick={this.handleClick}
                sections={this.state.sections}
                removeSection={this.removeSection}
                handleSecOnChange={this.handleSecOnChange}
               />
               {/* {this.state.subSecVisibility ?
                 <SubSection
                   handleOnChange={this.handleSubsecOnChange}
                   addSubSec={this.addSubSec}
                   sections={this.state.course.sections}
                 />
                 :
                null} */}
                <button onClick={this.addSection}>Add Section</button>
            </div>
             :
            null
          }
         <div>
         {this.state.practiceVisibility ?
           <Practice
           practiceVisibility={this.state.practiceVisibility}/> :
           null
        }
        {/* <SubBtnGroup /> */}
        </div>
        </div>
      <button>Submit</button>
    </form>
  )
  }
}
