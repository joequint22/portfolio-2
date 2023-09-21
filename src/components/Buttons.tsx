import React from 'react'


const Buttons = (props: { url: string, textContent: string}) => {
    

   const handleButtonClick = (url: string) => {
       window.open(url, '_blank')
   }

  return (
        <div className="w-1/2 text-center py-3 m-4 duration-200 hover:scale-110">
            <button onClick={() => handleButtonClick(props.url)}>
                {props.textContent}
            </button>
        </div>

        )
}


export default Buttons