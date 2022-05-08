import { useEffect, useState } from 'react';
import './index.css';
import { createContext } from 'react';
const seatColors = {
    empty: "white",
    selected: "#006600",
    reserved: "lightgray",
    locked: "lightgray"
}


const Seat = (props) => {
    const [seatStatus, setStatus] = useState(props.seat);
    const [seatPrice, setPrice] = useState(props.price);
    
    const [ state, setState ] = useState(false)
    const [ color, setColors ] = useState()
    const [arr,setArr]=useState();
   
    console.log('sdfhjah',props.seat)
    const seatStyle = {
        backgroundColor: seatColors[seatStatus]
    };

    const onSeatSelection = () => {
        props.onSeatClick();
        if (seatStatus === "empty") {
            setStatus("selected");
          
        } else if (seatStatus === "selected") {
            setStatus("empty");
            
        }
        setState(true)
         }

         useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(seatStatus))
          
        },[])
         useEffect(()=>{
             const colorStyle1=props.test?'setColor1':'seat1'
             const colorStyle = state?"setColor": props.booked ?"booked":"seat"
            setColors(colorStyle)
            setArr(seatStatus)
            localStorage.setItem("seatStatus",JSON.stringify(arr)) ;
            localStorage.setItem("seatPrice",JSON.stringify(seatPrice)) ;
             console.log(arr)
         },[state,seatStatus])
         console.log(props);

    return (
        <div className={color} style={seatStyle} onClick={onSeatSelection} />
    )
};

export default Seat;