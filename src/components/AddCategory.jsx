import { useState } from "react"

export const AddCategory = ({onNewValueCategory}) => {

    const [inputValue, setinputValue] = useState('')
    
    const onInputchange=(event)=>{
        setinputValue(event.target.value)
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        //setCategories(categories=>[...categories, inputValue])
        onNewValueCategory(inputValue.trim())
        setinputValue('')
    }
  return (
    
    <form onSubmit={(event) => onSubmit(event)}>
    
    <input 
    type="text"
     placeholder="Buscar gifs!!!"
     value={inputValue}
     onChange = {(event) => onInputchange(event)}
    />

    </form>

  )
}
