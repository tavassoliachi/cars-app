import { objectMethod, objectTypeAnnotation } from "@babel/types";
import { Children, useEffect, useState } from "react";
import Cars from "../cars/cars.component";
import firebase from "../../utils/firebase";
import './edit-car.styles.css'
import Loading from "../../components/loading.component";

const EditCar = () =>{
        const [obj , setObj] = useState({
            title:"",
            year:"",
            imgURL:"",
            abs:false,
            electricWindow:false,
            luqi:false,
            bluetooth:false,
            alarm:false,
            parkingControl:false,
        });

        const id = window.location.pathname.substring(11)
    useEffect(()=>{
        const dataRef = firebase.database().ref('cars') 
        dataRef.on("value", (carL)=>{
            
        const car =carL.val();
        setObj(car[id]);
        }, )  },[ ]);
        if(obj.title){
            document.getElementById("abs").checked = obj.abs
            document.getElementById("electricWindow").checked = obj.electricWindow
            document.getElementById("luqi").checked = obj.luqi
            document.getElementById("bluetooth").checked = obj.bluetooth
            document.getElementById("alarm").checked = obj.alarm
            document.getElementById("parkingControl").checked = obj.parkingControl
        }

        const addToDB = () =>{
        
            const dataRef = firebase.database().ref('cars') 


            const cars = {
                title:obj.title,
                year: obj.year,
                imgURL: obj.imgURL,
                abs:obj.abs,
                electricWindow:obj.electricWindow,
                luqi:obj.luqi,
                bluetooth:obj.bluetooth,
                alarm:obj.alarm,
                parkingControl:obj.parkingControl

            }
            dataRef.push(cars)
            dataRef.child(id).remove();
            window.location.replace(window.location.origin + "/cars");
        }

    return(
        <div className="edit-section">

  <div className='edit-car'>
  <div className="nav-buttons">
  {/* window.location.replace({window.location.origin + "/cars/new"}) */}
  <button className="button1" onClick={()=>(window.location.replace(window.location.origin + "/cars/"))}>Car List</button>
  <button className="button1" onClick={()=>(window.location.replace(window.location.origin))}>Home</button>
  </div>
      {obj.title ? "" : <Loading/>}
      <span>id</span><input value={id}></input>
      <span>Make</span>
      <select id="cars" name="cars" onChange={(g)=>setObj({...obj,title:g.target.value})} value={obj.title}>
                <option value="" disabled selected>Select Car Model</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Toyota">Toyota</option>
                <option value="Mitsubishi">Mitsubishi</option>
            </select>
      {/* <input type ="txt" onChange={(e)=>setObj({title:e.target.value, year:obj.year})} value={obj.title}></input> */}
      <span>year</span><input onChange={(g)=>setObj({...obj,year:g.target.value})} value={obj.year}></input>
      <span>img URL</span><input onChange={(g)=>setObj({...obj,imgURL:g.target.value})} value={obj.imgURL}></input>
      
      <label>ABS</label><input type="checkbox" id="abs"   onChange={()=>{setObj({...obj,abs:!obj.abs  })}}/>  
      <label>ელ. ფანჯრები</label><input  type="checkbox" id="electricWindow"  onChange={()=>{setObj({...obj,electricWindow:!obj.electricWindow  })}}/>
                
      <label>ლუქი</label><input type="checkbox"  id="luqi" onChange={()=>{setObj({...obj,luqi:!obj.luqi  })}}/>
                
      <label>Bluetooth</label><input type="checkbox" id="bluetooth"  onChange={()=>{setObj({...obj,bluetooth:!obj.bluetooth  })}}/>
                
      <label>სიგნალიზაცია</label><input type="checkbox" id="alarm" onChange={()=>{setObj({...obj,alarm:!obj.alarm  })}}/>
                
      <label>პარკინგ კონტროლი</label><input type="checkbox" id="parkingControl"  onChange={()=>{setObj({...obj,parkingControl:!obj.parkingControl  })}}/>
                
      <button className="button1" id="edit-button" onClick={addToDB}>edit</button>
 </div>
 </div>    )
}
  


export default EditCar;