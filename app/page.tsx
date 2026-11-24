"use client"
import { useState } from "react";
import { generateText } from "@/app/actions/aiAction";
import ReactMarkdown from "react-markdown";

export default function Home() {

  const [prompt,setPrompt] = useState<string>("");
  const [output,setOutput] = useState<string>("");

  const handleSendPrompt = async() =>{
    const response = await generateText(prompt);
    setPrompt("");
    setOutput(response);
    
  }

  return (
    <main className="flex w-screen h-screen flex-col items-center overflow-auto justify-between px-24 py-6 mb-16">
      {output&& (
        <div className="pb-16">
          <h1 className="text-2xl font-bold mb-4">
            AI Response : 
          </h1>
          <ReactMarkdown>{output}</ReactMarkdown>
        </div>
      )}

      <div className="text-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full bg-gray-500">

        <input className="border p-2 rounded-md w-[80%] outline-none" type="text" placeholder="Type your message here..." 
        onChange={(e)=>{setPrompt(e.target.value)}}
        value={prompt}/>

        <button className="bg-neutral-700 text-white p-2 rounded-md ml-4 w-[18%] cursor-pointer"
        onClick={handleSendPrompt}>Send</button>

      </div>

    </main>
  );
}
