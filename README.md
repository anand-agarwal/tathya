# Tathya

Census chatbot for India (C-series 2001/2011 via the same Supabase project as Bachpan, plus web search).

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Vercel

New project, root `.`, framework Vite. Set `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `GROQ_API_KEY`, and optionally `FIRECRAWL_API_KEY` / `GROQ_MODEL` on Production and Preview. Do not add the Supabase service-role key.
