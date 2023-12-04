import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const age:number=12;
    for(let i=1;i<age;i++){
        console.log(i);
    }
    if(age<18){
        console.log("Jünger als 18")
    } else{
        console.log(("Älter als 18"))
    }
    const score:number=0;
    if(score){
        console.log("Score is evaluated as truthy")
    } else {
        console.log("Score is falsy")
    }
    const username:string="";
    if(username) {
        console.log("username is available");
    } else {
            console.log("Username is evaluated falsy");
        }

    const isAdmin:boolean=false;
    if(isAdmin){
        console.log("isAdmin is evaluated as truthy")
    }
    if (isAdmin===false) {
            console.log("isAdmin has the value false");
        }



  return (
    <>

    </>
  )
}

export default App
