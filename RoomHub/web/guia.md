'use client'
import { useState,useEffect } from "react" ;
import { Rooms } from "./dateRoom";
import axios from 'axios'
export default function Reserve(){
/_ const [clicked, setClicked] = useState([
{status: Rooms[0].status,index: 0},
{status: Rooms[1].status,index: 1},
{status: Rooms[2].status,index: 2},
{status: Rooms[3].status,index: 3},
{status: Rooms[4].status,index: 4},
{status: Rooms[5].status,index: 5},
{status: Rooms[6].status,index: 6},
{status: Rooms[7].status,index: 7},
{status: Rooms[8].status,index: 8},
]); _/
const [clicked,setClicked] =useState([{}])
useEffect(()=>{
const updateValues = Rooms;
setClicked(updateValues);
console.log(clicked)
},[clicked])
const [isclick, setIsCLick] = useState(false);

    /* const handlerClicked = (index: number) =>{
        const upadatedClicked = [...clicked];
        upadatedClicked[index].status = !clicked[index].status;

        setClicked(upadatedClicked);
    } */
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
                        {/* <div className="flex flex-row w-full max-h-1/3 h-[200px] items-center justify-center gap-20 bg-transparent">
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[3].index)}>
                                <span className="font-serif">Sala 1</span>
                                <span className="font-serif">{
                                     clicked[3].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[4].index)}>
                                <span className="font-serif">Sala 2</span>
                                <span className="font-serif">{
                                     clicked[4].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[5].index)}>
                                <span className="font-serif">Sala 3</span>
                                <span className="font-serif">{
                                     clicked[5].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                        </div>
                        <div className="flex flex-row w-full max-h-1/3 h-[200px] items-center justify-center gap-20 bg-transparent">
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[6].index)}>
                                <span className="font-serif">Sala 1</span>
                                <span className="font-serif">{
                                     clicked[6].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[7].index)}>
                                <span className="font-serif">Sala 2</span>
                                <span className="font-serif">{
                                     clicked[7].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                            <div className="flex flex-col w-24 h-24 justify-center items-center cursor-pointer borde-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50"
                            onClick={()=> handlerClicked(clicked[8].index)}>
                                <span className="font-serif">Sala 3</span>
                                <span className="font-serif">{
                                     clicked[8].status === false ? "Livre" : 'Ocupada'
                                }</span>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )

}
