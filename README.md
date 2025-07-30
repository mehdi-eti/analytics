# 📊 Analytics – Privacy-Friendly Web Analytics with Next.js

<div align="center">
  <img src="https://fascinating-haupia-f4b311.netlify.app/images/analytics.jpeg" alt="Analytics Dashboard" width="800" />
</div>

A modern and privacy-friendly web analytics dashboard — like Google Analytics, but open-source and built with **Next.js**. Track visitors, sessions, active users, top devices, locations, and more, with a clean and responsive UI.

---

## ✨ Features

- 🧠 **Real-time analytics**: sessions, active users, and click events
- 🌍 **Geolocation**: see where your users are from (country-level)
- 📱 **Device & browser detection**: desktop, mobile, tablet + browser type
- 🔄 **Live session tracking**: see new visits instantly without refresh
- 📈 **Clean dashboard UI**: chart visualizations for trends and insights
- 🔐 **Privacy-respecting**: no cookies, no fingerprinting (unless added)
- 🪄 **Self-hosted & scalable**: deploy on your own infrastructure

---

## ⚙️ Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS** — modern utility-first styling
- **TypeScript** — type safety throughout the app
- **MongoDB / any DB (optional)** — for persistent analytics (optional layer)
- **Vercel Edge / Middleware** — for fast page tracking
- **Geo-IP APIs** — detect location via IP address
- **User-Agent Parsing** — identify OS, device, and browser

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/mehdi-eti/analytics.git
cd analytics
npm install
npm run dev
