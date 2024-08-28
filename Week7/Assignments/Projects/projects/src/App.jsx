import { RecoilRoot, useRecoilValue } from 'recoil';
import profileAtomFamily from './atom.jsx';
import './App.css';
import './ProfileComponent.css';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import ParagraphGenerator from "./ParagraphGenerator.jsx";
import GithubGenerator from "./GithubGenerator.jsx";



function App() {

    return (
        // <RecoilRoot>
        // <ProfileComponent profileId={1}/>
        // </RecoilRoot>
        <div>
{/*<ParagraphGenerator/>*/}
            <GithubGenerator/>
        </div>
    );
}

function ProfileComponent({ profileId }) {
    const [profile, setProfile] = useRecoilState(profileAtomFamily(profileId));

    return (
        <div>
            <div>
                <img src={profile.imageURL} alt={`${profile.name}'s profile`} id="p-pic" />
            </div>
            <div>
                <h1 id="p-name">{profile.name}</h1>
                <h2>{profile.age} - Age</h2>
                <h2>{profile.country} - Country</h2>
                <h2>{profile.followers >= 1000 ? `${profile.followers / 1000}K` : profile.followers} - Followers</h2>
                <h2>{profile.likes >= 1000 ? `${profile.likes / 1000}K` : profile.likes} - Likes</h2>
                <h2>{profile.photos >= 1000 ? `${profile.photos / 1000}K` : profile.photos} - Photos</h2>
            </div>
        </div>
    );
}

function ButtonColor(){
    const[color,setColor] = useState("white")

    function handleClick(e){
        console.log("Button is clicked")
        setColor(e.target.value);
        // document.body.style.backgroundColor = color;
    }
    document.body.style.backgroundColor = color;

    return(
        <div>
            <button value={"red"} onClick={handleClick} style={{color: "red"}}>Red</button>
            <button value={"yellow"} onClick={handleClick} style={{color: "yellow"}}>Yellow</button>
            <button value={"green"} onClick={handleClick} style={{color: "green"}}>Green</button>
            <button value={"black"} onClick={handleClick} style={{color: "black"}}>Black</button>
            <button value={"white"} onClick={handleClick} style={{color: "white"}}>White</button>
            <button value={"blue"} onClick={handleClick} style={{color: "blue"}}>Blue</button>
        </div>
    )
}




export default App;
