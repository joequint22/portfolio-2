

type TUserInputProps = {
    htmlFor: string;
    name: string;
    placeholder: string;
    type?: string;
}


const userInput = (props: TUserInputProps ) => {




  return (
    <>
        { props.type === 'textarea' ? 
            <textarea className=" text-xl bg-transparent text-white pl-3 p-4 border border-green-200 focus:outline-none rounded-lg h-48" name={props.name} required placeholder={props.placeholder} 
            /> : 
            <input className="xpna text-xl p-4 pl-3 w-full text-white bg-transparent border-green-200 focus:outline-none border rounded-lg " name={props.name} required placeholder={props.placeholder} type={props.type} />
        }
       
      </> 
  )
}

export default userInput