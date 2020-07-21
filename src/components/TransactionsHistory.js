import React, { useContext } from 'react'
import '../App.css'
import { TransactionsContext } from '../store/store'


export default function TransactionsHistory() {
    const Transactons = useContext(TransactionsContext)
    return (
        <div>
            <p className="">History</p><hr/>
            <ul className="listContainer">
            {Transactons !=="" ? Transactons.map((d,index)=>(
                <li className={`listItem ${d.amount > 0? 'incomeHistory' : 'expenseHistory'}`} key={index+1} >
                    <span>{index+1}) {d.desc}</span>
                    <span>${d.amount}</span>
                </li>
                )) : <p style={{color:'darkred',textAlign:'center'}}>No Transaction yet!</p>}
            </ul>            
        </div>
    )
}
