import React, { useContext } from 'react'
import '../App.css'
import { contextData } from '../screens/store/store'


export default function TransactionsHistory() {
    const data = useContext(contextData)
    console.log(data);
    return (
        <div>
            <p className="">History</p><hr/>
            <ul className="listContainer">
            {data !=="" ? data.map((d,index)=>(
                <li className="listItem" key={index+1} >
                    <span>{d.desc}</span>
                    <span>${d.amount}</span>
                </li>
                )) : <p style={{color:'darkred',textAlign:'center'}}>No Transaction yet!</p>}
            </ul>            
        </div>
    )
}
