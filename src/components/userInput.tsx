type TUserInputProps = {
    htmlFor: string;
    name: string;
    placeholder: string;
    type: string;
    title: string;
}


const userInput = (props: TUserInputProps ) => {
  return (
    <div>
        <label htmlFor={props.htmlFor}>{props.title}</label>
        <input name={props.name} required placeholder={props.placeholder} type={props.type} />
    </div>
  )
}

export default userInput