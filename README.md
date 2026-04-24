# ⚡ FlashAI — AI Flashcard Generator

Turn your notes into flashcards instantly using AI.


---

## 🚀 What It Does

Paste any text — lecture notes, textbook paragraphs, Wikipedia articles — and FlashAI instantly generates 8 study flashcards using AI. Click each card to flip and reveal the answer.

---

## ✨ Features

- 🤖 AI-generated flashcards from any text
- 🃏 Smooth card flip animation
- ⬅➡ Previous / Next navigation
- ⚡ Fast responses powered by Groq + Llama 3
- 🎨 Playful dark UI with no frameworks

---

## 🛠️ Tech Stack

- HTML, CSS, Vanilla JavaScript
- [Groq API](https://console.groq.com) — free AI inference
- Llama 3.1 model

---

## 🔧 Setup & Run Locally

1. Clone the repo
```bash
   git clone https://github.com/YOUR_USERNAME/flashai.git
   cd flashai
```

2. Get a free API key from [console.groq.com](https://console.groq.com)

3. Open `script.js` and paste your key:
```js
   const API_KEY = 'your-groq-api-key-here';
```

4. Open `index.html` with Live Server in VS Code

---

## 📁 Project Structure

flashai/
├── index.html   — app structure
├── style.css    — styling + card flip animation
└── script.js    — API call + flashcard logic


---

## ⚠️ Note

This is a client-side demo project. The API key is stored in the frontend for demonstration purposes. In a production environment, API calls would be routed through a secure backend proxy.

---

## 👩‍💻 Author

Built by Archisha Pradhan — first year CS student building in public.

> "Started from notes, now we're flipping cards."

## 🌐 Live Demo
👉 [YOUR_USERNAME.github.io/flashai](https://archisha30.github.io/Study-Flashcards/)