import React from 'react'
import "./Media.css"
import Media from "./Media";
import Data from "./Data";
const MediaCoverage = () => {
    function ncard(val){
        return (
          <Media
            imgsrc={val.imgsrc}
          />
        );
      }
  return (
    <>
       <div className="head">
    <h1>Media Coverage</h1></div>
    <div className="outer">
    {Data.map
(ncard)}</div>
    </>
  )
}

export default MediaCoverage
