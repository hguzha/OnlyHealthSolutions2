"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function AIChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([
    { from: "bot", text: "Hi! How can Only Health Solutions help you today?" },
  ]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: "Thank you for reaching out! A care specialist will follow up with you shortly. You can also call us at 770-439-7666." },
    ]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") send();
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle chat assistant"
        aria-expanded={open}
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#22D3EE] to-[#A855F7] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2"
      >
        {open ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-44 right-5 z-50 flex w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#22D3EE] to-[#A855F7] px-4 py-3">
              <p className="text-sm font-semibold text-white">Only Health Solutions</p>
              <p className="text-xs text-white/80">Care Assistant</p>
            </div>

            {/* Messages */}
            <div className="flex flex-1 flex-col gap-2 overflow-y-auto p-4" style={{ maxHeight: "260px" }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-snug ${
                    msg.from === "bot"
                      ? "self-start bg-slate-100 text-slate-700"
                      : "self-end bg-gradient-to-r from-[#22D3EE] to-[#A855F7] text-white"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-slate-100 px-3 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type a message…"
                className="flex-1 rounded-full border border-slate-200 px-3 py-1.5 text-sm outline-none focus:border-[#22D3EE]"
              />
              <button
                onClick={send}
                aria-label="Send message"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#22D3EE] to-[#A855F7] text-white transition-opacity hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
