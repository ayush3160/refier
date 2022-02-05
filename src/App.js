import Navbar from "./Navbar";
import Modal from "./Modal";
import Card from "./Card";
import { useState} from "react";

function App() {
  const [show,setShow] = useState(false)
  const [range, setRange] = useState(3);

  const handleShow = (a) => {
    if(a == 1){setShow(true);}
    if(a == 2){setShow(false);}
  }
  return (
    <div>
      <Navbar handleShow = {handleShow} />
      <div className="content">
        <div className="filter">
          <h3 style={{ textAlign: "left", padding: "3px" }}>Filter</h3>
          <h4 style={{ textAlign: "left", padding: "3px" }}>Category</h4>
          <input
            type={"text"}
            placeholder={`eg - Sales, Marketing    |`}
            style={{ border: "1px solid grey", height: "30px" }}
            onClick={() => {
              document.getElementById("input").classList.toggle("show1");
            }}
          />
          <div>
            <ul id="input" className="input">
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Hr</a>
              </li>
              <li>
                <a href="#">Finance</a>
              </li>
              <li>
                <a href="#">Tech</a>
              </li>
            </ul>
          </div>
          <h4 style={{ textAlign: "left", padding: "3px" }}>Location</h4>
          <input
            type={"text"}
            placeholder={`eg - Delhi, Mumbai    |`}
            style={{ border: "1px solid grey", height: "30px" }}
          />
          <div className="custom-slider">
            <label
              style={{ textAlign: "left", fontSize: "15px" }}
              className="label"
            >
              Work From Home
            </label>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="custom-slider">
            <label
              style={{ textAlign: "left", fontSize: "15px" }}
              className="label"
            >
              Only Internships
            </label>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="custom-slider">
            <label
              style={{ textAlign: "left", fontSize: "15px" }}
              className="label"
            >
              Salary
            </label>
            <label style={{ textAlign: "right", fontSize: "15px" }}>
              {range}L
            </label>
          </div>
          <input
            type={"range"}
            id="range"
            min={0}
            max={10}
            value={range}
            onChange={(e) => {
              setRange(e.target.value);
            }}
          />
        </div>
        <div className="mid">
        <Card />
        </div>
        <div className="form">
          <div style={{borderBottom : "1px solid grey"}} className="form-header">
            <p>Confused</p>
            <p>We Can Help You ?</p>
          </div>
          <div className="form-mid">
          <p>Full Name<span style={{color : "red"}}>*</span></p>
          <input type={"text"} placeholder="John Doe" />
          <p>Email<span style={{color : "red"}}>*</span></p>
          <input type={"text"} placeholder="Email" />
          <p>Mobile Number<span style={{color : "red"}}>*</span></p>
          <input type={"number"} placeholder="+91" />
          <button>Submit</button>  
          </div>  
        </div>
        <Modal show = {show} handleShow = {handleShow}/>
      </div>
    </div>
  );
}

export default App;
