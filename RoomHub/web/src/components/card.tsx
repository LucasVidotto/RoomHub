import axios from 'axios';
import { useState,useEffect } from 'react';
const PutLink = 'http://localhost:3333/update';
interface Props {
    values: {},
    others: {},
}

export default function Card({values,others}:Props){

    const handlerUpdateReserve = (num : number, option: boolean, name: string, title: string) =>{
        const id = num;
        const data = {
            title: title,
            author: name,
            status: option,
        };
        axios.put(`${PutLink}/${num}`, data)
        .then((response) => {
          console.log('Atualizado com sucesso:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    return(
        <div className="relative">
            <div className="w-28 h-10 text-xs bg-gray-700 border-solid border-2 border-stone-700 rounded z-10">
                <div 
                className="cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-white"
                onClick={() => handlerUpdateReserve(others.id, false, others.author, others.title)}>
                    false
                </div>
                <div 
                className="cursor-pointer border-solid border-2 border-transparent hover:border-solid hover:border-2 hover:border-white"
                onClick={() => handlerUpdateReserve(others.id, true, others.author, others.title)}>
                    true
                </div>
            </div>
        </div>
    )
}