import React, { Component } from 'react'
import update from 'immutability-helper'

import {MetaData, Section, Practice, BtnGroup } from './components/index'
// import BtnGroup from './components/BtnGroup'
// import handleInputChange from './helpers/helper.js'

export default class Main extends Component{
  constructor() {
    super();
    this.state = {
        sectionVisibility: false,
        // practiceVisibility: false,
        // subSecVisibility: false,
        course: {
          sections: [
            {
              // sectionName:'',
              // sectionDesc:'',
              // color:'',
              // subArray:[
              //   {
              //     subName: '',
              //     subDesc: ''
              //   }
              // ],
              // dowloadArray:[],
              // testArray:[]
            }
          ],
          practices:[]
        }
  }
}

  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState({...this.state.course, [name]: value})
    // console.log(i)
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
      case 'subsection':
      this.setState({
        subSecVisibility: !this.state.subSecVisibility
        })
    }
  }
  handleSecOnChange =(i) => (event) => {
   const { name, value } = event.target;
   const { sections } = this.state.course
  //  console.log(i)
  //  console.log(`name ${name} value${value} i${si}`)
    const newSection = sections.map((section, si) => {
    if(i !== si) {
      let newSec = update(section,{$merge:{[name]:value}})
      return newSec
    } else {
      return {...section, [name]:value}
    }
      this.setState(prevState => ({
        course: {
          ...prevState.course,
          sections: [
            newSection
          ]
        }
      }))
  })
  }

  handleSubsecOnChange = (event) => {
    const { name, value } = event.target
    const section = this.state.section
    // subArray.map(arr => (
    //   let newSub = update(arr, {$merge: {[name]: value }})
    //   this.setState({
    //     subArray: newSub
    //   })
    // ))
    this.setState({ ...this.state.section })
  }

  addSection = (e) => {
    e.preventDefault();
    // const newObj =
    //   {
    //     sectionName:'',
    //     sectionDesc:'',
    //     color:'',
    //     subArray:[
    //       {
    //         subName: '',
    //         subDesc: ''
    //       }
    //     ],
    //     dowloadArray:[],
    //     testArray:[]
    //   }

    let newSection = update(this.state.course.sections, {$push: [{}] })
    this.setState((prevState) => {
      return {
        course: {
          ...prevState.course,
          sections:newSection
        }
      }
    })
  }
  removeSection = (i, e) => {
    e.preventDefault();
    let course = [...this.state.course]
    course.sections.splice(i,1);
    this.setState({ course });
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
            handleClick = {this.handleClick}
          />
        </div>

        <div>
          {this.state.sectionVisibility ?
            <Section
              handleSecOnChange={this.handleSecOnChange}
              handleSubsecOnChange={this.handleSubsecOnChange}
              subSecVisibility={this.state.subSecVisibility}
              handleClick={this.handleClick}
              addSection={this.addSection}
              sections={this.state. course.sections}
              removeSection={this.removeSection}
             /> :
            null
         }
         {this.state.practiceVisibility ?
           <Practice
           practiceVisibility={this.state.practiceVisibility}/> :
           null
        }
        </div>
      <button>Submit</button>
    </form>
  )
  }
}
