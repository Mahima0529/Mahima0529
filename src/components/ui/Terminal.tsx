import React, { useState } from 'react';
import { Copy, Check, Terminal as TerminalIcon, ShieldCheck, Activity, Cpu } from 'lucide-react';

export const Terminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rateLimiter' | 'kafka' | 'status'>('rateLimiter');
  const [copied, setCopied] = useState(false);

  const snippets = {
    rateLimiter: `// Redis Sliding-Window Rate Limiting Engine
export async function enforceRateLimit(ip: string, limit = 100, windowSec = 60) {
  const key = \`ratelimit:\${ip}\`;
  const now = Date.now();
  const clearBefore = now - (windowSec * 1000);

  const multi = redis.multi();
  multi.zremrangebyscore(key, 0, clearBefore);
  multi.zadd(key, now, now.toString());
  multi.zcard(key);
  multi.expire(key, windowSec);

  const [, , reqCount] = await multi.exec();
  if (reqCount > limit) {
    await kafkaProducer.send({
      topic: 'security.abuse_events',
      messages: [{ value: JSON.stringify({ ip, reqCount, action: 'TEMP_BLOCK' }) }]
    });
    return { allowed: false, retryAfter: windowSec };
  }
  return { allowed: true, remaining: limit - reqCount };
}`,
    kafka: `// Apache Kafka Event Telemetry Pipeline
const kafka = new Kafka({ clientId: 'abuse-detector', brokers: [KAFKA_BROKER] });
const consumer = kafka.consumer({ groupId: 'telemetry-eval-group' });

await consumer.connect();
await consumer.subscribe({ topic: 'api.traffic.telemetry', fromBeginning: false });

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const event = JSON.parse(message.value.toString());
    const riskScore = calculateBehavioralRisk(event);
    
    if (riskScore >= 85) {
      await redis.setex(\`blocked:\${event.clientIp}\`, 3600, 'ABUSE_TRIGGER');
      broadcastSecurityAlert(event.clientIp, riskScore);
    }
  }
});`,
    status: `$ curl -s https://api.mahimapatel.dev/status | jq .
{
  "engineer": "Mahima Patel",
  "roles": ["Frontend", "Backend", "Full-Stack", "SDE"],
  "institute": "IIIT Bhagalpur ('27)",
  "cgpa": "8.68 / 10",
  "credentials": [
    "GATE (CS) 2026 Qualified",
    "ServiceNow CSA & CAD Certified"
  ],
  "dsa_solved": "250+ (LeetCode / CodeChef)",
  "stack": {
    "frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    "backend": ["Node.js", "Express", "Microservices", "REST APIs"],
    "in_memory": "Redis (Sliding Window & Cluster)",
    "streaming": "Apache Kafka Event Bus",
    "databases": ["PostgreSQL", "MongoDB Atlas", "Prisma"]
  },
  "status": "Available for Frontend, Backend, Full-Stack & SDE Roles"
}`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-slate-700/70 bg-slate-950/95 shadow-2xl shadow-sky-950/40 text-xs sm:text-sm font-mono transition-all">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-slate-400 font-sans text-xs ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
            mahima-workspace
          </span>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label="Copy code snippet"
          className="flex items-center gap-1 text-slate-400 hover:text-sky-400 text-xs transition-colors px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800/80 bg-slate-900/50 px-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('rateLimiter')}
          className={`flex items-center gap-1.5 py-2 px-3 border-b-2 text-xs font-mono transition-colors whitespace-nowrap ${
            activeTab === 'rateLimiter'
              ? 'border-sky-400 text-sky-400 bg-sky-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          rate-limiter.ts
        </button>
        <button
          onClick={() => setActiveTab('kafka')}
          className={`flex items-center gap-1.5 py-2 px-3 border-b-2 text-xs font-mono transition-colors whitespace-nowrap ${
            activeTab === 'kafka'
              ? 'border-sky-400 text-sky-400 bg-sky-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cpu className="w-3.5 h-3.5" />
          kafka-stream.ts
        </button>
        <button
          onClick={() => setActiveTab('status')}
          className={`flex items-center gap-1.5 py-2 px-3 border-b-2 text-xs font-mono transition-colors whitespace-nowrap ${
            activeTab === 'status'
              ? 'border-sky-400 text-sky-400 bg-sky-950/20'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          status.sh
        </button>
      </div>

      {/* Code / Output Area */}
      <div className="p-4 overflow-x-auto text-slate-300 leading-relaxed max-h-[330px] overflow-y-auto">
        <pre className="text-[12px] sm:text-[13px] font-mono whitespace-pre text-slate-300">
          <code>{snippets[activeTab]}</code>
        </pre>
      </div>

      {/* Terminal Footer Bar */}
      <div className="px-4 py-1.5 bg-slate-900/70 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Node.js v22 • Redis 7 • Kafka 3.6</span>
        </div>
        <span className="text-slate-500">UTF-8</span>
      </div>
    </div>
  );
};
