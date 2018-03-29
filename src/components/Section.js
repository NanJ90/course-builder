import React, { Component } from 'react'
import SubBtnGroup from './SubBtnGroup'

//   /* <div>
//     {sectionVisibility ?
//       <SubBtnGroup
//         handleOnChange= {handleSubsecOnChange}
//         handleClick={handleClick}
//         subSecVisibility= {subSecVisibility}
//       /> : null}
//   </div> */
//   )}

// )

class Section extends Component{
  // renderlist() {
  //
  // }
  render() {
    // console.log(this.props);
    const {handleSecOnChange, sectionVisibility, handleSubsecOnChange, subSecVisibility, removeSection, addSection, sections} = this.props
    if(sections.length >= 0 ) {
      // console.log(sections.map((el,i)=> {
      //   return (i)
      // }))
        return (
          sections.map((el,i) => {
            // let secName = `sectionName[${i}]`
            // let sectionDesc = 'sectionDesc['+ i + ']'
            return(
              <div key={i}>
                <button onClick={(e,i) => removeSection(e,i)}>Remove</button>
                <label>Section Name</label>
                <input type='text' name='secName' onChange={ handleSecOnChange(i)} />

                <label>Intro Video</label>
                <input type='text' name='introVideo'/>

                <label>Description</label>
                <input type='text' name='sectionDesc' onChange={ handleSecOnChange(i)}/>

                <label>Color</label>
                <input type='text' name='color' onChange={ handleSecOnChange(i)}/>
                <button onClick={addSection}>Add Section</button>
            </div>
            )
          }
          ))}
      return null;
  }
}

export { Section }
