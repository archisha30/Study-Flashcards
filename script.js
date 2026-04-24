const generateBtn = document.getElementById('generateBtn');
const cardArea    = document.getElementById('card-area');
const cardInner   = document.getElementById('cardInner');
const cardFront   = document.getElementById('cardFront');
const cardBack    = document.getElementById('cardBack');
const counter     = document.getElementById('counter');
const status      = document.getElementById('status');

const API_KEY = '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'; // 🔑 paste Groq key here

let cards   = [];
let current = 0;
let flipped = false;

generateBtn.addEventListener('click', async () => {
  const notes = document.getElementById('notes').value.trim();

  if (!notes) {
    alert('Please paste some notes first!');
    return;
  }

  status.textContent = '⏳ Generating your flashcards...';
  generateBtn.disabled = true;
  cardArea.style.display = 'none';

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: 'You are a flashcard generator. Return ONLY a valid JSON array. No explanation. No markdown. No code fences. Just raw JSON. Format: [{"question": "...", "answer": "..."}]'
          },
          {
            role: 'user',
            content: 'Generate 8 flashcards from this text: ' + notes
          }
        ],
        temperature: 0.5
      })
    });

    if (!response.ok) {
      throw new Error('API error: ' + response.status);
    }

    const data    = await response.json();
    const raw     = data.choices[0].message.content.trim();
    const cleaned = raw.replace(/```json|```/g, '').trim();
    cards         = JSON.parse(cleaned);

    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error('No flashcards returned.');
    }

    current = 0;
    showCard();

    cardArea.style.display       = 'flex';
    cardArea.style.flexDirection = 'column';
    cardArea.style.alignItems    = 'center';
    status.textContent = '✅ ' + cards.length + ' flashcards ready! Click a card to flip it.';

  } catch (err) {
    console.error(err);
    status.textContent = '❌ Something went wrong: ' + err.message;
  }

  generateBtn.disabled = false;
});

function showCard() {
  flipped = false;
  cardInner.classList.remove('flipped');
  cardFront.textContent = '❓  ' + cards[current].question;
  cardBack.textContent  = '💡  ' + cards[current].answer;
  counter.textContent   = (current + 1) + ' / ' + cards.length;
}

document.getElementById('flashcard').addEventListener('click', () => {
  flipped = !flipped;
  cardInner.classList.toggle('flipped', flipped);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  if (current < cards.length - 1) { current++; showCard(); }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (current > 0) { current--; showCard(); }
});