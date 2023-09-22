type TProps = {
    id: number;
    src: string;
    text: string;
    style: string;
    sassStyle?: string;
}


const XpCard = (props: TProps) => {
  return (
        <div className={`${props.style}` + ' w-48 p-4 gap-8 flex flex-col justify-between text-center shadow-md rounded-lg bg-transparent'} rounded-lg key={props.id}>
            <div>
                <img src={props.src} alt="tech pictures" />
            </div>
            <p className={`${props.sassStyle} + " text-gray-300 py-6"`}>{props.text}</p>
        </div>
  )
}

export default XpCard