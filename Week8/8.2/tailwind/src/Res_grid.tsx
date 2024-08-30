function Res_grid(){
    return(
        <div className={"grid grid-cols-12 "}>
            <div className={"bg-red-400   col-span-12 md:col-span-5"}>red</div>
            <div className={"bg-blue-400  col-span-12 md:col-span-5"}>blue</div>
            <div className={"bg-green-400 col-span-12 md:col-span-2"}>green</div>
        </div>
    )
}
export default Res_grid;