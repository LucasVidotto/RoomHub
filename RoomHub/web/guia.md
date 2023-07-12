'use client'
import { useState,useEffect } from "react" ;
import axios from 'axios'

const GetLink = 'http://localhost:3333/first';
const PostLink = 'http://localhost:3333/second';
export default function Reserve(){
const [clicked,setClicked] =useState([])
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
        handlerPostClicked(index);
    }

    const handlerPostClicked = (index:number) =>{
        axios.post(PostLink,{
            id : index,
            title : clicked[index].title,
            author: "Lucas Vidotto",
            status: clicked[index].status,
        }).then((response)=>{
            console.log('Yep')
        })
    }
     return (
    <div className="flex w-full h-screen justify-center items-center bg-found bg-no-repeat bg-cover bg-center">
      <div className="flex w-11/12 h-8/10 min-h-[600px]  m-auto bg-brown-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-solid border-2 border-white rounded-lg">
        <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="flex flex-wrap w-full justify-center items-center gap-4">
            {clicked.map((item, index) => (
                <div className="flex flex-col w-1/4 h-24 justify-center items-center cursor-pointer border-solid border-2 border-[#254EDB] rounded-lg hover:bg-gray-900/50">
                <span className="font-serif">{item.title}</span>
                <span className="font-serif">
                    {clicked[index].status === false ? "Livre" : 'Ocupada'}
                </span>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>

);
}
