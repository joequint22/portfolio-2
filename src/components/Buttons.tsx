
type TProps = {
    textContent?: string;
    id?: number;
    url: string
    download?: boolean;
    href?: string;
    target?: string;
    rel?: string;
  }
const Buttons = (props: TProps) => {
    

   const handleButtonClick = (url: string) => {
    
       window.open(url, '_blank')
   }

  return (
        <div className="w-5/6 hover:bg-green-200 hover:text-black rounded-md text-center py-3 m-4 duration-200 ">
               { props.id === 4 ?
                <a 
                    href={"./joeq-resume.pdf"}
                    download={true}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    <button
                        onClick={() => handleButtonClick(props.url)}
                    >
                        {props.textContent}
                    </button>
               </a>
               : <button 
                    onClick={() => handleButtonClick(props.url)}
                >
                    {props.textContent}
                </button> }
        </div>

        )
}


export default Buttons