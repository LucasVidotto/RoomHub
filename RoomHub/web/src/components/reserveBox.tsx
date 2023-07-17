import { useState } from "react";
import {AiFillCloseCircle} from "react-icons/ai";
import jsPDF from 'jspdf';
import { Doc } from "@/app/reserve/doc";

interface Props{
    onClick: () => void;
}

export default function BoxReserve({onClick}: Props){
    const [active, setActive] = useState(true);
    const [num, setNum] = useState(0);
    const handlerCleanNum =  (e: any) =>{
        setActive(false)
        setNum(e.target.value)
    }
    const handlerClick = () => {
        if(num > 10){
            setActive(true)
            setNum(0)
        }
        generatePDF();
    }
      const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        doc.text('Documento para Reserva de Sala', 50, 15);
        doc.setFontSize(16);
        doc.setTextColor(88, 88, 88);
        doc.text('Caros,', 15, 50);
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(`${Doc[0].subject}`, 15, 55);
      
        // Obter altura da página
        const pageHeight = doc.internal.pageSize.getHeight();
      
        // Posicionar o texto "Assinar" no final da página
        doc.setTextColor(0, 0, 0);
        const signatureText = 'Assinar: _____________________________';
        const signatureTextWidth = doc.getTextWidth(signatureText);
        const signatureTextX = doc.internal.pageSize.getWidth() - signatureTextWidth - 15;
        const signatureTextY = pageHeight - 15;
      
        doc.setFontSize(10);
        doc.text(signatureText, signatureTextX, signatureTextY);
      
        doc.save('documento.pdf');
      };      

    return(
        <>
            <div className="absolute top-14 left-[50%] -translate-x-[50%] flex-row max-w-[380px] max-h-96 w-[380px] h-96 bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 border-solid border-2 border-white rounded-xl">
                <div className="relative top-[2%] left-[90%] flex w-8 cursor-pointer "
                    onClick={onClick}>
                    <AiFillCloseCircle size="30px" className="hover:text-gray-300"/>
                </div>
                <div className="flex flex-col w-[80%] h-[80%] m-auto  gap-5">
                    <div className="flex w-full justify-center">
                        <span className="text-2xl">Reserve</span>
                    </div>
                    <div className="flex w-[50%] max-h-3 h-2 m-0">
                        <label className="text-xs">Your Name</label>
                    </div>
                    <div className="flex w-[90%] border-2 border-solid border-white rounded-lg m-0">
                        <input 
                        className=" flex ml-4 bg-transparent outline-none border-none text-white" 
                        type="text" 
                        placeholder="Your Name"/>
                    </div>
                    <div className="flex w-[50%] max-h-3 h-2 m-0">
                        <label className="text-xs">Num People</label>
                    </div>
                    <div className="flex w-[90%] border-2 border-solid border-white rounded-lg">
                      
                        <input 
                        className=" flex ml-4 bg-transparent outline-none border-none text-white" 
                        type="number" 
                        placeholder="00"
                        value={num}
                        onChange={(e) => handlerCleanNum(e)}/>
                        {active === true ? 
                        <span className="text-[#972525]">Max. 10</span> :
                        null
                        }
                    </div>
                    <div className="flex w-[50%] max-h-3 h-2 m-0">
                        <label className="text-xs">Booking Date</label>
                    </div>
                    <div className="flex w-[90%] border-2 border-solid border-white rounded-lg">
                        <input 
                        className=" flex ml-4 bg-transparent outline-none border-none text-white filter-custom" 
                        type="date"/>
                    </div>

                    <div className=" flex justify-center w-[90%] mt-3">
                        <div className=" flex justify-center w-32 bg-transparent cursor-pointer border-2 border-b-4 border-solid rounded-lg hover:bg-[#807f7f5c]"
                            onClick={() => handlerClick()}>CLick Here
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}