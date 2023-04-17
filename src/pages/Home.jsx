import { useContext } from "react";
import { ForumContext } from "../context/context";
import { Link } from "react-router-dom";


export const Home = () => {
    const {name} = useContext(ForumContext);
    
    return(
        <div>
            
            <h1>Welcome {name}</h1>
            <br/>
            <Link  to = "/ques">Show Questions</Link>
            
        </div>
    )
}