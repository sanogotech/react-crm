import React from 'react'

export default function SingleObjectDisplay(props) {

  let { elementSize, labelName, attrId, attrFor, value, attrDataName, style } = props;  

  return (
    <>
    {
      (value !== null) ? 
      <div className={`filter_col ${elementSize}`}>
        <div class="form-group">
          <label className="case_field_label" for={attrFor} >{labelName}</label><br/>
          <div class="account_field" id={attrId} data-name={attrDataName}>{value}</div>
        </div>
      </div> : ''
    }
    </>    
  )
}
