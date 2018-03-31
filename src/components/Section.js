import React, { Component } from 'react'
import SubBtnGroup from './SubBtnGroup'

class Section extends Component{
  constructor() {
    super()
    this.renderSection = this.renderSection.bind(this)
  }

  renderSection () {
    const { handleSecOnChange, removeSection, sections,
      addSubComponent, handleSubsecOnChange } = this.props

    return (
      sections.map((obj,i) => {
        let sectionName = `section[${i+1}]`
        return (
          <div key={i+1}>
            <button onClick={(e) => removeSection(e,i)}>Remove</button>
            <label>Section Name</label>
            <input type='text' name={sectionName} onChange={(e)=> handleSecOnChange(e,i)} />

            <label>Intro Video</label>
            <input type='text' name='introVideo'/>

            <label>Description</label>
            <input type='text' name='sectionDesc' onChange={(e) =>  handleSecOnChange(e,i)}/>

            <label>Color</label>
            <input type='text' name='color'/>

            <SubBtnGroup
            handleClick={addSubComponent}
            handleOnChange={handleSubsecOnChange}
            sections={sections}
            index={i}
          />
        </div>
        )
    }))
  }

  render() {
        return (
          <div>{this.renderSection()}</div>
        )
    }

}

export { Section }
