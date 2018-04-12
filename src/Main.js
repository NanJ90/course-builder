import React, { Component } from 'react'
// import update from 'immutability-helper'

import {MetaData, Section, Practice, BtnGroup } from './components/index'
// import SubBtnGroup from './components/SubBtnGroup'
// import BtnGroup from './components/BtnGroup'
// import handleInputChange from './helpers/helper.js'

export default class Main extends Component{
  constructor() {
    super();
    this.state = {
        sectionVisibility: false,
        practiceVisibility: false,
          sections: [{}],
          practices:[{}]
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
        break
      case 'practice':
        this.setState({
          practiceVisibility: !this.state.practiceVisibility
        })
        break
        default:
    }
  }

  handleSecOnChange = (event, i) => {
   const { name, value } = event.target
   const sections = this.state.sections
   const newSection = sections.map((section,si) => {
     if(si === i) return {...section, [name]: value}
     return section
   })
     this.setState({
       ...this.state,
       sections: newSection
     })
  }

  handleSubsecOnChange = (event,si, i) => {
    // console.log(this.state.sections)
    const { name, value } = event.target
    const subArray = this.state.sections[i].subArray
    // // console.log(this.state.sections[i])
    if (subArray !== undefined) {
      // replaceing subArray[i] as newSubArray
    const newSections = this.state.sections.map((sec, _idx) => {
      var newSubArray
      var newSec
      if(_idx === i) {
         newSubArray = subArray.map((sub, index) => {
           if(index === si) return {...sub, [name]: value}
           return sub
         })
         newSec = {...this.state.sections[i], subArray: newSubArray}
        return newSec
      }
    return { ...sec };
    })
      this.setState({
        ...this.state,
        sections: newSections
        })
    }
    return null
  }

  addSectionAndPractice = (e) => {
    e.preventDefault()
    const type = e.target.dataset.clickType
    switch(type) {
      case 'sections':
      this.setState((prevState) => {
        return {
            ...prevState,
            sections:this.state.sections.concat({})
          }
      })
      break
      case 'practices':
      this.setState((prevState) => {
        return {
            ...prevState,
            practices:this.state.practice.concat({})
          }
      })
      break
      default:
    }
  }

  addSubComponent = (i) => (e) => {
    e.preventDefault()
    const sections = this.state.sections
      let newSecObj;
      if(!sections[i].subArray) {
        newSecObj = {...sections[i],subArray:[{}]}
        this.setState({
            ...this.state,
            sections:[
              ...sections.slice(0,i),
              Object.assign({}, sections[i], newSecObj),
              ...sections.slice(i+1)
            ]
        })
      } else {
        const newSubArray = sections[i].subArray.concat({})
        newSecObj= {
          ...sections[i],
          subArray:newSubArray
        }
        this.setState({
            ...this.state,
            sections:[
              ...sections.slice(0,i),
              Object.assign({}, sections[i], newSecObj),
              ...sections.slice(i+1)
            ]
        })
      }
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

  removeSubComponent = (e, si, i) => {
    e.preventDefault()
    const sections = this.state.sections
    let newSubArray= sections[i].subArray.filter((el, index) => si !== index)
    const newSecObj = {...this.state.sections[i], subArray: newSubArray}
    this.setState({
      ...this.state,
      sections:[
        ...sections.slice(0,i),
        Object.assign({}, sections[i], newSecObj),
        ...sections.slice(i+1)
      ]
     })
  }

  handleSubmit = (evt) => {
    alert(JSON.stringify(this.state))
  }

  render() {
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
                handleOnChange={this.handleSubsecOnChange}
                removeSubComponent={this.removeSubComponent}
               />
                <button data-click-type='sections' onClick={(e)=>this.addSectionAndPractice(e)}>Add Section</button>
            </div>
             :
            null
          }
           <div>
           {this.state.practiceVisibility ?
             <div>
             <Practice
               addSubComponent={this.addSubComponent}
               handleClick={this.handleClick}
               handleOnChange={this.handleSubsecOnChange}
               removeSubComponent={this.removeSubComponent}
             />
             <button data-click-type='practices' onClick={(e)=>this.addSectionAndPractice(e)}>Add Practice</button>
             </div>
             :
             null
          }
          </div>
        </div>
      <button>Submit</button>
    </form>
  )
  }
}
