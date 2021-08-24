import { useEffect, useState } from "react";
import firebase from "../../utils/firebase";
import CarList from "../../components/carList.component";
import Loading from "../../components/loading.component";
import './cars.styles.css'
export default function Cars(){
  const [ListOfCars,setList] = useState()
  useEffect(()=>{
    const dataRef = firebase.database().ref('cars') 
    dataRef.on("value", (carL)=>{
      const car =carL.val();
      const carList = [];
      // console.log(car)

      for(let id in car){
        carList.push({id,...car[id]})
      }

      setList(carList)
    // console.log(carList)
    })
  },[]);

  return(
  <div>
  <div className="nav-buttons">
  {/* window.location.replace({window.location.origin + "/cars/new"}) */}
  <button className="button1" onClick={()=>(window.location.replace(window.location.origin + "/cars/new"))}>Add New Car</button>
  <button className="button1" onClick={()=>(window.location.replace(window.location.origin))}>Home</button>
  </div>
  
<div className="cars">
  {/* <Form/> */}
  {ListOfCars ? 
  ListOfCars.map((data)=>(<CarList  key={data.id} title={data.title} id={data.id} imgURL={data.imgURL} year={data.year} abs={data} electricWindow={data.electricWindow} luqi={data.luqi} bluetooth={data.bluetooth} alarm={data.alarm} parkingControl={data.parkingControl} />)) : <Loading/> }
</div>
</div>
  )
}
  

