import {atomFamily} from "recoil";
import {profile} from "./Profile.js";


const profileAtomFamily = atomFamily({
    key: 'profileAtomFamily',
    default: ({ id }) => {
        const foundProfile = profile.find(x => x.id === id);
        console.log(`Loading profile for id ${id}:`, foundProfile);
        return foundProfile || { id, name: '', age: 0, country: '', followers: 0, likes: 0, photos: 0, imageURL: '' };
    }
});



export default profileAtomFamily;