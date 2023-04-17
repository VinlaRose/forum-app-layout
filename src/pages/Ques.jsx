import { useContext } from "react";
import { ForumContext } from "../context/context";
import { Link } from "react-router-dom";


export const Ques = () => {
    const {items} = useContext(ForumContext)
    return(
        <div>
            <h1>Questions</h1>
            <ul>
                {
                    items.map(({id, question, answer}) => (
                        <li key = {id}>
                            <h2>{question}</h2>
                            {/* <p>{answer}</p> */}
                            <Link style={{ margin: '20px' }} >Upvote</Link>
                            <Link style={{ margin: '20px' }} >Downvote</Link>
                            <Link style={{ margin: '20px' }} to = {`/ans/${id}`}  >Answer</Link>

                        </li>
                    ))
                }
            </ul>
           
        </div>
    )
}