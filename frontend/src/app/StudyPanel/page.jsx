'use client';
import { useEffect, useState } from "react";
import Timer from "../components/timer";
import Button from "../components/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function StudyPanel(){

    
    const [time,setTime] = useState(0);
    const router= useRouter();
    
    //

    //boton de descanso

    const [inBreak, setInBreak] = useState(false);    
    const [timeLeft]=useState(300);
    const [allowedBreak,setAllowedBreak]=useState(false);
    
    useEffect(()=>{
        let nintervalID;
        if(!inBreak){
            nintervalID=setInterval( ()=>{setTime(time+1)},1000)
            
        }
        
        if(time%timeLeft==0){
            setAllowedBreak(true);
        }
        
        
        return ()=>clearInterval(nintervalID)
    },[inBreak,time,allowedBreak])

    
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor( (time / 60) % 60);    
    const seconds = time%60;
    

    const breakButton=()=>{
        setInBreak(!inBreak);
        console.log("Reloj iniciado o pausado");
    }

    const handleBreakButton=()=>{
        setInBreak(!inBreak);
        setAllowedBreak(!allowedBreak);
        console.log("Reloj iniciado o pausado");

    }
    

    return(
        <>
        
            <div className="flex justify-between mt-10 mr-4">
                <button onClick={()=>{router.push('/')}} className=" bg-suspend-session-button-color hover:bg-hover-suspend-session-color active:bg-click-suspend-session-color text-white font-bold py-2 px-4 rounded-xl w-46 text-xl border  border-suspend-session-button-color ml-8 h-12 shadow-sm shadow-purple-text">
                    Suspender Sesión
                </button>
                <Button onClick={()=>console.log("sesion Cerrada")} widht={'large'} texto = {"Cerrar Sesion"} />
                {/*AQUI IRIA EL BOTON DE USUARIO QUE SE USA PARA CERRAR SESIÓN */}
            </div>

            <div className="flex">
                <div className="w-2/6 " />
                <section className="flex flex-col items-center w-2/6 ">
                    <h1 className="mt-15 mb-7 font-bold w-auto text-5xl">Estudiando...</h1>
                    <div className="w-96 mb-12 h-px border border-t border-solid border-gray-line p-0 mx-auto"></div>


                    <Timer hour={hours.toString().padStart(2,"0")} min={minutes.toString().padStart(2,"0")} sec={seconds.toString().padStart(2,"0")} borderColor={"black"} textColor={"black"}/>
                    <button onClick={handleBreakButton} className={` bg-white hover:bg-hover-color-button active:bg-click-color-button text-blue-text-button font-bold py-2 px-4 rounded-xl text-xl border border-blue-text-button h-12 shadow-sm w-large shadow-purple-text `} >{inBreak? "Reanudar":"Descansar"}</button>
                    

                </section>
                <div className="flex flex-col items-center gap-5 w-2/6 pl-36 pt-5">
                    {/*breakNeededButton()*/}

                    {/*<label className="inline-flex items-center">
                        <span className="mr-2 text-gray-700">Sonido de alerta</span>
                        <input type="checkbox" className="form-checkbox h-8 w-8 font-bold text-indigo-600" checked={checked} onChange={handleChange} />
    </label>*/}
                </div>
            </div>
        
        </>

    );

}