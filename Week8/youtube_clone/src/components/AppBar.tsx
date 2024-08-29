import {SearchBar} from "@/components/SearchBar";

export function AppBar(){
    return(
        <div className={"flex justify-between p-0.5"}>
            <div className={"inline-flex items-center p-3"}>
                <img src="https://i0.wp.com/musically.com/wp-content/uploads/2024/08/YouTube-logo-dark.png?fit=1200%2C900&ssl=1" alt="" className={"w-20 h-13"}/>
            </div>
            <div className={"p-3"}>
                <SearchBar/>
            </div>
            <div className={"inline-flex items-center"}>
                <button className={" rounded-3xl border text-slate-50  px-4 py-2 text-cyan-500  hover:bg-gray-400"}>Sign in</button>
            </div>
        </div>
    )
}