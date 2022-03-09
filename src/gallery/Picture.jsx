import React from "react";

const Picture = ({ source, name, about, page }) => {
  // const aboutArr= about.split(" ").join(" ")
  // const aboutFunc = () => {
  //   for(let i=0;i<10;i++){ 
  //     return (aboutArr[i])
  //   }
  // }
  // aboutFunc()
  // console.log(`${about.slice(0,200)} ...`)
  console.log(about&&about.substr(0,1))
  return (
    <div className="picture">
      <img src={source} alt="" />
      <div className="card-back">
        <div className="info">
          <p>Name: {name}</p>
          <div>
            <p>
              About:{about?about.substr(0,500):" Unknown background"} <br /> 
              <a href={page} style={{color:"blue"}}>Read More</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
