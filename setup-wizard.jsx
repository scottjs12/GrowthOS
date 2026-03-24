import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are an expert growth strategist helping someone set up their AI-native growth team repo. Your job is to conduct a focused onboarding interview and then generate complete CLIENT CONTEXT blocks for all 13 agent files.

You have access to any documents the user uploaded (brand guidelines, strategy docs, competitor research, goals, etc.). Reference them naturally in your questions and generated output — treat them as ground truth where they conflict with answers.

You ask ONE question at a time. Each question should feel conversational and smart — like a senior growth advisor asking, not a form asking. After each answer, acknowledge it briefly and ask the next question. If the uploaded documents already answer a question clearly, acknowledge that and move on or ask a follow-up to go deeper.

INTERVIEW SEQUENCE (ask in this order, adapting naturally based on answers and uploaded docs):
1. "What's the business? Give me the one-sentence version — what it does and who it's for." (skip or go deeper if brand doc covers this)
2. "What stage are you at? Pre-launch, early traction, scaling, or established?"
3. "Who's the core customer? Don't give me demographics yet — tell me what they're frustrated with or what they're trying to accomplish."
4. "Where do you think your customers are? What channels have you tried or are planning to try?"
5. "Describe the brand voice in a few words. What should it sound like — and what should it absolutely NOT sound like?" (skip if brand guidelines uploaded)
6. "What's the single most important action a new user should take? The one thing that means they've gotten value."
7. "What tools are you already using or planning to use? (analytics, CRM, paid platforms, CMS, etc.)"
8. "Who else is on the team or involved? Any designers, engineers, or contractors?"
9. "What does success look like in 90 days? Give me a number if you can."
10. "Anything that would make this engagement fail? Constraints, red lines, things to avoid?"

After all 10 questions are answered, say exactly: "GENERATING_CONTEXT" and nothing else.

Keep answers brief. Be direct. Sound like a smart person, not a chatbot. If an answer is vague, ask one sharp follow-up before moving on. Never ask more than one follow-up per question.`;

const GENERATION_PROMPT = (transcript, docSummary) => `Based on this onboarding interview${docSummary ? " and the uploaded documents" : ""}, generate complete CLIENT CONTEXT blocks for all 13 files in the growth repo.

${docSummary ? `UPLOADED DOCUMENTS:\n${docSummary}\n` : ""}

INTERVIEW TRANSCRIPT:
${transcript}

Generate the following, each clearly labeled. Be specific, opinionated, and fill in reasonable recommendations where the user did not specify — add a [recommended] note where you are making an inference. Pull directly from uploaded documents where relevant.

For each file, output EXACTLY this format:

=== FILE: [filename] ===
[complete CLIENT CONTEXT markdown block]

Files to generate:
1. STRATEGIST.md — Client Onboarding Intake section
2. 00_growth-pm/AGENT.md — CLIENT CONTEXT block
3. 01_growth-researcher/AGENT.md — CLIENT CONTEXT block
4. 02_content-writer/AGENT.md — CLIENT CONTEXT block (include full brand voice with good/bad examples — pull from brand guidelines if uploaded, otherwise infer from their description)
5. 03_seo/AGENT.md — CLIENT CONTEXT block
6. 04_growth-designer/AGENT.md — CLIENT CONTEXT block (pull brand colors and typography from brand guidelines if uploaded)
7. 05_cro/AGENT.md — CLIENT CONTEXT block
8. 06_growth-paid/AGENT.md — CLIENT CONTEXT block
9. 07_growth-analytics/AGENT.md — CLIENT CONTEXT block
10. 08_growth-crm/AGENT.md — CLIENT CONTEXT block
11. 09_growth-ops/AGENT.md — CLIENT CONTEXT block
12. 10_growth-engineer/AGENT.md — CLIENT CONTEXT block
13. 11_influencer-partnerships/AGENT.md — CLIENT CONTEXT block

After all 13 blocks, output:
=== ACTIVATION ORDER ===
List which agents to activate first based on their stage and answers, with a one-line reason for each. Max 6 agents — prioritize ruthlessly.`;

const UPLOAD_DOCS = [
  { id: "brand", label: "Brand Guidelines", desc: "Colors, typography, voice, logo usage", icon: "🎨", priority: "high" },
  { id: "goals", label: "Goals / OKRs", desc: "Business objectives, KPIs, success metrics", icon: "🎯", priority: "high" },
  { id: "icp", label: "ICP / Personas", desc: "Customer profiles, research, personas", icon: "👤", priority: "high" },
  { id: "competitive", label: "Competitive Analysis", desc: "Competitor research, positioning docs", icon: "🔍", priority: "medium" },
  { id: "strategy", label: "Marketing Strategy", desc: "Existing strategy docs, channel plans", icon: "📋", priority: "medium" },
  { id: "creative", label: "Creative / Messaging", desc: "Copy decks, messaging frameworks", icon: "✍️", priority: "medium" },
  { id: "analytics", label: "Analytics / Data", desc: "Dashboards, reports, past performance", icon: "📊", priority: "low" },
  { id: "other", label: "Other Docs", desc: "Anything else that might help", icon: "📎", priority: "low" },
];

const C = {
  bg: "#080810", surface: "#0f0f1a", surfaceHigh: "#161625",
  border: "#1c1c30", accent: "#7dd3fc", accentDim: "#7dd3fc15",
  green: "#86efac", greenDim: "#86efac15", text: "#e2e8f0",
  muted: "#64748b", mutedHigh: "#94a3b8", indigo: "#a5b4fc",
  indigoDim: "#a5b4fc15", amber: "#fcd34d", amberDim: "#fcd34d15",
};

function ProgressDots({ current, total }) {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} style={{
          width: i < current ? 14 : 5, height: 5, borderRadius: 3,
          background: i < current ? C.accent : C.border,
          transition: "all 0.3s ease",
        }} />
      ))}
    </div>
  );
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div style={{
      display: "flex", gap: "0.75rem", alignItems: "flex-start",
      animation: "fadeUp 0.25s ease", marginBottom: "1.25rem",
    }}>
      <div style={{
        width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
        background: isUser ? C.indigoDim : C.accentDim,
        border: `1px solid ${isUser ? C.indigo + "33" : C.accent + "33"}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "10px", marginTop: 4,
        color: isUser ? C.indigo : C.accent,
        fontFamily: "'DM Mono', monospace", fontWeight: 500,
      }}>
        {isUser ? "you" : "ai"}
      </div>
      <div style={{
        flex: 1, lineHeight: 1.75, color: isUser ? C.mutedHigh : C.text,
        fontFamily: isUser ? "'DM Mono', monospace" : "'DM Sans', sans-serif",
        fontSize: isUser ? "13px" : "14px", whiteSpace: "pre-wrap",
      }}>
        {content}
      </div>
    </div>
  );
}

function GeneratedOutput({ content }) {
  const [copied, setCopied] = useState(null);
  const sections = content.split(/(?===\s*FILE:|=== ACTIVATION)/).filter(s => s.trim());

  const copySection = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ animation: "fadeUp 0.4s ease" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        padding: "0.75rem 1rem",
        background: C.greenDim, border: `1px solid ${C.green}33`,
        borderRadius: 10, marginBottom: "0.85rem",
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, boxShadow: `0 0 8px ${C.green}` }} />
        <span style={{ fontSize: "13px", color: C.green, fontFamily: "'DM Mono', monospace" }}>
          13 agent files generated
        </span>
      </div>

      {sections.map((section, i) => {
        const isActivation = section.includes("ACTIVATION ORDER");
        const fileMatch = section.match(/===\s*FILE:\s*(.+?)\s*===/);
        const filename = isActivation ? "ACTIVATION ORDER" : (fileMatch ? fileMatch[1] : `Section ${i}`);
        const body = section.replace(/===.*?===/, "").trim();
        if (!body) return null;

        if (isActivation) {
          return (
            <div key={i} style={{
              marginBottom: "0.5rem", background: C.amberDim,
              border: `1px solid ${C.amber}33`, borderRadius: 10, padding: "1rem",
            }}>
              <div style={{ fontSize: "11px", color: C.amber, fontFamily: "'DM Mono', monospace", fontWeight: 600, marginBottom: "0.5rem" }}>
                ▸ ACTIVATION ORDER
              </div>
              <div style={{ fontSize: "13px", color: C.text, whiteSpace: "pre-wrap", lineHeight: 1.7 }}>{body}</div>
            </div>
          );
        }

        return (
          <details key={i} style={{ marginBottom: "0.35rem" }}>
            <summary style={{
              cursor: "pointer", padding: "0.55rem 0.85rem",
              background: C.surfaceHigh, border: `1px solid ${C.border}`,
              borderRadius: 8, fontSize: "12px", color: C.muted,
              fontFamily: "'DM Mono', monospace", listStyle: "none",
              display: "flex", alignItems: "center", gap: "0.5rem", userSelect: "none",
            }}>
              <span style={{ color: C.indigo }}>📄</span>
              <span style={{ color: C.text, flex: 1 }}>{filename}</span>
              <span style={{ fontSize: "10px" }}>▾ expand</span>
            </summary>
            <div style={{
              padding: "0.85rem 1rem", background: "#05050d",
              border: `1px solid ${C.border}`, borderTop: "none",
              borderRadius: "0 0 8px 8px", position: "relative",
            }}>
              <button
                onClick={() => copySection(body, i)}
                style={{
                  position: "absolute", top: 8, right: 8,
                  background: copied === i ? C.greenDim : C.surfaceHigh,
                  border: `1px solid ${copied === i ? C.green + "44" : C.border}`,
                  borderRadius: 6, padding: "2px 10px",
                  fontSize: "11px", color: copied === i ? C.green : C.muted,
                  cursor: "pointer", fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
                }}
              >
                {copied === i ? "copied ✓" : "copy"}
              </button>
              <pre style={{
                fontSize: "11.5px", color: C.mutedHigh,
                fontFamily: "'DM Mono', monospace", whiteSpace: "pre-wrap",
                lineHeight: 1.65, maxHeight: 280, overflowY: "auto",
                margin: 0, paddingRight: "3.5rem",
              }}>
                {body}
              </pre>
            </div>
          </details>
        );
      })}

      <div style={{
        marginTop: "1rem", padding: "0.85rem 1rem",
        background: C.indigoDim, border: `1px solid ${C.indigo}33`,
        borderRadius: 10, fontSize: "13px", color: C.indigo, lineHeight: 1.65,
      }}>
        <strong>Apply to your repo:</strong> Open in Claude Code with <code style={{ background: C.surface, padding: "2px 6px", borderRadius: 4 }}>claude .</code> and follow the prompt in <code>SETUP.md</code> to auto-patch all 13 files.
      </div>
    </div>
  );
}

export default function SetupWizard() {
  const [phase, setPhase] = useState("upload");
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [fileTexts, setFileTexts] = useState({});
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [generatedOutput, setGeneratedOutput] = useState("");
  const conversationRef = useRef([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const fileInputRef = useRef(null);
  const [activeUpload, setActiveUpload] = useState(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleFileUpload = (docId, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      setFileTexts(prev => ({ ...prev, [docId]: { name: file.name, text: text.slice(0, 8000) } }));
      setUploadedDocs(prev => ({ ...prev, [docId]: file.name }));
    };
    reader.readAsText(file);
  };

  const removeDoc = (docId) => {
    setUploadedDocs(prev => { const n = { ...prev }; delete n[docId]; return n; });
    setFileTexts(prev => { const n = { ...prev }; delete n[docId]; return n; });
  };

  const buildDocSummary = () => {
    const entries = Object.entries(fileTexts);
    if (!entries.length) return null;
    return entries.map(([id, { name, text }]) =>
      `[${UPLOAD_DOCS.find(d => d.id === id)?.label || id} — ${name}]\n${text}`
    ).join("\n\n---\n\n");
  };

  const buildSystemWithDocs = () => {
    const docSummary = buildDocSummary();
    if (!docSummary) return SYSTEM_PROMPT;
    return SYSTEM_PROMPT + `\n\nUPLOADED DOCUMENTS (treat as ground truth):\n\n${docSummary}`;
  };

  async function callClaude(userMessage) {
    conversationRef.current.push({ role: "user", content: userMessage });
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: buildSystemWithDocs(),
        messages: conversationRef.current,
      }),
    });
    const data = await res.json();
    const msg = data.content?.[0]?.text || "";
    conversationRef.current.push({ role: "assistant", content: msg });
    return msg;
  }

  async function startInterview() {
    setPhase("interview");
    setLoading(true);
    const docCount = Object.keys(uploadedDocs).length;
    const startMsg = docCount > 0
      ? `I'm ready to set up my growth repo. I've uploaded ${docCount} document(s): ${Object.values(uploadedDocs).join(", ")}. Let's get started.`
      : "I'm ready to set up my growth repo. No documents uploaded. Let's get started.";
    const first = await callClaude(startMsg);
    setMessages([{ role: "assistant", content: first }]);
    setQuestionCount(1);
    setLoading(false);
    setTimeout(() => inputRef.current?.focus(), 100);
  }

  async function handleSend() {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userText }]);
    setLoading(true);
    const response = await callClaude(userText);
    if (response.trim() === "GENERATING_CONTEXT") {
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Perfect — I have everything I need. Generating complete context blocks for all 13 agent files now...",
      }]);
      setPhase("generating");
      setLoading(false);
      setTimeout(async () => {
        const transcript = conversationRef.current
          .map(m => `${m.role.toUpperCase()}: ${m.content}`).join("\n\n");
        const genRes = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 8000,
            messages: [{ role: "user", content: GENERATION_PROMPT(transcript, buildDocSummary()) }],
          }),
        });
        const genData = await genRes.json();
        setGeneratedOutput(genData.content?.[0]?.text || "");
        setMessages(prev => [...prev, { role: "assistant", content: "__GENERATED__" }]);
        setPhase("done");
      }, 600);
    } else {
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
      setQuestionCount(prev => prev + 1);
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const uploadedCount = Object.keys(uploadedDocs).length;

  return (
    <div style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      background: C.bg, minHeight: "100vh", color: C.text,
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #1c1c30; border-radius: 2px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(6px); } to { opacity:1; transform:none; } }
        @keyframes pulse { 0%,100%{opacity:.3} 50%{opacity:1} }
        details summary::-webkit-details-marker { display: none; }
        textarea { resize: none; outline: none; }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "0.85rem 1.5rem", borderBottom: `1px solid ${C.border}`,
        background: C.surface, display: "flex", alignItems: "center", gap: "0.85rem",
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: 7,
          background: `linear-gradient(135deg, ${C.indigo}33, ${C.accent}33)`,
          border: `1px solid ${C.indigo}22`,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px",
        }}>◆</div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 600 }}>Growth Repo — Client Setup</div>
          <div style={{ fontSize: "10px", color: C.muted, fontFamily: "'DM Mono', monospace" }}>
            {phase === "upload" && "Step 1 of 2 — Upload documents (optional)"}
            {phase === "interview" && `Step 2 of 2 — Interview · Q${Math.min(questionCount, 10)} of 10`}
            {phase === "generating" && "Generating 13 agent context blocks..."}
            {phase === "done" && "Setup complete — 13 files ready"}
          </div>
        </div>
        {phase === "interview" && (
          <div style={{ marginLeft: "auto" }}>
            <ProgressDots current={questionCount} total={10} />
          </div>
        )}
        {phase === "generating" && (
          <div style={{ marginLeft: "auto", fontSize: "11px", color: C.accent, fontFamily: "'DM Mono', monospace", animation: "pulse 1.5s infinite" }}>
            generating...
          </div>
        )}
      </div>

      {/* Body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>

        {/* UPLOAD */}
        {phase === "upload" && (
          <div style={{ maxWidth: 540, margin: "0 auto", animation: "fadeUp 0.4s ease" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ fontSize: "22px", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                Upload what you have.<br />
                <span style={{ color: C.accent }}>AI fills in the rest.</span>
              </div>
              <div style={{ fontSize: "13px", color: C.muted, lineHeight: 1.7 }}>
                The more context you provide upfront, the less the interview needs to cover —
                and the more specific your agent files will be. Brand guidelines and goals are
                the highest-value uploads.
              </div>
            </div>

            <div style={{ marginBottom: "0.6rem", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <div style={{ fontSize: "11px", color: C.muted, fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Documents
              </div>
              <div style={{ fontSize: "11px", color: C.muted, fontFamily: "'DM Mono', monospace" }}>
                .pdf · .txt · .md · .docx · .csv
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.45rem", marginBottom: "1.5rem" }}>
              {UPLOAD_DOCS.map(doc => (
                <div
                  key={doc.id}
                  onClick={() => {
                    if (uploadedDocs[doc.id]) return;
                    setActiveUpload(doc.id);
                    fileInputRef.current.click();
                  }}
                  style={{
                    padding: "0.7rem 0.85rem",
                    background: uploadedDocs[doc.id] ? C.greenDim : C.surface,
                    border: `1px solid ${uploadedDocs[doc.id] ? C.green + "44" : C.border}`,
                    borderRadius: 10,
                    cursor: uploadedDocs[doc.id] ? "default" : "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "15px", marginTop: 1 }}>{doc.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: "12px", fontWeight: 500,
                        color: uploadedDocs[doc.id] ? C.green : C.text,
                        display: "flex", alignItems: "center", gap: "0.35rem",
                      }}>
                        {doc.label}
                        {doc.priority === "high" && !uploadedDocs[doc.id] && (
                          <span style={{ fontSize: "9px", color: C.amber, fontFamily: "'DM Mono', monospace" }}>rec</span>
                        )}
                      </div>
                      <div style={{ fontSize: "10.5px", color: uploadedDocs[doc.id] ? C.green : C.muted, marginTop: "1px" }}>
                        {uploadedDocs[doc.id]
                          ? <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                              ✓ {uploadedDocs[doc.id].length > 22 ? uploadedDocs[doc.id].slice(0, 22) + "…" : uploadedDocs[doc.id]}
                              <span
                                onClick={(e) => { e.stopPropagation(); removeDoc(doc.id); }}
                                style={{ cursor: "pointer", opacity: 0.55, marginLeft: 2 }}
                              >✕</span>
                            </span>
                          : doc.desc
                        }
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.txt,.md,.doc,.docx,.csv,.json"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files[0] && activeUpload) {
                  handleFileUpload(activeUpload, e.target.files[0]);
                }
                e.target.value = "";
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button
                onClick={startInterview}
                style={{
                  background: `linear-gradient(135deg, ${C.indigo}cc, ${C.accent}88)`,
                  border: "none", borderRadius: 10, padding: "0.75rem 1.5rem",
                  color: C.bg, fontSize: "13px", fontWeight: 600,
                  cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {uploadedCount > 0
                  ? `Continue with ${uploadedCount} doc${uploadedCount !== 1 ? "s" : ""} →`
                  : "Skip docs and continue →"}
              </button>
              {uploadedCount === 0 && (
                <span style={{ fontSize: "11.5px", color: C.muted }}>
                  Docs are optional — questions cover everything.
                </span>
              )}
            </div>
          </div>
        )}

        {/* INTERVIEW / DONE */}
        {(phase === "interview" || phase === "generating" || phase === "done") && (
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            {uploadedCount > 0 && (
              <div style={{
                display: "flex", flexWrap: "wrap", gap: "0.4rem",
                marginBottom: "1.25rem", padding: "0.6rem 0.85rem",
                background: C.surface, border: `1px solid ${C.border}`, borderRadius: 8,
              }}>
                <span style={{ fontSize: "10px", color: C.muted, fontFamily: "'DM Mono', monospace", alignSelf: "center", marginRight: "0.2rem" }}>using:</span>
                {Object.entries(uploadedDocs).map(([id, name]) => (
                  <span key={id} style={{
                    fontSize: "11px", color: C.green,
                    background: C.greenDim, border: `1px solid ${C.green}33`,
                    borderRadius: 20, padding: "1px 8px",
                  }}>
                    {UPLOAD_DOCS.find(d => d.id === id)?.icon} {UPLOAD_DOCS.find(d => d.id === id)?.label}
                  </span>
                ))}
              </div>
            )}

            {messages.map((msg, i) => (
              msg.content === "__GENERATED__"
                ? <GeneratedOutput key={i} content={generatedOutput} />
                : <Message key={i} role={msg.role} content={msg.content} />
            ))}

            {loading && (
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{
                  width: 26, height: 26, borderRadius: "50%",
                  background: C.accentDim, border: `1px solid ${C.accent}33`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "10px", color: C.accent, fontFamily: "'DM Mono', monospace",
                }}>ai</div>
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 5, height: 5, borderRadius: "50%", background: C.accent,
                      animation: `pulse 1.2s ease ${i * 0.2}s infinite`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input */}
      {phase === "interview" && (
        <div style={{ padding: "0.9rem 1.5rem", borderTop: `1px solid ${C.border}`, background: C.surface }}>
          <div style={{ maxWidth: 620, margin: "0 auto", display: "flex", gap: "0.6rem", alignItems: "flex-end" }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Your answer..."
              rows={1}
              style={{
                flex: 1, background: C.bg,
                border: `1px solid ${input ? C.accent + "44" : C.border}`,
                borderRadius: 10, padding: "0.65rem 0.9rem",
                color: C.text, fontSize: "13px",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: 1.5, maxHeight: 100, overflowY: "auto",
                transition: "border-color 0.15s",
              }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: input.trim() && !loading
                  ? `linear-gradient(135deg, ${C.indigo}cc, ${C.accent}88)`
                  : C.border,
                border: "none",
                cursor: input.trim() && !loading ? "pointer" : "default",
                color: C.bg, fontSize: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.15s",
              }}
            >↑</button>
          </div>
          <div style={{ maxWidth: 620, margin: "0.35rem auto 0", fontSize: "10px", color: C.muted, fontFamily: "'DM Mono', monospace" }}>
            Enter to send · Shift+Enter for new line
          </div>
        </div>
      )}
    </div>
  );
}
