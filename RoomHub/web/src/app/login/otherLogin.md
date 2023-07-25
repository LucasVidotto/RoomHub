import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const urlget = "http://localhost:3333/users";

export default function Login() {
const router = useRouter();
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
// Obtenha o token JWT do LocalStorage ou de outra fonte (por exemplo, Cookie)
const token = localStorage.getItem("authToken");
setIsAuthenticated(!!token); // Define isAuthenticated como true se o token existir
}, []);

const handlerAcess = () => {
const email = "lucasvidotto3@gmail.com";
const urlGetWithParams = `${urlget}?email=${email}`;

    axios.get(urlGetWithParams).then((response) => {
      console.log(response.data);
    });

};

return (
<div className="flex w-screen h-screen">
<div className="flex flex-row w-full h-full">
{/_ Restante do seu código de layout _/}
<div className="flex flex-col gap-4 mb-4">
<InputField placeholder="Email Address" />
<InputField placeholder="Your Password" />
<button
className="w-44 h-10 m-auto bg-transparent border-2 border-solid border-white rounded-xl active:border-b-4 active:border-r-4"
type="button"
onClick={() => {
if (isAuthenticated) {
// Executa a função handlerAcess apenas se o usuário estiver autenticado
handlerAcess();
} else {
// Redireciona o usuário para a página de login
router.push("/login");
}
}} >
Submit
</button>
</div>
{/_ Restante do seu código de layout _/}
</div>
</div>
);
}
