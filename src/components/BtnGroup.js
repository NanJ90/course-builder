import React from 'react';
// import { Section } from './index';
// createSection, createPractice, createSubSec, createDownload, createTest

const BtnGroup = ({ createSection, createPractice, createSubSec, createDownload, createTest }) => (
  <ul>
    {/* {visibility.map((item, idx) => {
        <li key={idx} onClick={(e) => this.createField(e,idx,'section')}>Section</li>
    })} */}
    <li onClick={createSection}>Section</li>
    <li onClick={createPractice}>Practice</li>
    <li onClick={createSubSec}>Subsection</li>
    <li onClick={createDownload}>Download</li>
    <li onClick={createTest}>Test</li>
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
