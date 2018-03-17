import React from 'react';

// const BtnGroup = () => (
//   <ul>
//     <li onClick=>Add Section</li>
//   </ul>
// )
//
// export {BtnGroup};
export default class BtnGroup extends React.Component {
  constructor(props){
    super(props)
  }
  // renderSection() {
  //
  // }
  render() {
    console.log(this.props)
    return(
      <ul>
       <li>Add Section</li>
         </ul>
    )
  }
}
