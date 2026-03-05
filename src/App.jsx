import { useState, useEffect } from "react";

const C = {
  bg: "#06090F",
  surface: "#0C1220",
  card: "#111827",
  border: "#1C2740",
  cyan: "#00C8FF",
  coral: "#FF6B6B",
  green: "#00D68F",
  yellow: "#FFD93D",
  purple: "#A855F7",
  white: "#F1F5F9",
  dim: "#64748B",
  muted: "#475569",
};

function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    }}>
      {children}
    </div>
  );
}

function Chip({ color = C.cyan, children }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 10px", borderRadius: 4,
      fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase",
      background: color + "12", color, border: `1px solid ${color}28`,
    }}>
      {children}
    </span>
  );
}

function Divider() {
  return <div style={{ height: 1, background: `linear-gradient(90deg, ${C.cyan}33, transparent)`, margin: "56px 0" }} />;
}

export default function App() {
  return (
    <div style={{
      minHeight: "100vh", background: C.bg, color: C.white,
      fontFamily: "'Outfit', 'Segoe UI', system-ui, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "60px 24px 80px" }}>
        {/* ── HEADER ── */}
        <FadeIn>
          <div style={{ marginBottom: 48 }}>
            <Chip>Business Case · Março 2026</Chip>
            <h1 style={{
              fontSize: 44, fontWeight: 800, lineHeight: 1.1, margin: "20px 0 0",
              fontFamily: "'Outfit', sans-serif", letterSpacing: -1,
            }}>
              Leadster Activate
            </h1>
            <p style={{ fontSize: 18, color: C.dim, marginTop: 12, lineHeight: 1.5, fontWeight: 300 }}>
              Um AI SDR Agent que transforma leads coletados em reuniões agendadas
              — na mesma noite do evento, sem esforço do expositor.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontSize: 13, color: C.white, fontWeight: 600 }}>Isis Ramos</span>
              <span style={{ fontSize: 12, color: C.muted }}>Senior Product Manager</span>
              <span style={{ fontSize: 12, color: C.muted }}>·</span>
              <span style={{ fontSize: 12, color: C.muted }}>Vaga Product Specialist — Informa Markets Latam</span>
            </div>
          </div>
        </FadeIn>

        {/* ── O PROBLEMA ── */}
        <FadeIn delay={100}>
          <div style={{
            background: C.surface, borderRadius: 12, padding: "32px",
            border: `1px solid ${C.border}`, position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: `linear-gradient(90deg, ${C.coral}, ${C.yellow})`,
            }} />
            <div style={{ display: "flex", gap: 32, alignItems: "flex-start", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 320px" }}>
                <Chip color={C.coral}>O Problema</Chip>
                <p style={{ fontSize: 15, lineHeight: 1.7, color: C.white, marginTop: 14, marginBottom: 0 }}>
                  Expositores investem dezenas de milhares de reais em feiras B2B
                  e <span style={{ color: C.coral, fontWeight: 600 }}>não conseguem fazer follow-up</span> com a maioria dos leads coletados.
                  O primeiro contato leva dias. Às vezes, semanas.
                </p>
              </div>
              <div style={{
                flex: "0 0 auto", background: C.card, borderRadius: 10,
                padding: "24px 28px", textAlign: "center", border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontSize: 42, fontWeight: 800, color: C.cyan, fontFamily: "'Space Mono', monospace" }}>7x</div>
                <div style={{ fontSize: 12, color: C.dim, marginTop: 6, maxWidth: 160, lineHeight: 1.4 }}>
                  mais chance de diálogo com decisores na primeira hora
                </div>
                <div style={{ fontSize: 10, color: C.muted, marginTop: 8 }}>HBR via Martal Group</div>
              </div>
            </div>
          </div>
        </FadeIn>

        <Divider />

        {/* ── A TESE ── */}
        <FadeIn delay={200}>
          <Chip>A Tese</Chip>
          <p style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.5, marginTop: 16, letterSpacing: -0.3 }}>
            O Leadster já captura leads. O Leadster+ expande o alcance.
            <br />
            <span style={{ color: C.cyan }}>O Activate fecha o loop</span> — convertendo leads em reuniões
            via AI Agent, com consentimento explícito do visitante.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 20, alignItems: "center", flexWrap: "wrap" }}>
            {[
              { name: "Leadster", role: "Captura", c: C.muted },
              { name: "Leadster+", role: "Expansão", c: C.dim },
              { name: "Activate", role: "Conversão", c: C.cyan },
            ].map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{
                  padding: "8px 16px", borderRadius: 8, textAlign: "center",
                  background: p.c === C.cyan ? C.cyan + "15" : C.card,
                  border: `1px solid ${p.c === C.cyan ? C.cyan + "44" : C.border}`,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: p.c === C.cyan ? C.cyan : C.white }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: C.dim }}>{p.role}</div>
                </div>
                {i < 2 && <span style={{ color: C.muted, fontSize: 16 }}>→</span>}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── COMO ── */}
        <FadeIn delay={300}>
          <Chip color={C.green}>Design Principles</Chip>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 14, marginBottom: 20 }}>
            Construído sobre confiança, não volume
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { title: "Opt-in por expositor", desc: "Visitante autoriza contato no momento do scan. Design LGPD-first.", color: C.green },
              { title: "Janela de inteligência", desc: "Sistema espera o fim do dia de feira antes de agir. Timing deliberado.", color: C.cyan },
              { title: "Guardrails em camadas", desc: "Prompt controlado, validação pós-geração, revisão humana no piloto.", color: C.purple },
              { title: "Envio em nome do expositor", desc: "Reply-to direto ao expositor. Transparência total.", color: C.yellow },
            ].map((item, i) => (
              <div key={i} style={{
                background: C.surface, borderRadius: 10, padding: "20px",
                border: `1px solid ${C.border}`, borderLeft: `3px solid ${item.color}`,
              }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.white, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── VALIDAÇÃO ── */}
        <FadeIn delay={400}>
          <Chip color={C.purple}>Plano de Validação</Chip>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 14, marginBottom: 8 }}>
            Quatro gates antes de escalar
          </h2>
          <p style={{ color: C.dim, fontSize: 14, marginBottom: 24, lineHeight: 1.5 }}>
            Cada fase tem critérios explícitos de Go/No-Go. Nada avança sem evidência.
          </p>
          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute", left: 15, top: 8, bottom: 8, width: 2,
              background: `linear-gradient(180deg, ${C.cyan}, ${C.green}, ${C.yellow}, ${C.purple}, ${C.coral})`,
              borderRadius: 1,
            }} />
            {[
              { phase: "Discovery", time: "Q1 2026", gate: "Go/No-Go: problema validado + sizing relevante", color: C.cyan },
              { phase: "Build MVP", time: "Q2 2026", gate: "Readiness: opt-in funcional + warm-up email concluído", color: C.green },
              { phase: "Piloto", time: "Q3 2026", gate: "Go/No-Go: opt-in, reply rate, NPS, custo/lead", color: C.yellow },
              { phase: "Prep GTM", time: "Q4 2026", gate: "Launch Readiness: self-service + billing + time treinado", color: C.purple },
              { phase: "GTM 2027", time: "2027", gate: "Wave 1 (3-5 eventos) → Wave 2 (8-12 eventos)", color: C.coral },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 20, paddingLeft: 40, position: "relative" }}>
                <div style={{
                  position: "absolute", left: 8, top: 4, width: 16, height: 16,
                  borderRadius: 8, background: item.color, border: `3px solid ${C.bg}`,
                }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: C.white }}>{item.phase}</span>
                    <span style={{ fontSize: 11, color: item.color, fontWeight: 600 }}>{item.time}</span>
                  </div>
                  <div style={{ fontSize: 12, color: C.dim, lineHeight: 1.5 }}>{item.gate}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── MÉTRICAS ── */}
        <FadeIn delay={500}>
          <Chip color={C.yellow}>Measurement</Chip>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 14, marginBottom: 8 }}>
            North Star: Reuniões Geradas via Activate
          </h2>
          <p style={{ color: C.dim, fontSize: 14, marginBottom: 24, lineHeight: 1.5 }}>
            Último ponto do funil com visibilidade confiável.
            Não é "receita gerada" — medir algo fora do controle do produto
            gera métricas ruidosas e incentivos desalinhados.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { label: "Funnel Metrics", count: "6 KPIs", color: C.cyan, hint: "Do opt-in à reunião confirmada" },
              { label: "Quality & Trust", count: "4 KPIs", color: C.green, hint: "Opt-out, spam, NPS, qualidade" },
              { label: "Business & Retention", count: "5 KPIs", color: C.purple, hint: "Custo, recompra, revenue influenced" },
            ].map((layer, i) => (
              <div key={i} style={{
                background: C.surface, borderRadius: 10, padding: "18px 16px",
                border: `1px solid ${C.border}`, borderTop: `3px solid ${layer.color}`,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: layer.color, fontFamily: "'Space Mono', monospace" }}>{layer.count}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: C.white, marginTop: 6 }}>{layer.label}</div>
                <div style={{ fontSize: 11, color: C.dim, marginTop: 4 }}>{layer.hint}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── MODELO ── */}
        <FadeIn delay={600}>
          <Chip color={C.green}>Modelo de Negócio</Chip>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 14, marginBottom: 8 }}>
            Pricing que evolui com a maturidade do produto
          </h2>
          <p style={{ color: C.dim, fontSize: 14, marginBottom: 24, lineHeight: 1.5 }}>
            De fee fixa no piloto a pricing baseado em valor.
            O incentivo se alinha: Informa ganha mais quando o expositor converte mais.
          </p>
          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            {[
              { stage: "Piloto 2026", model: "Fixed fee por evento", color: C.cyan },
              { stage: "GTM 2027", model: "Tiered por volume de leads com opt-in", color: C.green },
              { stage: "2028+", model: "Value-based: fee + % sobre pipeline", color: C.purple },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
                <div style={{
                  flex: 1, background: C.surface, borderRadius: 10, padding: "18px 16px",
                  border: `1px solid ${C.border}`, borderLeft: `3px solid ${s.color}`,
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: s.color, marginBottom: 6 }}>{s.stage}</div>
                  <div style={{ fontSize: 13, color: C.white, fontWeight: 500, lineHeight: 1.4 }}>{s.model}</div>
                </div>
                {i < 2 && <span style={{ color: C.muted, fontSize: 14, flexShrink: 0 }}>→</span>}
              </div>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── RISCOS (teaser) ── */}
        <FadeIn delay={700}>
          <Chip color={C.coral}>Riscos</Chip>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginTop: 14, marginBottom: 8 }}>
            18 riscos mapeados. 6 para resolver antes do build.
          </h2>
          <p style={{ color: C.dim, fontSize: 14, marginBottom: 20, lineHeight: 1.5 }}>
            Cada risco tem severidade, probabilidade e mitigação definida.
            Os 5 críticos têm ação no Q1 2026 — antes de escrever uma linha de código.
          </p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              "Formato opt-in LGPD", "Qualidade dados Leadster", "Taxa de opt-in",
              "Qualidade mensagem LLM", "Entregabilidade email", "Resistência do expositor",
            ].map((r, i) => (
              <span key={i} style={{
                padding: "6px 14px", borderRadius: 6, fontSize: 12,
                background: i < 5 ? C.coral + "12" : C.yellow + "12",
                color: i < 5 ? C.coral : C.yellow,
                border: `1px solid ${i < 5 ? C.coral : C.yellow}22`,
              }}>
                {r}
              </span>
            ))}
          </div>
        </FadeIn>

        <Divider />

        {/* ── CTA / CLOSING ── */}
        <FadeIn delay={800}>
          <div style={{
            background: `linear-gradient(135deg, ${C.surface}, ${C.card})`,
            borderRadius: 12, padding: "40px 32px", textAlign: "center",
            border: `1px solid ${C.border}`,
          }}>
            <div style={{ fontSize: 12, color: C.cyan, fontWeight: 700, letterSpacing: 1, marginBottom: 12 }}>
              PRÓXIMO PASSO
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: "0 0 12px", lineHeight: 1.3 }}>
              Este é o racional por trás do produto.
              <br />
              <span style={{ color: C.dim, fontWeight: 400, fontSize: 18 }}>
                Na apresentação, vamos ao detalhe.
              </span>
            </h2>
            <p style={{ color: C.muted, fontSize: 13, marginTop: 16, lineHeight: 1.5, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Arquitetura técnica, fluxo de opt-in, prompt engineering, unit economics,
              jornada completa do expositor e operação ao vivo — tudo mapeado.
            </p>
            <div style={{
              marginTop: 28, padding: "14px 28px", display: "inline-block",
              background: C.cyan + "12", borderRadius: 8,
              border: `1px solid ${C.cyan}33`,
            }}>
              <span style={{ color: C.cyan, fontSize: 14, fontWeight: 600 }}>Isis Ramos</span>
              <span style={{ color: C.muted, fontSize: 13, marginLeft: 12 }}>isis.gramos@gmail.com</span>
            </div>
          </div>
        </FadeIn>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 48, paddingBottom: 20 }}>
          <div style={{ fontSize: 10, color: C.muted, lineHeight: 1.6 }}>
            Leadster Activate — Business Case · Vaga Product Specialist · Informa Markets Latam · Março 2026
          </div>
        </div>
      </div>
    </div>
  );
}
