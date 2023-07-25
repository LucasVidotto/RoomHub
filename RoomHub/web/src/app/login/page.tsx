'use client'
import { useEffect, useState } from "react";
import {GiDialPadlock} from "react-icons/gi";
import InputField from "./inputField";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Button from "./button";
import Error from "./erros";
import axios from 'axios';
import { useRouter } from "next/router";
const urlLogin = "http://localhost:3333/login";

export default function Login(){
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      axios
        .post(urlLogin, { email, password })
        .then((response) => {
          const { token } = response.data;
          localStorage.setItem("authToken", token);
          router.push("/view"); // Redirecionar para a página /view após o login bem-sucedido
        })
        .catch((error) => {
          console.error(error);
          // Tratar erros, como credenciais inválidas ou erro no servidor
        });
    };
    return(
        <div className="flex w-screen h-screen">
            <div className="flex flex-row w-full h-full">
                <div className="flex min-w-[60%] w-[60%] h-full bg-login bg-no-repeat bg-center bg-cover"></div>
                <Button />
                <Error />
                <div className="flex flex-col items-center gap-6 min-w-[40%] h-full ">
                    <div className="flex mt-10 mb-9"> 
                        <GiDialPadlock size="75px"/> 
                    </div>
                    <div className="flex">
                        <h1 className="text-gray-400 text-3xl mb-5">Sing In</h1>
                    </div>
                    <div className="flex flex-col gap-4 mb-4">
                        <InputField placeholder="Email Address" />
                        <InputField placeholder="Your Password" />
                        <button 
                        className="w-44 h-10 m-auto bg-transparent border-2  border-solid border-white rounded-xl active:border-b-4 active:border-r-4" 
                        type="button"
                        onClick={() => handleLogin()}>Submit</button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-200 text-lg m-auto">Or</span>
                        <div className="flex flex-row gap-6">
                            <div className="flex w-6 h-6 cursor-pointer rounded-full transition duration-300 bg-white hover:bg-gray-400">
                                <FcGoogle className="m-auto"/>
                            </div>
                            <div className="flex w-6 h-6 cursor-pointer rounded-full transition duration-300 bg-white hover:bg-gray-400">
                                <FaFacebookF className="m-auto" color="blue"/>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}