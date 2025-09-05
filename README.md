<div align="center">
  <h1>Meet AI — AI‑Powered Meetings Platform 🚀</h1>

  <p>Run AI‑assisted meetings with real‑time agents, high‑quality video, automatic transcripts & summaries, and a delightful dashboard. Create your own AI agents, host calls, and continue the conversation after the meeting — type‑safe and production‑ready.</p>
</div>

![Dashboard](/public/readme-images/home.png)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![tRPC](https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white)](https://trpc.io/)
[![Inngest](https://img.shields.io/badge/Inngest-111827?style=for-the-badge&logo=thunderbird&logoColor=white)](https://www.inngest.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Stream](https://img.shields.io/badge/Stream_Video_%26_Chat-0E75FF?style=for-the-badge&logo=streamlit&logoColor=white)](https://getstream.io/)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![better‑auth](https://img.shields.io/badge/better--auth-000000?style=for-the-badge&logo=shield&logoColor=white)](https://better-auth.com/)
[![Polar](https://img.shields.io/badge/Polar-121212?style=for-the-badge&logo=heart&logoColor=white)](https://polar.sh/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![DiceBear](https://img.shields.io/badge/DiceBear-FF6B6B?style=for-the-badge&logo=dice&logoColor=white)](https://dicebear.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)
[![nuqs](https://img.shields.io/badge/nuqs-000000?style=for-the-badge&logo=search&logoColor=white)](https://nuqs.47ng.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

</div>

## ✨ Features

<div align="center">

| Feature                         | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| 🔐 Authentication               | Sign in with email/password or social (GitHub, Google) via better‑auth |
| 🎭 AI Agents                    | Create custom agents with your own instructions                        |
| 🎥 Video Meetings               | Host calls with Stream Video (HD, recording, transcription)            |
| ⚡ Realtime AI in Calls         | OpenAI Realtime agent connected to your call via Stream                |
| 📝 Auto Transcripts & Summaries | Inngest job processes transcripts and saves structured summaries       |
| 💬 Post‑Meeting Chat            | Continue chatting in Stream Chat, grounded in the meeting summary      |
| 💳 Billing & Upgrades           | Payments/portal powered by Polar                                       |
| 🧩 Type‑Safe APIs               | End‑to‑end type safety with tRPC + Zod                                 |
| 🎛️ Admin‑friendly Dashboard     | Manage agents, meetings, and account in a clean UI                     |
| 🌙 Responsive UI                | Tailwind + shadcn/ui components,                                       |

</div>

## 🌟 Tech Highlights

- **Realtime AI in Calls**: Stream Video integrates with OpenAI Realtime to drive an agent during live calls
- **Automatic Summaries**: Inngest consumes the call transcript and generates structured summaries
- **Post‑Call Chat**: Stream Chat + OpenAI continue helpful conversation using the saved summary
- **Type‑Safe Everything**: Drizzle ORM + tRPC + Zod across the stack
- **Production‑Ready Auth & Billing**: better‑auth with social providers and Polar checkout/portal

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/meet-ai.git
cd meet-ai

# Install dependencies
npm install
# or
pnpm install

# Create your .env from the variables below and fill the values

# Push database schema
npm run db:push

# Start the development server
npm run dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Frameworks & Libraries

- **[Next.js](https://nextjs.org/)** – App Router, server components
- **[React](https://react.dev/)** – UI library
- **[TypeScript](https://www.typescriptlang.org/)** – Types everywhere
- **[Zod](https://zod.dev/)** – Schema validation
- **[React Hook Form](https://react-hook-form.com/)** – Performant forms
- **[TanStack Query](https://tanstack.com/query/latest)** – Client data fetching/caching
- **[TanStack Table](https://tanstack.com/table/latest)** – Powerful tables

### Backend & Database

- **[Drizzle ORM](https://orm.drizzle.team/)** – Type‑safe queries and migrations
- **[PostgreSQL](https://www.postgresql.org/)** – Primary database
- **[Neon](https://neon.tech/)** – Serverless Postgres (via `@neondatabase/serverless`)
- **[tRPC](https://trpc.io/)** – End‑to‑end typesafe API
- **[Inngest](https://www.inngest.com/)** – Background jobs for transcript summarization

### AI, Realtime & Media

- **[OpenAI](https://openai.com/)** – Chat & realtime models
- **[Stream Video](https://getstream.io/video/)** – Calls, recording, transcription
- **[Stream Chat](https://getstream.io/chat/)** – In‑app chat and channels

### Auth & Billing

- **[better‑auth](https://better-auth.com/)** – Authentication with email/password and social login
- **[Polar](https://polar.sh/)** – Checkout and customer portal (sandbox)

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** – Utility‑first CSS (v4)
- **[shadcn/ui](https://ui.shadcn.com/)** – Composable components (Radix UI)
- **[Lucide](https://lucide.dev/)** – Icon set

### Development Tools

- **[ESLint](https://eslint.org/)** – Linting
- **[Drizzle Kit](https://orm.drizzle.team/kit-docs/overview)** – Migrations & studio
- **[TSX](https://github.com/esbuild-kit/tsx)** – TS runner

</details>

## 📸 Screenshots

<div align="center">

### ⚡ Upgrade

![Upgrade](/public/readme-images/upgrade.png)

### 💳 Billing

![Billing](/public/readme-images/billing.png)

### 🤖 Agent

![Agents](/public/readme-images/agents.png)
![New Agent](/public/readme-images/new-agent.png)

### 📹 Meeting

![Meetings](/public/readme-images/meetings.png)
![New Meeting](/public/readme-images/new-meeting.png)
![Meeting Call](/public/readme-images/meeting-call.png)
![Meeting Summary](/public/readme-images/meeting-summary.png)
![Meeting Transcript](/public/readme-images/meeting-transcript.png)
![Meeting Chat](/public/readme-images/meeting-ai-chat.png)

</div>

## 🔐 Environment Variables

Create a `.env` file in the project root and add the variables below.

| Variable                           | Description                            | Used In                     |
| ---------------------------------- | -------------------------------------- | --------------------------- |
| `DATABASE_URL`                     | Postgres connection string             | Drizzle/Neon                |
| `NEXT_PUBLIC_APP_URL`              | Base URL used server‑side for requests | tRPC client                 |
| `BETTER_AUTH_SECRET`               | Secret key for better‑auth             | better‑auth                 |
| `BETTER_AUTH_URL`                  | Base URL for better‑auth callbacks     | better‑auth                 |
| `GITHUB_CLIENT_ID`                 | GitHub OAuth client id                 | better‑auth social          |
| `GITHUB_CLIENT_SECRET`             | GitHub OAuth secret                    | better‑auth social          |
| `GOOGLE_CLIENT_ID`                 | Google OAuth client id                 | better‑auth social          |
| `GOOGLE_CLIENT_SECRET`             | Google OAuth secret                    | better‑auth social          |
| `NEXT_PUBLIC_STREAM_VIDEO_API_KEY` | Stream Video public key                | Stream Video (client)       |
| `STREAM_VIDEO_SECRET_KEY`          | Stream Video secret                    | Stream Video (server)       |
| `NEXT_PUBLIC_STREAM_CHAT_API_KEY`  | Stream Chat public key                 | Stream Chat (client)        |
| `STREAM_CHAT_SECRET_KEY`           | Stream Chat secret                     | Stream Chat (server)        |
| `OPENAI_API_KEY`                   | OpenAI API key                         | Webhooks, Inngest, Realtime |
| `POLAR_ACCESS_TOKEN`               | Polar API token (sandbox)              | Billing (Polar)             |
| `NGROK_URL`                        | ngrok tunnel URL for webhooks          | Development tunneling       |

```env
# Database
DATABASE_URL=

# Next
NEXT_PUBLIC_APP_URL=

# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# getStream.io
NEXT_PUBLIC_STREAM_VIDEO_API_KEY=
STREAM_VIDEO_SECRET_KEY=
NEXT_PUBLIC_STREAM_CHAT_API_KEY=
STREAM_CHAT_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# Polar.sh
POLAR_ACCESS_TOKEN=

#ngrok
ngrok http --url=
```
