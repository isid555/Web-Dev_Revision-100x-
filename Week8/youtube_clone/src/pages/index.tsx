import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";
import {VideoGrid} from "@/components/VideoGrid";
import {AppBar} from "@/components/AppBar";
import {LeftBar} from "@/components/LeftBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
       <AppBar/>

       <div className={"flex"}>
           <LeftBar/>
           <VideoGrid/>
       </div>
   </div>
  );
}
