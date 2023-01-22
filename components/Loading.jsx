import React from 'react'

function Loading(props) {
    const text = props?.text ? props.text : false;
  return (

        <div style={props?.style}>
			<div className="spinner spinner--4"></div>
            <span className="ml-3 uppercase font-bold text-xs">{text}</span>
		</div>
    // <div><Spinner name="ball-scale-multiple"/>{ text && text }</div>
  )
}

export default Loading