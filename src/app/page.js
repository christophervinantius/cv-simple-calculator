"use client"
import { useState } from "react"

export default function Home() {
  const [result, setResult] = useState("0")

  const CalculatorButton = ({value, type}) => {
    if(type === "number"){
      if(value === "0"){
        return (
          <div 
            id={value} 
            className="bg-neutral-600 hover:bg-neutral-500 transition-colors duration-300 ease-in-out cursor-pointer p-4 col-span-2 flex items-center justify-center"
            onClick={() => { 
              if(result === "0" || result === "ERROR"){
                setResult(value)
              }else if(result.length === 10){
                setResult(result)
              }else{
                setResult(result + value)
              }
            }}
          >
            {value}
          </div>
        )
      }else if(value === "."){
        return (
          <div 
            id={value} 
            className="bg-neutral-600 hover:bg-neutral-500 transition-colors duration-300 ease-in-out cursor-pointer p-4 flex items-center justify-center"
            onClick={() => {
              if(result === "ERROR"){
                setResult(value)
              }else if(result.length === 10){
                setResult(result)
              }else{
                setResult(result + value)
              }
            }}
          >
            {value}
          </div>
        )
      }else{
        return (
          <div 
            id={value} 
            className="bg-neutral-600 hover:bg-neutral-500 transition-colors duration-300 ease-in-out cursor-pointer p-4 flex items-center justify-center"
            onClick={() => {
              if(result === "0" || result === "ERROR"){
                setResult(value)
              }else if(result.length === 10){
                setResult(result)
              }else{
                setResult(result + value)
              }
            }}
          >
            {value}
          </div>
        )
      }
    }else if(type === "operator"){
      return (
        <div 
          id={value} 
          className="bg-neutral-500 hover:bg-neutral-400 transition-colors duration-300 ease-in-out cursor-pointer p-4 flex items-center justify-center"
          onClick={() => {
            if(result.length === 10){
              setResult(result)
            }else if(result !== "ERROR"){
              setResult(result + value)
            }
          }}
        >
          {value}
        </div>
      )
    }else if(type === "clear"){
      return (
        <div 
          id={value} 
          className="bg-red-500 hover:bg-red-400 transition-colors duration-300 ease-in-out cursor-pointer p-4 flex items-center justify-center"
          onClick={() => {
            if(result !== "0"){
              setResult("0")
            }
          }}
        >
          {value}
        </div>
      )
    }else if(type === "delete"){
      return (
        <div 
          id={value} 
          className="bg-red-500 hover:bg-red-400 transition-colors duration-300 ease-in-out cursor-pointer p-4 flex items-center justify-center"
          onClick={() => {
            if(result !== "0" && result !== "ERROR"){
              setResult(result.slice(0, -1))
            }
          }}
        >
          {value}
        </div>
      )
    }else if(type === "equal"){
      return (
        <div 
          id={value} 
          className="bg-indigo-500 hover:bg-indigo-400 transition-colors duration-300 ease-in-out cursor-pointer p-4 row-span-2 flex items-center justify-center"
          onClick={() => {
            try{
              const evaluationResult = eval(result)
              const displayResult = parseFloat(evaluationResult.toFixed(4))
              if(!Number.isFinite(displayResult)){
                setResult("ERROR")
              }else{
                setResult(displayResult.toString())
              }
            }catch(error){
              setResult("ERROR")
            }
          }}
        >
          {value}
        </div>
      )
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-sky-300">
      <div className="w-1/4 bg-neutral-800 p-4 text-white rounded-2xl shadow-2xl">
        <div id="display" className="bg-white text-neutral-900 text-right pt-8 pb-4 px-4 text-3xl">
          {result}
        </div>
        <div className="grid grid-cols-4 gap-4 pt-4 text-center text-xl">
          <CalculatorButton value="AC" type="clear" />
          <CalculatorButton value=">" type="delete" />
          <CalculatorButton value="/" type="operator" />
          <CalculatorButton value="*" type="operator" />
          <CalculatorButton value="7" type="number" />
          <CalculatorButton value="8" type="number" />
          <CalculatorButton value="9" type="number" />
          <CalculatorButton value="-" type="operator" />
          <CalculatorButton value="4" type="number" />
          <CalculatorButton value="5" type="number" />
          <CalculatorButton value="6" type="number" />
          <CalculatorButton value="+" type="operator" />
          <CalculatorButton value="1" type="number" />
          <CalculatorButton value="2" type="number" />
          <CalculatorButton value="3" type="number" />
          <CalculatorButton value="=" type="equal" />
          <CalculatorButton value="0" type="number" />
          <CalculatorButton value="." type="number" />
        </div>
      </div>
    </div>
  );
}
