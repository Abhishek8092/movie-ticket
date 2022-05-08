import React, { useEffect, useState  } from 'react';
import { connect } from 'react-redux';
import { createContext } from 'react';
import { withRouter, useHistory } from 'react-router-dom'

import './index.css';

import Header from '../Header';
import Seat from '../Seat';
import { fetchAvailabilities, setSelectedSeats, bookSelectedSeats } from './actions';
import Icon from '@ant-design/icons/lib/components/AntdIcon';

export const Context=createContext();
function SeatSelection({ allSeats, loading, apiError, fetchAvailabilities, setSelectedSeats, totalCost, bookSelectedSeats }) {
    const [test,setTest]=useState();
    const [chair, setChair] = useState([
        {
        seatName:"A1",
        prise:200,
        key:false
    },
    {
        seatName:"A2",
        prise:200,
        key:false
    },
    {
        seatName:"A3",
        prise:200,
        key:false
    },
    {
        seatName:"A4",
        prise:200,
        key:false
    },{
        seatName:"A5",
        prise:200,
        key:false
    },
    {
        seatName:"A6",
        prise:200,
        key:false
    },
    {
        seatName:"A7",
        prise:200,
        key:false
    },
    {
        seatName:"A8",
        prise:200,
        key:false
    },{
        seatName:"A9",
        prise:200,
        key:false
    },
    {
        seatName:"B1",
        prise:200,
        key:false
    },
    {
        seatName:"B2",
        prise:200,
        key:false
    },
    {
        seatName:"B3",
        prise:200,
        key:false
    },{
        seatName:"B4",
        prise:200,
        key:false
    },
    {
        seatName:"B5",
        prise:200,
        key:false
    },
    {
        seatName:"B6",
        prise:200,
        key:false
    },
    {
        seatName:"B7",
        prise:200,
        key:false
    },{
        seatName:"B8",
        prise:200,
        key:false
    },
    {
        seatName:"B9",
        prise:200,
        key:false
    },
    {
        seatName:"C1",
        prise:200,
        key:false
    },
    {
        seatName:"C2",
        prise:200,
        key:false
    },{
        seatName:"C3",
        prise:200,
        key:false
    },
    {
        seatName:"C4",
        prise:200,
        key:false
    },
    {
        seatName:"C5",
        prise:200,
        key:false
    },
    {
        seatName:"C6",
        prise:200,
        key:false
    }
]
)


    useEffect(() => {
        fetchAvailabilities();
        const seat= localStorage.getItem("seat");
        const seatData=JSON.parse(seat);
        setTest(seatData)
       console.log("hello")
        

    }, [chair]);


    const history=useHistory();


    const onSeatClick = (seat,key) => {
        setSelectedSeats(seat.seat_number);
        test.forEach(seats => {
            if (seats.seatName === seat.seatName)
               seat.key = true
         })

         console.log("key",seat)
    }
  
    const onBookClick = () => {
        localStorage.setItem("seat",JSON.stringify(test))
        bookSelectedSeats();
        alert("Movie booked successfully");
        history.push('/Print');
     
    }

    const buttonColor = {
        backgroundColor: totalCost > 0 ? "#006600" : "lightgray"
    }

    return (
        <div>
            <Context.Provider value={test}>
            <Header />
            {loading ? <div className="seatSelection-msg">Loading...</div> :
                apiError ? <div className="seatSelection-msg">An error occurred. Please try after some time.</div> :
                    <div className="seatSelection-container">
                        <div className="seatSelection-screen">Screen this way!</div>
                        <div className="seatSelection-seatsParent">
                            { test && test.map((seat,key) => {
                            return (
                            <Seat key={seat.seatName} seat={seat.seatName} price={seat.prise} booked={seat.key} onSeatClick={() => onSeatClick(seat,key)} />)
                        })
                        }
                        </div>
                        <div className="seatSelection-sampleSeats">
                            <div className="seatSelection-sampleSeatWrapper">
                            <div className="available" /> Available
                            </div>
                            <div className="seatSelection-sampleSeatWrapper">
                            <div className="unavailable" /> Unavailable
                            </div>
                            <div className="seatSelection-sampleSeatWrapper">
                            <div className="selected" /> Selected
                            </div>
                        </div>
                        <div className="seatSelection-cost">
                            Total Price: {totalCost}
                        </div>
                        <button style={buttonColor} onClick={onBookClick} >Book Movie</button>
                    </div>
            }
            </Context.Provider>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        allSeats: state.selectionReducer.allSeats,
        selectedSeats: state.selectionReducer.selectedSeats,
        loading: state.selectionReducer.loading,
        apiError: state.selectionReducer.error,
        totalCost: state.selectionReducer.totalCost,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAvailabilities: () => dispatch(fetchAvailabilities()),
        setSelectedSeats: (data) => dispatch(setSelectedSeats(data)),
        bookSelectedSeats: () => dispatch(bookSelectedSeats())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SeatSelection))
