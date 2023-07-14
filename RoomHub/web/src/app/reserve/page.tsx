'use client'
import { useState,useEffect } from "react" ;
import axios from 'axios'
import clsx from 'clsx';
import BoxReserve from "@/components/reserveBox";

const GetLink = 'http://localhost:3333/first';
const PostLink = 'http://localhost:3333/second';
const PutLink = 'http://localhost:3333/update';
export default function Reserve(){
    const [clicked,setClicked] =useState([]);
    const [disable, setDisable] = useState(true);
    const [isClosed, setClosed] = useState(false);
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
        handlePutClicked(index);
    }
    const handlerClosedClick = () =>{
      setClosed(true)
    }
    const handlePutClicked = (index) => {
      const id = clicked[index].id;
      const data = {
        title: clicked[index].title,
        author: "Celular",
        status: clicked[index].status,
      };

     
  
      axios.put(`${PutLink}/${id}`, data)
        .then((response) => {
          console.log('Atualizado com sucesso:', response.data);
        })
        .catch((error) => {
          console.error('Erro:', error);
        });
    };
     return (
    <div className="flex w-full h-screen justify-center items-center bg-found bg-no-repeat bg-cover bg-center">
      <div className="flex w-11/12 h-8/10 min-h-[600px]  m-auto bg-brown-300 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  border-solid border-2 border-white rounded-lg">
        <div className="flex flex-col w-full min-h-full justify-center items-center">
            <div className="flex flex-wrap w-full justify-center items-center gap-28">
            {clicked.map((item, index) => (
              <div className={clsx("flex flex-col w-1/5 h-24 justify-center items-center  border-solid border-2 rounded-lg hover:bg-gray-900/50",{
                  'cursor-pointer border-[#254EDB] ' : item.status === false,
                  ' bg-gray-400 pointer-events-none cursor-not-allowed' : item.status == true,
              })}
                onClick={() => {handlerStatusCLicked(index); setClosed(false)}}
              >
                <span className="font-serif">{item.title}</span>
                <span className="font-serif">
                    {clicked[index].status === false ? "Livre" : 'Ocupada'}
                </span>
              </div>
            ))}
          </div>
          {isClosed === false ?
            <BoxReserve onClick={handlerClosedClick}/>: 
            null}
        </div>
      </div>
    </div>
  );
}