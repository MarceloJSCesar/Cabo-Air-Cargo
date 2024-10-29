import React from 'react'
import "./styles.css"



export default function VideoPlayer({src, className, title, allow}) {
  return (
    <div className="wrapper">
        <iframe
            src={src}
            className={className}
            title={title}
            allow={allow}
        ></iframe>
    </div>
  )
}