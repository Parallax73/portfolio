/* eslint-disable no-unused-vars */
import clsx from "clsx";
import { repositoriesData } from "../utils/repositoriesData";

export function Projects() {
  return (
    <div className='w-[350px] lg:w-[1090px]'>
      <h1 className='text-white text-center font-archivo text-4xl font-semibold'>Projetos <span className='text-green'>.</span></h1>
      <div className='flex flex-wrap mt-14 lg:grid lg:grid-cols-3 lg:gap-x-5'>
        {repositoriesData.map((repository) => (
          <div
            key={repository.id}
            className=''
          >
            <div className={clsx('bg-secondBackground items-center justify-start px-8 py-8 mb-4 lg:h-[220px] lg:px-8 lg:py-8', {
              'border border-solid border-orange-700': repository.id === 1,
              'border border-solid border-purple' : repository.id === 2,
              'border border-solid border-white' : repository.id === 3,
              'border border-solid border-lightGreen' : repository.id === 4,
              'border border-solid border-red' : repository.id === 5,
            })}>
              <h1 className='text-2xl font-archivo font-semibold'>{repository.title}</h1>
              <br/>
              <p className='text-zinc-400 font-archivo text-lg'>{repository.content}</p>
              <br/>
              <a 
                target="_blank" 
                href={repository.link} 
                rel="noreferrer" 
                id='leftForward'
                className={clsx('font-archivo text-xl', {
                  'text-orange-700 hover:opacity-50 duration-500': repository.id === 1,
                  'text-purple hover:opacity-50 duration-500': repository.id === 2,
                  'text-white hover:opacity-50 duration-500': repository.id === 3,
                  'text-lightGreen hover:opacity-50 duration-500': repository.id === 4,
                  'text-red hover:opacity-50 duration-500': repository.id === 5,
                })}
              >
                {repository.click}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center mt-4'>
        <a target="_blank" href="https://github.com/parallax73?tab=repositories" id='leftForward' className='forwardGreen font-archivo text-green hover:opacity-50 duration-500 text-xl mt-4 leftForward' rel="noreferrer">Repositórios no GitHub</a>
      </div>
    </div>
  );
}
