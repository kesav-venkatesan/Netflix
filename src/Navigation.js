import "./Navigation.css";
import { useState, useEffect } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="ButtonDiv" style={{border: `2px solid ${props.border}`,background: props.bg,padding:"4px 8px", cursor:"pointer"} }onClick={props.onClick}>
      <h6
        style={{
          
          // padding: "6px 8px",
          color: props.color,
          
        }}
      > 
      {props.icon && <span style={{fontSize:"14px"}}>{props.icon}</span>}
        {" "+props.text}
      </h6>
    </div>
  );
};

const Nav = () => {
  const [isScroll, setScroll] = useState(false);
  const Navigation = useNavigate();
  function moveNextPage(){
    Navigation("/signin")
  }
  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY > 20); 
    }

   
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <div className={`Navigation ${isScroll ? "scrolled" : ""}`}>
      <div className="fancy-heading">
        <span style={{ fontSize: "36px" }}>N</span>
        <span style={{ marginTop: "1px", fontSize: "34px" }}>E</span>
        <span style={{ marginTop: "1px", fontSize: "32px" }}>T</span>
        <span style={{ marginTop: "1px", fontSize: "32px" }}>F</span>
        <span style={{ marginTop: "1px", fontSize: "32px" }}>L</span>
        <span style={{ marginTop: "1px", fontSize: "34px" }}>I</span>
        <span style={{ fontSize: "36px" }}>X</span>
      </div>
      <div className="NavEnd">
        <Button text="English" border="white" color="white" bg="transparent" icon={<i class="bi bi-globe-americas"></i>}  />
        <Button text="Sign In " border="red" color="white" bg="red" onClick={moveNextPage} />
      </div>
      
    </div>
  );
};

export default Nav;
