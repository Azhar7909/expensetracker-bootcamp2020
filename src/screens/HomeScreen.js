import React from 'react';
import DisplayBalance from '.././components/DisplayBalance';
import TransactionsHistory from '../components/TransactionsHistory';
import AddTransactions from '../components/AddTransactions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css'




export default function HomeScreen() {
    return (
        <div className="Container">
            <div className="homeContainer"> 
                <Header /> 
                    <DisplayBalance />
                    <TransactionsHistory />
                    <AddTransactions />
                
                <Footer />
            </div> 
        </div>
    )
}
