'use client';
import ButtonBack from "../components/buttonBack";
import styled from "styled-components";

export default function PTime({children,estado,cambioEstado}) {
      
    //ponerle de fondo la pestaña anterior de seleccionar tiempo
  return (
    <>
    {estado && 
        <Overlay>
            <Contenedor>
                    <Encabezado>
                        <h6>Los tiempos asignados son</h6>
                    </Encabezado>
                    <B>Cancelar</B>
                    <Enca>
                       {children} 
                    </Enca>
                        
                    
                    
                    <ButtonBack texto={'Continuar'} onClick={()=> cambioEstado(false)}/>
            </Contenedor>
        </Overlay>
    }
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
        border-bottom: 1px solid #E8E8E8;
        
        font-weight:bold;
        font-size:20px;
        font-family:Helvetica,Futura,Arial,Verdana,sans-serif;
        
       
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


const Enca = styled.div`
       display: flex;
        align-items: center;
        justify-content: center;
        align: center;
        width: 600px;
        height: 200px;
        
       
    `;