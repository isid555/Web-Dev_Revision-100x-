export  function VideoCard(props : any){
    return(
        <div>

            <img src={"img.png"} className={"rounded-xl"}/>
            <div className={"grid grid-cols-12"}>
                <div className={"col-span-1"}>
                    <img className={"rounded-full w-20 h-20"} src={props.channel_img}/>
                </div>


                <div className={"col-span-11"}>
                    <div>

                        <h3>{props.title}</h3>
                    </div>
                    <div className={"col-span-11 text-gray-500  text-base"}>
                        <h4>{props.author}</h4>
                    </div>
                    <div className={"col-span-11 text-gray-500  text-sm"}>
                        <h6>{props.views} views | {props.time} hours ago </h6>
                    </div>
                </div>


            </div>
        </div>
    )
}