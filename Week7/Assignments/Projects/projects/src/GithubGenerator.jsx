import {useEffect, useState} from "react";
import axios from "axios";

function GithubGenerator({input}){
    const[username, setUsername] = useState('');

    const [data, setData] = useState("");

    const [error,setError] = useState("");


    useEffect(() => {
        if(username){
            const fetchData = async () =>{
                try{
                    const response = await  axios.get(`https://api.github.com/users/${username}`)
                    setData(response.data)
                    setError(null)
                }
                catch (e){
                    setData(null)
                    setError("User not found")
                }
            }
            fetchData();
        }

    }, [username]);

    return(
        <div>
            <input type="text" placeholder={"Enter the userName"} onChange={(e)=>{
                setUsername(e.target.value);
            }}/>

        {/*    If data contains the GitHub user data (i.e., it's not null or undefined), the JSX inside the div will be rendered.
If data is null or any other falsy value, the div and its contents will not be rendered.
*/}

            {error &&
            <p>{error}</p>
            }


            {data && (
                <div>
                    <h1>{data.name}</h1>
                    <img src={data.avatar_url} alt={"Profile"} />
                    <p>{data.followers} - followers</p>
                    <p>{data.following} - following</p>
                </div>
            )}

        </div>
    )
}

export default GithubGenerator;