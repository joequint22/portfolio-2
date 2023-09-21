import React from 'react'

const Link = (props: {id: number, link: string}) => {
  return (
    <li
      key={props.id}
      className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
    >
      {props.link}
    </li>
  )
}

export default Link