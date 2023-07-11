'use client'
import { useState,useEffect } from "react" ;
/* import { Rooms } from "./dateRoom"; */
import axios from 'axios'

const GetLink = 'http://localhost:3333/first';
export default function Reserve(){
    const [clicked,setClicked] =useState([{
        id: 0, title:"", author: '', status: false,
    }])
    useEffect(()=>{
        axios.get(GetLink).then((response) =>{
            setClicked(response.data)
            console.log(response.data)
        })
    },[])

    const handlerStatusCLicked = (index:number)=>{
        const upadatedClicked = [...clicked];
        upadatedClicked[index].status = !clicked[index].status;
        setClicked(upadatedClicked);
    }
    return(
        <>
            <div className="flex w-full h-screen justify-center items-center bg-found bg-no-repeat bg-cover bg-center">
                <div className="flex w-11/12 h-8/10 min-h-[600px]  m-auto bg-brown-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-solid border-2 border-white rounded-lg">
                    <div className="flex flex-col w-full h-full justify-center items-center">
                        <div className="flex flex-row w-full max-h-1/3 h-[200px] items-center justify-center gap-20 bg-transparent">
                            {clicked.map((item,index) =>(
                            <div 
                                className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                                onClick={()=> handlerStatusCLicked(item.id)}>
                                    <span className="font-serif">{item.title}</span>
                                    <span className="font-serif">{
                                        clicked[index].status === false ? "Livre" : 'Ocupada'
                                    }</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}