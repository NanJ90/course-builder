import React from 'react';
// import { Row, Icon, Col } from 'react-materialize';
// import Section from './Section';

const MetaData = ({ handleOnChange }) => (
    <div>
        <label>
          Course Name:
          <input type='text' name='courseName' onChange={(e,name) => handleOnChange(e, name)}/>
        </label>
        <label>
          Test Abbreviation:
          <input type="text" name='testAbbr' onChange={(e,name) => handleOnChange(e, name)}/>
        </label>
        <label>
          Intro Video:
        </label>
        <label>
          Sales Page:
          <input type='text' name='salesPage' onChange={(e,name) => handleOnChange(e, name)}/>
        </label>
        <label>
          Course Description:
          <textarea type='text' name='courseDesc' onChange={(e,name) => handleOnChange(e, name)}/>
        </label>
    {/* <Col s={6}>
      <a onClick={this.handleClick.bind(this)} showElement={this.showElement === true}>section</a>
        { this.state.showElement
              ?
              <div> <Section /></div>
              :
              null
            }
      <a
        onClick={this.handleClick.bind(this)}
        showElement={this.showElement === true}>downloads</a>
      { this.state.showElement
            ?
            <div>dowlowd</div>
            :
            null
          }

    </Col> */}
  </div>
)
  //   this.state = {
  //     showElement: false,
  //     name: '',
  //     subsection: [
  //         {
  //           subname: ''
  //         }
  //       ]
  //   };
  // }
  // handleClick() {
  //   // console.log("clicked");
  //   this.setState({ showElement: !this.state.showElement });

  // handleOnChange(event){
  //   const target = event.target
  //   const value = target.type === 'checkbox' ? target.checked: target.value
  //   const name = target.name
  //   this.props.handleInputChange(value)
  // }

export {MetaData};
