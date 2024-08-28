import { RecoilRoot, useRecoilValue } from 'recoil';
import profileAtomFamily from './atom.jsx';
import './App.css';
import './ProfileComponent.css';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';



function App() {

    return (
        // <RecoilRoot>
        // <ProfileComponent profileId={1}/>
        // </RecoilRoot>
        <div>

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




export default App;
