'use client';
import ButtonBack from "../components/buttonBack";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { setLastInterface, setSessionTime } from "../features/answers/answersSlice";
import { FormGroup, Label, Modal, ModalBody, ModalHeader } from "reactstrap";
import Button from "../components/button";
import { createStyleRegistry } from "styled-jsx";
import styled from "styled-components";

export default function PTime() {
      
    
  return (
    <>
    
        <Overlay>
            <Contenedor>
                    <Encabezado>
                        <h3>Los tiempos asignados son</h3>
                    </Encabezado>
                    <B>Cancelar</B>
                    <h1> Tiempo de estudio</h1>
                    <input type="text"></input>
                    <h1> Tiempos de descanso</h1>
                    <input type="text"></input>
                    <h1> Intervalos de descanso</h1>
                    <input type="text"></input>
                    <ButtonBack texto={'Continuar'} />
            </Contenedor>
        </Overlay>
    
    </>
  );
}


    const Overlay = styled.div`
        
        height: 100vh;
        width: 100vw;
        position: fixed;
        top:0;
        left: 0;
        background: rgba(0,0,0,.5);

        padding: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const Contenedor = styled.div`
        width: 500px;
        min-height: 300px;
        background: #fff;
        position: relative;
        border-radius: 5px;
        box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
        padding:20px;


    `;

    const Encabezado = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        padding-bottom:20px;
        border-bottom: 1px solid #E8E8E8
        
       
    `;

    const B  = styled.button`
    position: absolute;
    background: #fff;
    top: 20px;
    right: 20px;

    width: 70px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    transition: .3s ease all;
    border-radius: 5px;
    color: #1766DC;

    &:hover {
        background: #f2f;
    }

    
   
`;
