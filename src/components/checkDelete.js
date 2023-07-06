import { useEffect, useState } from "react"
import { Button } from "antd";

export function CheckDelete(){
    const array = ["Play cricket", "Play Badminton", "Play Genshin"]
    const [arrayState, setArrayState] = useState(array);
    const [booleanArray, setBooleanArray] = useState(Array.from(array, ()=>false))

    const deleteItem = (deleteItem) => {
        const newArray = arrayState.filter((item)=>{
            //return true to add item to the new array when 'item' is not equal to 'deleteItem'
            return deleteItem!==item 
        }); 
        setArrayState(newArray);
    }

    useEffect(()=>{
        console.log(booleanArray);
    }, [booleanArray])

    return (
        <div>
            {
                arrayState.map((item, index) => {
                    return (<div key={index}>
                        <input type="checkbox" key={index} name="sports" 
                        onChange={()=>{
                            setBooleanArray((prevState)=>{
                                let newState = [...prevState];
                                newState[index] = !newState[index];
                                return newState;
                            });
                        }}/>{item}
                        {booleanArray[index] ? <button onClick={()=>deleteItem(item)}>Delete</button> : null}
                    </div>)
                })    
            }
        </div>
    )
}