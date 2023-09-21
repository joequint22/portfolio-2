import React from 'react'

export default function About(){

    
    return(
        <div name="about" 
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white ">
            
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div> 

                <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem velit est ab, et, hic, inventore ut vero temporibus nobis eos? Quibusdam qui, officia mollitia dolor nostrum veniam quis deleniti fuga odit aliquam commodi placeat inventore tempora, laborum eveniet, nulla sapiente. Esse quas officiis facere! Pariatur est distinctio quod quibusdam.</p>

                <br />

                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt praesentium maiores dolorum minima dolore, commodi vitae ratione ex reiciendis laudantium minus, aliquid molestiae error veritatis aperiam blanditiis voluptate, eligendi optio natus aliquam aut? Sunt voluptatem natus vero, sint saepe doloribus praesentium impedit eaque excepturi vel? Sapiente molestias optio repudiandae fugit!</p>

            </div>
        </div>
    )
}