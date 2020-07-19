import React, { useContext } from 'react'
import '../App.css'
import { contextData } from '../screens/store/store'


export default function TransactionsHistory() {
    const data = useContext(contextData)
    return (
        <div>
            <p className="">History</p><hr/>
            <ul className="listContainer">
            {data !=="" ? data.map((d,index)=>(
                <li className={`listItem ${d.amount > 0? 'incomeHistory' : 'expenseHistory'}`} key={index+1} >
                    <span>{index+1}) {d.desc}</span>
                    <span>${d.amount}</span>
                </li>
                )) : <p style={{color:'darkred',textAlign:'center'}}>No Transaction yet!</p>}
            </ul>            
        </div>
    )
}
