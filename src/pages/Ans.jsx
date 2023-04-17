import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ForumContext } from "../context/context";


export const Ans = () => {
const {items} = useContext(ForumContext);
console.log(items)


    const {ansID} = useParams();

   const updatedItems = items.filter((item) => item.id === parseInt(ansID));
   console.log(updatedItems) 
    return(
        <div>
            <h1>Answers</h1>
            <ul>
                {
                    updatedItems.map(({id, question, answer}) => (
                        <div key = {id}>
                            
                            <h2>{answer}</h2>
                            

                        </div>
                    ))
                }
            </ul>
        </div>
    )
}