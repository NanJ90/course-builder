import React from 'react';
// import { Section } from './index';
// createSection, createPractice, createSubSec, createDownload, createTest

const BtnGroup = ({ handleClick }) => (
  <ul>
    {/* {visibility.map((item, idx) => {
        <li key={idx} onClick={(e) => this.createField(e,idx,'section')}>Section</li>
    })} */}
    <li data-click-type='section' onClick={(e) => handleClick(e)}>Section</li>
    <li data-click-type='practice' onClick={handleClick}>Practice</li>
    {/* <li data-click-type= onClick={handleClick}>Subsection</li>
    <li data-click-type= onClick={handleClick}>Download</li>
    <li data-click-type= onClick={handleClick}>Test</li> */}
  </ul>
)

export {BtnGroup};

// export default class BtnGroup extends React.Component {
//   constructor(props){
//     super(props)
//     this.state={
//       showSection: false
//     }
//     this.renderSection = this.renderSection.bind(this)
//   }
//   renderSection() {
//     const section = this.props.section
//     if(section === null) {
//       return
// <Section />
//     }
//     return(
//       {this.props.section}
//     )
//   }
//   }
//   render() {
//     return(
//       <ul>
//         {this.renderSection}
//       </ul>
//     )
// }
