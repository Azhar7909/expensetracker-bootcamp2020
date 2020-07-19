import React from 'react'

export default function DisplayBalance() {
    return (
        <div>
            <div>
                <p style={{color:'darkblue', fontSize:'20px'}}>Your Balance <br/><span style={{color:'darkcyan'}}>$8000</span></p>
            </div>
            <div className="balContainer">
                <div className="incomeContainer">
                    <div style={{color:'green'}}>Income</div>
                    <div style={{color:'green'}}>$5000</div>
                </div>
                <div className="expenseContainer">
                    <div style={{color:'darkred'}}>Expense</div>
                    <div style={{color:'darkred'}}>$3000</div>
                </div>
            </div>
        </div>
    )
}
