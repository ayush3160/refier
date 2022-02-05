import React from "react";
import { useState, useEffect } from "react";

export default function Card(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return(
        data.map((value) => {
            return (
              <div className="card">
                <div className="card-header">
                  <h3>{value.title}</h3>
                  <h4>{value.company}</h4>
                </div>
                <div style={{display : "inline-block",width : "100%"}}>
                  <p style={{paddingLeft : "10px",marginTop : "10px",width : "200px",float : "left"}}>{value.location}</p>
                  <p style={{paddingRight : "10px",textAlign : "right",float : "right",marginTop : "10px"}}>{value.experience}</p>
                </div>
                <p style={{paddingLeft : "10px"}}>{value.about}</p>
                <div style={{display : "inline-block",width : "100%"}}>
                  <div className="tag">{value.tag1}</div>
                  <div className="tag">{value.tag2}</div>
                  <button className="apply">Apply Now</button>
                </div>
              </div>
            );
          })
  )
}
