import React from 'react';
import { SubSection, Download } from './index'

const Section = ({ handleOnChange, subSecVisibility, downloadVisilibity }) => (
  <div>
    <div>
    <label>Section Name</label>
    <input type='text' name='sectionName' onChange={(e,name) => handleOnChange(e, name)} />

    <label>Intro Video</label>
    <input type='text' name='introVideo'/>

    <label>Description</label>
    <input type='text' name='description' onChange={(e,name) => handleOnChange(e, name)}/>

    <label>Color</label>
    <input type='text' name='color' onChange={(e,name) => handleOnChange(e, name)}/>
  </div>
  <div>
    {subSecVisibility ? <SubSection /> : null}
    {downloadVisilibity ? <Download /> : null}
  </div>
</div>
)

export { Section }
