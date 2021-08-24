import firebase from "../utils/firebase";
import { Route } from "react-router";
import { Link } from "react-router-dom";
import './carList.styles.css'
export default function CarList({id,title,imgURL,year,abs,electricWindow,luqi,bluetooth,alarm,parkingControl}) {
    const deleteCar = () => {
        const dataRef = firebase.database().ref('cars').child(id)
        dataRef.remove();
    }
    return(
<div className="car-section">
    <div className="car-description">
        <img src={imgURL} alt="car-image" className="car-image"></img>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <div className="car-checkboxes">
      <label>ABS</label><input type="checkbox" id="abs" checked={abs}  readOnly/>  
      <label>ელ. ფანჯრები</label><input  type="checkbox" id="electricWindow" checked={electricWindow}  readOnly/>
                
      <label>ლუქი</label><input type="checkbox"  id="luqi" checked={luqi}  readOnly/>
                
      <label>Bluetooth</label><input type="checkbox" id="bluetooth" checked={bluetooth} readOnly/>
                
      <label>სიგნალიზაცია</label><input type="checkbox" id="alarm" checked={alarm} readOnly/>
                
      <label>პარკინგ კონტროლი</label><input type="checkbox" id="parkingControl"  checked={parkingControl} readOnly/>
              
        </div>
        <div className="buttons">
            <button onClick={deleteCar} className="button">delete</button>
            
            <button  className="button" onClick={()=>(window.location.replace(window.location.origin + "/cars/edit/" +id))}>edit</button>
        </div>
    </div>
    
</div>
    )
}
