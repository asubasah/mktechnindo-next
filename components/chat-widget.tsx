"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";

type Msg = { role: "user" | "assistant"; content: string };

export default function ChatWidget({ locale }: { locale: string }) {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  // Auto-scroll on new message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  // Format message: hapus * dan bungkus newline dengan <br />
  const formatText = (text: string) => {
    const cleanStr = text.replace(/\*/g, ""); // hilangkan bintang
    return cleanStr.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));
  };


  const send = async () => {
    const text = input.trim();
    if (!text || thinking) return;

    const userMsg: Msg = { role: "user", content: text };
    const history: Msg[] = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      setMessages([...history, { role: "assistant", content: data.reply ?? data.error }]);
    } catch {
      setMessages([...history, { role: "assistant", content: "Maaf, terjadi kesalahan koneksi." }]);
    } finally {
      setThinking(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/chat/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        // Automatically send a message about the upload
        const uploadMsg = `[FILE UPLOADED: ${file.name}] Saya melampirkan gambar/dokumen untuk ditinjau.`;
        const userMsg: Msg = { role: "user", content: uploadMsg };
        const history: Msg[] = [...messages, userMsg];
        setMessages(history);
        setThinking(true);

        // Notify AI with the file context
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            messages: history,
            fileUrl: data.url 
          }),
        });
        const chatData = await response.json();
        setMessages([...history, { role: "assistant", content: chatData.reply ?? chatData.error }]);
      }
    } catch {
      alert("Gagal mengunggah file.");
    } finally {
      setUploading(false);
      setThinking(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  // Suppress locale warning
  void locale;

  return (
    <>
      {/* ── Floating Button ──────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_8px_32px_rgba(245,158,11,0.40)] transition-all duration-300 hover:scale-110 hover:shadow-[0_12px_40px_rgba(245,158,11,0.55)] active:scale-95"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-amber-400 opacity-25" />
        )}
      </button>

      {/* ── Chat Panel ───────────────────────────── */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex w-[360px] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(2,6,23,0.55)] ring-1 ring-white/10 transition-all duration-400 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        style={{ height: open ? "520px" : "0" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] px-5 py-4">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-slate-900 bg-emerald-400" />
          </div>
          <div>
            <p className="font-semibold leading-none text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{t("title")}</p>
            <p className="mt-0.5 text-xs text-amber-400">{t("subtitle")}</p>
          </div>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex flex-1 flex-col gap-3 overflow-y-auto bg-slate-950 px-4 py-4"
        >
          {/* Welcome */}
          {messages.length === 0 && (
            <div className="flex gap-2.5">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-slate-800/80 px-3.5 py-2.5 text-[13px] leading-relaxed text-slate-200 ring-1 ring-white/5">
                {t("welcome")}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              {m.role === "assistant" && (
                <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              )}
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  m.role === "user"
                    ? "rounded-tr-none bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-medium"
                    : "rounded-tl-none bg-slate-800/80 text-slate-200 ring-1 ring-white/5"
                }`}
              >
                {formatText(m.content)}
              </div>
            </div>
          ))}

          {/* Thinking indicator */}
          {thinking && (
            <div className="flex gap-2.5">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-amber-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none bg-slate-800/80 px-4 py-3 ring-1 ring-white/5">
                {[0, 1, 2].map((n) => (
                  <span key={n} className="h-2 w-2 rounded-full bg-amber-400 opacity-80" style={{ animation: `bounce 1.2s ${n * 0.2}s ease-in-out infinite` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center gap-2 bg-slate-900 px-4 py-3 ring-t ring-white/5">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            className="hidden"
            accept="image/*,application/pdf,.dwg,.dxf"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading || thinking}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition hover:bg-slate-700 hover:text-white disabled:opacity-40"
            title="Upload File/Drawing"
          >
            {uploading ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-white" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
            )}
          </button>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
            placeholder={t("placeholder")}
            className="flex-1 rounded-full bg-slate-800 px-4 py-2.5 text-[13px] text-white placeholder-slate-500 outline-none ring-1 ring-white/10 transition focus:ring-amber-500/60"
          />
          <button
            onClick={send}
            disabled={!input.trim() || thinking}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 shadow-md transition hover:bg-amber-400 disabled:opacity-40"
            aria-label={t("send")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-90" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
}
