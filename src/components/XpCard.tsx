type TProps = {
    id: number;
    src: string;
    text: string;
}

const XpCard = (props: TProps) => {
  return (
        <div key={props.id}>
            <div>
                <img src={props.src} alt="" />
            </div>
            <p>{props.text}</p>
        </div>
  )
}

export default XpCard