import * as React from 'react'
import { useNavigate } from 'react-router-dom'


const Buttons = (props: { url: string, textContent: string}) => {
    
    const navigate = useNavigate();

   const handleButtonClick = (url: string) => {
        navigate(url);
   }

  return (
        <div className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
            <button onClick={() => handleButtonClick(props.url)}>
                Go to {props.textContent}
            </button>
        </div>

        )
}


export default Buttons