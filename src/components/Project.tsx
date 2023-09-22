import ButtonComponent from './Buttons'


type TProject = {
    id: number,
    src: string,
    demo: string,
    code: string
}

const Project = (props: TProject) => {
  return (
    <div
              key={props.id}
              className="shadow-sm shadow-gray-200 rounded-lg"
            >
              <img
                className="rounded-md duration-200 hover:scale-110"
                src={props.src}
                alt="project picture"
              />

              <div className="flex justify-center items-center ">
                <ButtonComponent url={props.demo} textContent='Demo' />
                <ButtonComponent url={props.code} textContent='Code' />
              </div>
            </div>
    )
}

export default Project