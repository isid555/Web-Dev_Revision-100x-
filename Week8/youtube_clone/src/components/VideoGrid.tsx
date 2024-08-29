// note : this below will come from backend in real cases
import {VideoCard} from "@/components/VideoCard";

const VIDEOS = [
    {
     title : "Satyabama | Super Hit Movie | Tamil",
    channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
    author :"Lyca Productions",
    views : "200M",
    time : "5"
    },
    {
        title : "Sita ramam | Super Hit Movie | Telugu",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Avengers | Super Hit Movie | Hindi",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Satyabama | Super Hit Movie | Tamil",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Sita ramam | Super Hit Movie | Telugu",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Avengers | Super Hit Movie | Hindi",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Satyabama | Super Hit Movie | Tamil",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Sita ramam | Super Hit Movie | Telugu",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    },
    {
        title : "Avengers | Super Hit Movie | Hindi",
        channel_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpyX0tLo33CkFmpWmCUWsC1buYbp-YNCjGhkhaAvE9pdLnFwiS9dyXyqCmx9uztJTQwo&usqp=CAU",
        author :"Lyca Productions",
        views : "200M",
        time : "5"
    }

]



export function VideoGrid(){
    return(
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "}>


                {VIDEOS.map( video =>
                    <div>
                    <VideoCard title = {video.title} channel_img={video.channel_img} author = {video.author} views = {video.views} time = {video.time} />
                </div>)}




        </div>
    )
}