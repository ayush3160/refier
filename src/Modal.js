import React from "react";

export default function Modal(props) {
  if (props.show == false) {
    return <></>;
  } else {
    return (
      <div
        className="modal"
        onClick={() => {
          props.handleShow(2);
        }}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <div style={{display : "inline-block",width : "370px"}}>
            <h2 className="modal-title">Login</h2>
            <button
              className="close"  
              onClick={() => {
                props.handleShow(2);
              }}
            >
              X
            </button>
            </div>
            <button className="signin">Sign in with Google</button>
            </div>
          <div className="modal-body">
            <p>
              Email<span style={{ color: "red" }}>*</span>
            </p>
            <input type={"text"} placeholder="Email" />
            <p>
              Password<span style={{ color: "red" }}>*</span>
            </p>
            <input type={"text"} placeholder="Password" />
            <br />
            <a href="#" style={{ color: "green" }}>
              Forgot Password ?
            </a>
          </div>
          <div className="modal-footer">
            <button className="button" onClick={() => {alert("Successfully Loged In"); props.handleShow(2);}}>Login</button>
          </div>
        </div>
      </div>
    );
  }
}
