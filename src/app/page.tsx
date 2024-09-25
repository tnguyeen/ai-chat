"use client";

import { useChat } from "ai/react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="p-8">
      {messages.map((m) => {

        return (
          <div key={m.id} className="flex ">
            <span className="w-12">
              {m.role === "user" ? "User: " : "AI: "}
            </span>
            <span className="w-[800px] whitespace-pre-line">
              {m.content}
            </span>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
