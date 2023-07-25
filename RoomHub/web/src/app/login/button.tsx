import Link from "next/link";

export default function Button(){
    return(
        <>
            <button className="flex absolute top-2 right-3 justify-center w-20 h-8 border-2 border-solid border-white rounded-lg hover:shadow-secondShadow hover:shadow-white hover:bg-gray-700">
                <Link href="/singup">Sing Up</Link >
            </button>
        </>
    )
}