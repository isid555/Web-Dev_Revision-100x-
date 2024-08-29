import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoCard title = {"Satyabama | Super Hit Movie | Tamil"} channel_img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFAha2r_g-Q0GQUt4LkqpYIOxtoPcAPsWYLuin2vTJ7cw0PB5uOkyu2J9XWOAhak25iQ&usqp=CAU"} author ={"Lyca Productions"} views = {"200M"} time = {"5"} />
   </div>
  );
}
