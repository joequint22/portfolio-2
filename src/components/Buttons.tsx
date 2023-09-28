

const Buttons = (props: { url: string, textContent: string}) => {
    

   const handleButtonClick = (url: string) => {
    
       window.open(url, '_blank')
   }

  return (
        <div className="w-5/6 hover:bg-green-200 hover:text-black rounded-md text-center py-3 m-4 duration-200 ">
            <button 
                
                onClick={() => handleButtonClick(props.url)}>
                {props.textContent}
            </button>
        </div>

        )
}


export default Buttons