/* eslint-disable no-unused-vars */
import { knowledgeData } from "../utils/knowledgeData";
import { useState } from "react";

export function Knowledge() {
  const initialContent = "*Passe o cursor do mouse por cima para ler*"
  const [ knowledge, setKnowledge ] = useState(initialContent);
  
  return (
    <div className='w-[350px] lg:w-[1090px] flex flex-col items-start mb-20 lg:items-center'>
      <h1 className="mt-20 text-white font-archivo text-4xl font-semibold">
          Conhecimentos <span className="text-green">.</span>
      </h1>
      <p className="knowledgeContent text-zinc-400 text-lg font-archivo h-[100px] text-center sm:none mt-10">{knowledge}</p>
      <nav className="mt-16 lg:mt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-3">
          {
            knowledgeData.map((knowledge) => (
            <div
              className="bg-firstBackground px-14 py-7 border-2 border-zinc-800 rounded-lg hover:border-green hover:cursor-default duration-700 flex items-center justify-center"
              rel="noreferrer"
              key={knowledge.id}
              onMouseEnter={() => setKnowledge(knowledge.content)}
              onMouseLeave={() => setKnowledge(initialContent)}
            >
              {knowledge.icon}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
