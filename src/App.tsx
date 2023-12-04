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
    //Create an array of numbers. Use the '.map' function to double all the numbers in the array.
    const numbers=[1,2,3,33,5];
    const doubledNumbers=numbers
        .map(num=>num*2);
    console.log(doubledNumbers);
    //Create an array of words. Use the '.filter' function to select only the words that are longer than 5 letters.
    const words=["eins","zwei","sieben","dreiunddreißig"];
    const wordsMore5Letters=words
        .filter(w=>w.length>5);
    console.log(wordsMore5Letters);
    //Create an array of numbers. Use the '.reduce' function to calculate the sum of all the numbers in the array.
    const sum: number=numbers.reduce((a,b)=>a+b,0);
    console.log(sum);
    //Create an array of numbers. Use the '.some' function to check if at least one number is greater than 10.
    const greaterThanTen:boolean=numbers.some((val)=>val>10);
    if(greaterThanTen){
        console.log("Zumindest eine Zahl ist größer als 10");
    } else {
        console.log("Keiner der Zahlen ist größer als 10");
    }
  return (
    <>

    </>
  )
}

export default App
