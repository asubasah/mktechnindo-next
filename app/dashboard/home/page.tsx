"use client";

import { useState } from "react";
import Image from "next/image";

type ViewType = "overview" | "password" | "ai";

export default function DashboardHomePage() {
  const [view, setView] = useState<ViewType>("overview");
  const [generatedPwd, setGeneratedPwd] = useState("");
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdSaving, setPwdSaving] = useState(false);
  const [pwdMsg, setPwdMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const [aiPrompt, setAiPrompt] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSaving, setAiSaving] = useState(false);
  const [aiMsg, setAiMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch AI Config
  const fetchAiConfig = async () => {
    setAiLoading(true);
    try {
      const res = await fetch("/api/dashboard/ai-config");
      const data = await res.json();
      if (res.ok) setAiPrompt(data.systemPrompt);
    } catch (e) {
      console.error(e);
    } finally {
      setAiLoading(false);
    }
  };

  const saveAiConfig = async () => {
    setAiSaving(true);
    setAiMsg(null);
    try {
      const res = await fetch("/api/dashboard/ai-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ systemPrompt: aiPrompt }),
      });
      if (res.ok) setAiMsg({ type: "ok", text: "✓ Konfigurasi AI berhasil disimpan." });
      else setAiMsg({ type: "err", text: "Gagal menyimpan konfigurasi AI." });
    } catch {
      setAiMsg({ type: "err", text: "Terjadi kesalahan jaringan." });
    } finally {
      setAiSaving(false);
    }
  };

  const generatePassword = async () => {
    setPwdLoading(true);
    setPwdMsg(null);
    try {
      const res = await fetch("/api/dashboard/generate-password", { method: "POST" });
      const data = await res.json();
      if (res.ok) setGeneratedPwd(data.password);
      else setPwdMsg({ type: "err", text: data.error ?? "Gagal generate password." });
    } catch {
      setPwdMsg({ type: "err", text: "Terjadi kesalahan jaringan." });
    } finally {
      setPwdLoading(false);
    }
  };

  const savePassword = async () => {
    if (!generatedPwd) return;
    setPwdSaving(true);
    setPwdMsg(null);
    try {
      const res = await fetch("/api/dashboard/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newPassword: generatedPwd }),
      });
      const data = await res.json();
      if (res.ok) {
        setPwdMsg({ type: "ok", text: "✓ Password berhasil diubah. Catat password baru Anda!" });
      } else {
        setPwdMsg({ type: "err", text: data.error ?? "Gagal menyimpan password." });
      }
    } catch {
      setPwdMsg({ type: "err", text: "Terjadi kesalahan jaringan." });
    } finally {
      setPwdSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/dashboard/logout", { method: "POST" });
    window.location.href = "/dashboard";
  };

  const stats = [
    { label: "Halaman Aktif", value: "7", icon: "📄", color: "from-blue-500/20 to-blue-500/5", ring: "ring-blue-500/20" },
    { label: "Bahasa Tersedia", value: "6", icon: "🌐", color: "from-emerald-500/20 to-emerald-500/5", ring: "ring-emerald-500/20" },
    { label: "AI Chat Aktif", value: "On", icon: "🤖", color: "from-amber-500/20 to-amber-500/5", ring: "ring-amber-500/20" },
    { label: "Status Server", value: "Online", icon: "🟢", color: "from-green-500/20 to-green-500/5", ring: "ring-green-500/20" },
  ];

  const pages = [
    { slug: "/", label: "Beranda (Homepage)", icon: "🏠" },
    { slug: "/tentang", label: "Tentang (About)", icon: "🏭" },
    { slug: "/layanan", label: "Layanan (Services)", icon: "⚙️" },
    { slug: "/industri", label: "Industri", icon: "🏗️" },
    { slug: "/proyek", label: "Proyek (Projects)", icon: "📐" },
    { slug: "/kontak", label: "Kontak (Contact)", icon: "📞" },
  ];

  const langs = [
    { code: "ID", name: "Bahasa Indonesia", flag: "🇮🇩", note: "Default" },
    { code: "EN", name: "English", flag: "🇬🇧", note: "" },
    { code: "JA", name: "日本語", flag: "🇯🇵", note: "Keigo formal" },
    { code: "KO", name: "한국어", flag: "🇰🇷", note: "Formal" },
    { code: "ZH", name: "中文 (简体)", flag: "🇨🇳", note: "Simplified" },
    { code: "JV", name: "Basa Jawa", flag: "☕", note: "Ngoko Alus" },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#1a0a0a] text-white">
      {/* ── Sidebar ─────────────────────────────────── */}
      <aside className={`${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/8 bg-[#0d1527]/95 backdrop-blur-xl transition-transform duration-300 md:relative md:translate-x-0`}>
        {/* Logo */}
        <div className="border-b border-white/8 px-5 py-5">
          <div className="inline-flex rounded-xl bg-white/90 px-3 py-2 shadow-md">
            <Image src="/images/logos/logo_mktech.png" alt="MK Technindo" width={130} height={57} className="h-auto w-28" />
          </div>
          <p className="mt-2 text-[11px] text-slate-500">Management Panel</p>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4">
          <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">Menu</p>
          {[
            { id: "overview", label: "Overview", icon: "📊" },
            { id: "ai", label: "Konfigurasi AI Agent", icon: "🤖" },
            { id: "password", label: "Keamanan Password", icon: "🔐" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { 
                setView(item.id as ViewType); 
                setMobileMenuOpen(false); 
                if (item.id === "ai") fetchAiConfig();
              }}
              className={`mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                view === item.id
                  ? "bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}

          <div className="mt-4 border-t border-white/8 pt-4">
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600">Link Cepat</p>
            <a href="/" target="_blank" rel="noreferrer"
              className="mb-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
              <span>🌐</span> Lihat Website
            </a>
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t border-white/8 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-2.5 text-sm font-medium text-red-400 transition hover:bg-red-500/15"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* ── Main Content ─────────────────────────────── */}
      <main className="flex flex-1 flex-col overflow-auto">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-white/8 bg-[#0d1527]/80 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <button onClick={() => setMobileMenuOpen(true)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 md:hidden">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h1 className="text-base font-semibold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {view === "overview" ? "Dashboard Overview" : view === "ai" ? "Konfigurasi AI Agent" : "Keamanan Password"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-400 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Nyongpen
            </span>
          </div>
        </header>

        <div className="flex-1 px-6 py-6">
          {/* ── OVERVIEW ─────────────────────────── */}
          {view === "overview" && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className={`rounded-2xl bg-gradient-to-br ${s.color} p-5 ring-1 ${s.ring}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{s.value}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Pages & Languages in 2 cols */}
              <div className="grid gap-5 lg:grid-cols-2">
                {/* Pages */}
                <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-amber-400" style={{ fontFamily: "'Outfit', sans-serif" }}>Halaman Website</h2>
                  <div className="space-y-2">
                    {pages.map((p) => (
                      <div key={p.slug} className="flex items-center justify-between rounded-xl bg-white/4 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span>{p.icon}</span>
                          <span className="text-sm text-white">{p.label}</span>
                        </div>
                        <a href={p.slug} target="_blank" rel="noreferrer" className="text-xs text-amber-400 hover:text-amber-300">
                          Buka ↗
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="rounded-2xl border border-white/8 bg-white/3 p-6">
                  <h2 className="mb-4 text-sm font-semibold text-amber-400" style={{ fontFamily: "'Outfit', sans-serif" }}>Bahasa yang Tersedia</h2>
                  <div className="space-y-2">
                    {langs.map((l) => (
                      <div key={l.code} className="flex items-center justify-between rounded-xl bg-white/4 px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{l.flag}</span>
                          <div>
                            <p className="text-sm font-medium text-white">{l.name}</p>
                            {l.note && <p className="text-xs text-slate-500">{l.note}</p>}
                          </div>
                        </div>
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold text-slate-300">{l.code}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* AI Chat info */}
              <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-xl">🤖</div>
                  <div>
                    <h2 className="text-sm font-semibold text-amber-400" style={{ fontFamily: "'Outfit', sans-serif" }}>AI Webchat</h2>
                    <p className="mt-1 text-sm text-slate-400">Menggunakan OpenRouter AI (Gemini 2.0 Flash). Chat widget aktif di semua halaman. AI auto-detect bahasa pengguna dan balas dalam bahasa yang sama (ID, EN, JA, KO, ZH, JV).</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 ring-1 ring-emerald-500/20">Provider: OpenRouter</span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400 ring-1 ring-blue-500/20">Model: Gemini 2.0 Flash</span>
                      <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-400 ring-1 ring-purple-500/20">Endpoint: /api/chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── AI CONFIG ─────────────────────────── */}
          {view === "ai" && (
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">🤖</div>
                  <div>
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Atur Otak AI Agent</h2>
                    <p className="mt-1 text-sm text-slate-400">Sesuaikan System Prompt untuk mengatur perilaku, pengetahuan, dan gaya bicara AI di website.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-slate-500">System Prompt / Instruksi Utama</label>
                    {aiLoading ? (
                      <div className="h-64 w-full animate-pulse rounded-xl bg-white/5" />
                    ) : (
                      <textarea
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        className="h-96 w-full rounded-xl border border-white/10 bg-black/30 p-5 font-mono text-sm leading-relaxed text-slate-300 outline-none ring-offset-slate-900 transition focus:ring-2 focus:ring-amber-500/50"
                        placeholder="Masukkan instruksi untuk AI..."
                      />
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={saveAiConfig}
                      disabled={aiSaving || aiLoading}
                      className="flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-60"
                    >
                      <svg className={`h-4 w-4 ${aiSaving ? "animate-spin" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {aiSaving ? "Menyimpan..." : "Simpan Konfigurasi"}
                    </button>

                    {aiMsg && (
                      <span className={`text-sm ${aiMsg.type === "ok" ? "text-emerald-400" : "text-red-400"}`}>
                        {aiMsg.text}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-sm text-blue-300">
                <p className="font-semibold">💡 Tips Konfigurasi:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-blue-300/80">
                  <li>Gunakan bahasa yang instruktif (misal: "Selalu jawab dalam bahasa yang sama dengan user")</li>
                  <li>Masukkan detail produk MK Technindo agar AI terlihat sangat ahli.</li>
                  <li>Pastikan ada aturan untuk meneruskan pertanyaan harga ke Sales Engineer.</li>
                </ul>
              </div>
            </div>
          )}

          {/* ── PASSWORD ─────────────────────────── */}
          {view === "password" && (
            <div className="max-w-2xl space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/4 p-7">
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/20 text-2xl">🔐</div>
                  <div>
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>Ubah Password Dashboard</h2>
                    <p className="mt-1 text-sm text-slate-400">Generate password baru secara acak menggunakan AI, lalu simpan untuk menggantikan password saat ini.</p>
                  </div>
                </div>

                {/* Step 1 */}
                <div className="rounded-xl border border-white/8 bg-white/4 p-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">Langkah 1 — Generate Password Baru</p>
                  <button
                    onClick={generatePassword}
                    disabled={pwdLoading}
                    className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400 disabled:opacity-60"
                  >
                    <svg className={`h-4 w-4 ${pwdLoading ? "animate-spin" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    {pwdLoading ? "Generating..." : "Generate Password (AI)"}
                  </button>

                  {generatedPwd && (
                    <div className="mt-4 rounded-xl bg-slate-900/60 p-4">
                      <p className="mb-1 text-xs text-slate-500">Password yang dihasilkan:</p>
                      <div className="flex items-center justify-between gap-3">
                        <code className="flex-1 select-all break-all font-mono text-lg font-bold tracking-widest text-amber-400">{generatedPwd}</code>
                        <button
                          onClick={() => navigator.clipboard.writeText(generatedPwd)}
                          className="rounded-lg border border-white/10 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                          title="Salin"
                        >
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Step 2 */}
                {generatedPwd && (
                  <div className="mt-4 rounded-xl border border-white/8 bg-white/4 p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber-400">Langkah 2 — Simpan Password Baru</p>
                    <p className="mb-4 text-sm text-slate-400">
                      ⚠️ Pastikan Anda sudah <strong className="text-white">menyalin dan menyimpan</strong> password di atas sebelum menyimpan. Password tidak dapat dikembalikan!
                    </p>
                    <button
                      onClick={savePassword}
                      disabled={pwdSaving}
                      className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500 disabled:opacity-60"
                    >
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {pwdSaving ? "Menyimpan..." : "Simpan Password Baru"}
                    </button>
                  </div>
                )}

                {/* Message */}
                {pwdMsg && (
                  <div className={`mt-4 flex items-start gap-3 rounded-xl px-5 py-4 text-sm ring-1 ${
                    pwdMsg.type === "ok"
                      ? "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20"
                      : "bg-red-500/10 text-red-400 ring-red-500/20"
                  }`}>
                    <span>{pwdMsg.type === "ok" ? "✅" : "❌"}</span>
                    <span>{pwdMsg.text}</span>
                  </div>
                )}
              </div>

              {/* Info Note */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-sm text-blue-300">
                <p className="font-semibold">ℹ️ Catatan Penting:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-blue-400/80">
                  <li>Password disimpan di memori server dan <strong>reset ke .env.local</strong> saat server restart</li>
                  <li>Untuk password permanen, edit <code className="rounded bg-white/10 px-1">DASHBOARD_PASSWORD</code> di <code className="rounded bg-white/10 px-1">.env.local</code></li>
                  <li>Username selalu: <strong className="text-white">Nyongpen</strong></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
