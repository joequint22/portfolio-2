type TProps = {
    id: number;
    src: string;
    text: string;
    style: string;
    sassStyle?: string;
}


const XpCard = (props: TProps) => {
  return (
        <div className={`${props.style}` + ` group w-52 md:w-48 p-4 gap-8 py-6 flex flex-col justify-between text-center shadow-lg rounded-lg`} key={props.id}>
            <div>
                <img src={props.src} alt="tech pictures" />
            </div>
            <p className={ ` ${props.sassStyle}` + " duration-200 text-md text-xl group-hover:text-white text-gray-100"}>{props.text}</p>
        </div>
  )
}

export default XpCard