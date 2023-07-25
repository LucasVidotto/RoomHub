'use client'
import axios from 'axios'
import { useEffect,useState } from 'react';
import {AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

export default function Accept(){
    const[values,setValues] = useState([]);
    const [selected, setSelected] = useState([])
    useEffect(() =>{
       const fetchData = async () =>{
        try{
            const response = await  axios.get('http://localhost:3333/statusrooms');
            setValues(response.data);
            console.log(response.data)
        }catch(error){
            console.error("error ao buscar dados")
        }
       }

       fetchData()
    },[])

    const handlerSelected = (selected, index: number) =>{
        setSelected((prevState) =>{
            const newState = [...prevState];
            newState
        })
    }

    return(
        <>
            <div className="flex w-full h-screen bg-accept bg-no-repeat bg-cover bg-center opacity-50">
               <div className="flex justify-center items-center w-full h-full">
                    <div className="flex flex-col justify-center items-center w-[90%] h-[90%] bg-red-700 border border-solid border-white rounded-xl" >
                        {values.map((item,index) =>(
                            <div className='w-[95%] h-20 mb-2 border-b-2 border-b-solid border-b-white'>
                                <div className='flex flex-row w-full gap-4'>
                                    <div>{item.title} </div>
                                    <div>{item.author} </div>
                                    <div>{item.status.toString()} </div>
                                    <div>10 Pessoas </div>
                                    <div>(XX) XXXX-XXXXX</div>
                                </div>
                                {item.author !== 'Desocupada'? 
                                <div className='flex flex-row w-full gap-3'>
                                    <div> Pedido para alucação de sala, deseja Ocupar a Sala para {item.author}? </div>
                                    <div className='flex w-40 border border-solid border-gray-400 hover:border-gray-600'
                                    onClick={() => handlerSelected(!selected, index)}>     
                                        {!selected ?<AiFillCaretDown /> : <AiFillCaretUp />}
                                    </div>
                                </div> :
                                null}
                            </div>
                        ))}
                        
                    </div>
               </div>
            </div>
        </>
    )
}