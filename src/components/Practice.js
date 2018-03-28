import React from 'react'
import SubBtnGroup from './SubBtnGroup'

const Practice = ({ practiceVisibility }) => (
  <div>
    Practice container
    <div>
      {practiceVisibility ? <SubBtnGroup /> : null}
    </div>
</div>
)

export { Practice }
