import { useEffect } from "react"
import { useState } from "react"
import firebase from "../utils/firebase"
import './form.styles.css'
export default function Form(){
    const [carInfo,setTitle] = useState({
        title:'',
        year:'',
        img:'',
        abs:false,
        electricWindow:false,
        luqi:false,
        bluetooth:false,
        alarm:false,
        parkingControl:false
    })
    const addToDB = () =>{
        if(carInfo.title && carInfo.year && carInfo.img){
        document.getElementById("addToDB").disabled=true;
        const dataRef = firebase.database().ref('cars') 
        const cars = {
            title:carInfo.title,
            year: carInfo.year,
            imgURL: carInfo.img,
            abs:carInfo.abs,
            electricWindow:carInfo.electricWindow,
            luqi:carInfo.luqi,
            bluetooth:carInfo.bluetooth,
            alarm:carInfo.alarm,
            parkingControl:carInfo.parkingControl
            
        }
            dataRef.push(cars,()=>{window.location.replace(window.location.origin + "/cars")});
    }else{
        alert("please fill all the gaps")
    }
    }
    return(
        <div className="form">
              <div className="nav-buttons">
  {/* window.location.replace({window.location.origin + "/cars/new"}) */}
  <button className="button2" onClick={()=>(window.location.replace(window.location.origin + "/cars/"))}>Car List</button>
  <button className="button2" onClick={()=>(window.location.replace(window.location.origin))}>Home</button>
  </div>
            <select id="cars" name="cars" onChange={(e)=>{setTitle({...carInfo,title:e.target.value})}}>
                <option value="" disabled selected>Select Car Model</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Toyota">Toyota</option>
                <option value="Mitsubishi">Mitsubishi</option>
            </select>
            <input placeholder="year" onChange={(e)=>{setTitle({...carInfo,year:e.target.value})}}></input>
            <input placeholder="Image URL" onChange={(e)=>{setTitle({...carInfo,img:e.target.value})}}></input>
            
                <label>ABS<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,abs:!carInfo.abs})}}/></label>
            
                <label>ელ. ფანჯრები<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,electricWindow:!carInfo.electricWindow})}}/></label>
            
                <label>ლუქი<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,luqi:!carInfo.luqi})}}/></label>
            
                <label>Bluetooth<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,bluetooth:!carInfo.bluetooth})}}/></label>
            
                <label>სიგნალიზაცია<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,alarm:!carInfo.alarm})}}/></label>
            
                <label>პარკინგ კონტროლი<input type="checkbox" onChange={(e)=>{setTitle({...carInfo,parkingControl:!carInfo.parkingControl})}}/></label>
            <button className="button2" id="addToDB" onClick={addToDB}>submit</button>

        </div>
    )
}