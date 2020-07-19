import React from 'react'

export default function AddTransactions() {
    return (
        <div>
            <p>Add transaction</p><hr/>
            <form action="" className="addForm">
                <input className="formField" type="text" placeholder="Enter Description" required/>
                <input className="formField" type="number" placeholder="Enter Amount" required/>
                <input className="submitBtn" type="submit" value="Add transaction"/>
            </form>
        </div>
    )
}
