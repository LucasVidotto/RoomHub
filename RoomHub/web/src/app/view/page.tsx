"use client"
import { useState,useEffect } from 'react';
import axios from 'axios';
const urlGet = 'http://localhost:3333/first'
import {AiOutlineArrowUp, AiOutlineArrowDown} from "react-icons/ai";
import Card from '@/components/card';
import PrivateRoute from "../../components/PrivateRoute";
import { useRouter } from "next/router";

export default function ViewReserve(){
    const router = useRouter();
    const [values, setValues] = useState([]);
    const [visibled, setVisibled] = useState([
        {id: 0, status : false},
        {id: 1, status : false},
        {id: 2, status : false},
        {id: 3, status : false},
        {id: 4, status : false},
        {id: 5, status : false},
        {id: 6, status : false},
        {id: 7, status : false},
        {id: 8, status : false},
    ]);

    useEffect(()=>{
        axios.get(urlGet).then((response) =>{
            setValues(response.data)
        })  
    },[])

    const handlerClickVsibled = (index:number) =>{
        const upadated = [...visibled]
        upadated[index].status = !upadated[index].status
        setVisibled(upadated);
    }
    return(
        <PrivateRoute router={router}>
            <div className="flex w-full h-screen justify-center items-center bg-office bg-no-repeat bg-cover bg-center">
                <div className="flex flex-col w-[60%] h-[60%] bg-slate-950 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70 border-solid border-2 border-white rounded-xl">
                    <div className="grid grid-cols-4 w-full mb-5 font-comic">
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">Id</div>
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">Name</div>
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">Room</div>
                        <div className="bg-transparent border-b-2 border-b-solid border-white">Status</div>
                    </div>
                    {values.map((item, index) => (
                    <div className="grid grid-cols-4 w-full mb-3 font-comic">
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">{item.id}</div>
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">{item.author}</div>
                        <div className="bg-transparent border-r-2 border-r-solid border-white border-b-2">{item.title}</div>
                        <div className="flex flex-row justify-between bg-transparent border-b-2 border-b-solid border-white">
                        {visibled[index]?.status.toString()}
                        {visibled[index]?.status === false ? (
                            <AiOutlineArrowDown size="24px" onClick={() => handlerClickVsibled(index)} />
                        ) : (
                            <AiOutlineArrowUp size="24px" onClick={() => handlerClickVsibled(index)} />
                        )}
                        {visibled[index].status === true && <Card values={visibled[index]} others={item}/>}
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </PrivateRoute>
    )
}