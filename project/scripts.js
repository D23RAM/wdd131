// =========================================================
// DharmaVerse — Shared JavaScript
// Data (objects & arrays), DOM interaction, events,
// conditional logic, array methods, template literals,
// and localStorage all live in this single file.
// =========================================================

const deities = [
  {
    id: 'brahma',
    name: 'Brahma',
    title: 'The Creator',
    group: 'trimurti',
    icon: 'images/brahma.svg',
    blurb: `Brahma is the creator of the universe and one third of the
      Trimurti, the three central roles of creation, preservation, and
      destruction. He is often described with four faces, said to look
      out over all four directions at once, and rides a swan named Hamsa.`
  },
  {
    id: 'vishnu',
    name: 'Vishnu',
    title: 'The Preserver',
    group: 'trimurti',
    icon: 'images/vishnu.svg',
    blurb: `Vishnu maintains balance in the universe and is said to descend
      to earth in different forms, called avatars, whenever the world
      needs restoring. His symbols, the conch and the discus, represent
      sound and cosmic order.`
  },
  {
    id: 'shiva',
    name: 'Shiva',
    title: 'The Destroyer',
    group: 'trimurti',
    icon: 'images/shiva.svg',
    blurb: `Shiva completes the Trimurti as the force of destruction and
      renewal, breaking down what no longer serves so something new can
      grow. He is often shown with a trident and a crescent moon resting
      in his hair.`
  },
  {
    id: 'rama',
    name: 'Rama',
    title: 'Avatar of Vishnu \u2014 The Ideal King',
    group: 'avatar',
    icon: 'images/rama.svg',
    blurb: `Rama is the seventh avatar of Vishnu and the hero of the
      Ramayana. He is honored as a model of duty, loyalty, and virtuous
      rule, and is usually pictured carrying a bow and arrow.`
  },
  {
    id: 'narasimha',
    name: 'Narasimha',
    title: 'Avatar of Vishnu \u2014 The Man-Lion',
    group: 'avatar',
    icon: 'images/narasimha.svg',
    blurb: `Narasimha is the fourth avatar of Vishnu, half man and half
      lion. He took this form to defeat a tyrant who believed no man or
      beast could harm him, showing that dharma finds a way around even
      the cleverest loophole.`
  },
  {
    id: 'krishna',
    name: 'Krishna',
    title: 'Avatar of Vishnu \u2014 The Playful Teacher',
    group: 'avatar',
    icon: 'images/krishna.svg',
    blurb: `Krishna is the eighth avatar of Vishnu, known for his wisdom,
      his flute, and the teachings he gave in the Bhagavad Gita. He is
      often shown with a peacock feather in his crown, a symbol of joy
      and beauty.`
  },
  {
    id: 'ganesha',
    name: 'Ganesha',
    title: 'Remover of Obstacles',
    group: 'beloved',
    icon: 'images/ganesha.svg',
    blurb: `Ganesha is honored at the start of new ventures, from weddings to
      exams. His elephant head represents wisdom, and his large ears remind
      devotees to listen closely to the world around them.`
  },
  {
    id: 'lakshmi',
    name: 'Lakshmi',
    title: 'Goddess of Abundance',
    group: 'beloved',
    icon: 'images/lakshmi.svg',
    blurb: `Lakshmi is associated with prosperity, generosity, and good
      fortune. She is usually pictured seated on a lotus, a flower that
      grows in mud yet blossoms untouched by it.`
  },
  {
    id: 'durga',
    name: 'Durga',
    title: 'The Fierce Protector',
    group: 'beloved',
    icon: 'images/durga.svg',
    blurb: `Durga represents the strength that rises to meet hardship. She
      is celebrated for her courage during the festival of Navratri, when
      communities honor the power of the divine feminine.`
  }
];

const deityGroups = [
  { id: 'trimurti', label: 'The Trimurti \u2014 Creator, Preserver, Destroyer' },
  { id: 'avatar', label: "Avatars of Vishnu" },
  { id: 'beloved', label: 'Other Beloved Deities' }
];

const festivals = [
  {
    id: 'diwali',
    name: 'Diwali',
    month: 'October or November',
    icon: 'images/diya.svg',
    category: 'Festival of Lights',
    description: `A five-day festival celebrating the victory of light over
      darkness. Homes are lined with small oil lamps called diyas, and
      families gather for sweets, fireworks, and prayers to Lakshmi.`
  },
  {
    id: 'holi',
    name: 'Holi',
    month: 'March',
    icon: 'images/holi.svg',
    category: 'Festival of Colors',
    description: `A joyful spring festival where people throw colored
      powder and water at one another to celebrate the arrival of spring
      and the triumph of good over evil.`
  },
  {
    id: 'navratri',
    name: 'Navratri',
    month: 'September or October',
    icon: 'images/durga.svg',
    category: 'Nine Nights',
    description: `Nine nights of dance, music, and devotion to the goddess
      Durga. Each night honors a different form of the divine feminine,
      ending with the festival of Dussehra.`
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    month: 'August',
    icon: 'images/rakhi.svg',
    category: 'Bond of Protection',
    description: `A celebration of the bond between siblings. Sisters tie a
      decorative thread called a rakhi around their brother's wrist as a
      symbol of protection and love.`
  },
  {
    id: 'maha-shivaratri',
    name: 'Maha Shivaratri',
    month: 'February or March',
    icon: 'images/shiva.svg',
    category: 'Great Night of Shiva',
    description: `A night of fasting, meditation, and prayer dedicated to
      Shiva. Devotees stay awake through the night, visiting temples and
      reflecting on renewal.`
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    month: 'August or September',
    icon: 'images/ganesha.svg',
    category: 'Welcoming Ganesha',
    description: `A ten-day festival welcoming Ganesha into homes and
      communities with clay statues, music, and sweet modak treats, before
      the statues are carried out for immersion in water.`
  }
];

const scriptureQuotes = [
  {
    text: `A person is not bound by the outcome of an action if it is done
      without attachment, offered simply as one's duty.`,
    source: 'Bhagavad Gita, on selfless action'
  },
  {
    text: `The self cannot be cut, burned, wetted, or dried; it is
      everlasting and present everywhere.`,
    source: 'Bhagavad Gita, on the eternal soul'
  },
  {
    text: `Whenever goodness grows weak and evil grows strong, balance
      returns to the world in a new form.`,
    source: 'Bhagavad Gita, on cosmic balance'
  },
  {
    text: `A steady mind stays calm in sorrow and unexcited in joy, free
      from fear and anger alike.`,
    source: 'Bhagavad Gita, on equanimity'
  }
];

const quizQuestions = [
  {
    question: 'What does the word "Dharma" refer to?',
    options: ['A festival of colors', 'Duty and righteous living', 'A type of temple', 'A sacred river'],
    answerIndex: 1
  },
  {
    question: 'Which deity is known as the Remover of Obstacles?',
    options: ['Krishna', 'Durga', 'Ganesha', 'Vishnu'],
    answerIndex: 2
  },
  {
    question: 'Which scripture contains Krishna\'s teachings to the warrior Arjuna?',
    options: ['The Ramayana', 'The Bhagavad Gita', 'The Vedas', 'The Puranas'],
    answerIndex: 1
  },
  {
    question: 'What does Diwali celebrate?',
    options: ['The start of the school year', 'The victory of light over darkness', 'A harvest of rice', 'The birth of Shiva'],
    answerIndex: 1
  },
  {
    question: 'Which flower is closely associated with Lakshmi?',
    options: ['Rose', 'Lotus', 'Marigold', 'Jasmine'],
    answerIndex: 1
  },
  {
    question: 'During which festival do siblings tie a rakhi thread?',
    options: ['Raksha Bandhan', 'Holi', 'Navratri', 'Maha Shivaratri'],
    answerIndex: 0
  },
  {
    question: 'How many nights are celebrated during Navratri?',
    options: ['Three', 'Five', 'Nine', 'Twelve'],
    answerIndex: 2
  },
  {
    question: 'Which deity is often shown with a trident and crescent moon?',
    options: ['Vishnu', 'Shiva', 'Lakshmi', 'Ganesha'],
    answerIndex: 1
  },
  {
    question: 'Which three deities make up the Trimurti?',
    options: [
      'Ganesha, Lakshmi, Durga',
      'Brahma, Vishnu, Shiva',
      'Rama, Krishna, Narasimha',
      'Shiva, Durga, Ganesha'
    ],
    answerIndex: 1
  },
  {
    question: 'Narasimha, the half-man half-lion avatar, is an avatar of which deity?',
    options: ['Brahma', 'Shiva', 'Vishnu', 'Ganesha'],
    answerIndex: 2
  }
];

// ---------------------------------------------------------
// Storage keys
// ---------------------------------------------------------
const STORAGE_KEYS = {
  favoriteDeity: 'dharmaverse-favorite-deity',
  quizHistory: 'dharmaverse-quiz-history',
  visitorName: 'dharmaverse-visitor-name'
};

// ---------------------------------------------------------
// Utility functions
// ---------------------------------------------------------
function pickRandom(list) {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

function readJSON(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) {
    return fallback;
  }
  try {
    return JSON.parse(raw);
  } catch (err) {
    return fallback;
  }
}

function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    const year = new Date().getFullYear();
    yearEl.textContent = `${year}`;
  }
}

// ---------------------------------------------------------
// Mobile navigation toggle (shared across every page)
// ---------------------------------------------------------
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) {
    return;
  }
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', `${isOpen}`);
  });
}

// ---------------------------------------------------------
// Home page: featured deity + featured festival
// ---------------------------------------------------------
function renderFeaturedDeity() {
  const box = document.getElementById('featured-deity');
  if (!box) {
    return;
  }
  const deity = pickRandom(deities);
  box.innerHTML = `
    <img src="${deity.icon}" alt="Emblem of ${deity.name}" loading="lazy" width="96" height="96">
    <h3>${deity.name} &mdash; ${deity.title}</h3>
    <p>${deity.blurb}</p>
  `;
}

function renderFeaturedFestival() {
  const box = document.getElementById('featured-festival');
  if (!box) {
    return;
  }
  const festival = pickRandom(festivals);
  box.innerHTML = `
    <img src="${festival.icon}" alt="Icon for ${festival.name}" loading="lazy" width="96" height="96">
    <h3>${festival.name} &mdash; ${festival.month}</h3>
    <p>${festival.description}</p>
  `;
}

function initHomeSurpriseButton() {
  const button = document.getElementById('surprise-btn');
  if (!button) {
    return;
  }
  button.addEventListener('click', () => {
    renderFeaturedDeity();
    renderFeaturedFestival();
  });
}

// ---------------------------------------------------------
// Gods & Goddesses page: render cards + favorites
// ---------------------------------------------------------
function buildDeityCard(deity, favoriteId) {
  const isFavorite = deity.id === favoriteId;
  const cardClass = isFavorite ? 'card is-favorite' : 'card';
  const buttonLabel = isFavorite ? 'Favorite \u2713' : 'Mark as favorite';
  return `
    <article class="${cardClass}" data-id="${deity.id}">
      <img src="${deity.icon}" alt="Emblem of ${deity.name}" loading="lazy" width="84" height="84">
      <h3>${deity.name}</h3>
      <p><strong>${deity.title}</strong></p>
      <p>${deity.blurb}</p>
      <button type="button" class="favorite-btn" aria-pressed="${isFavorite}">${buttonLabel}</button>
    </article>
  `;
}

function buildDeityGroupSection(group, favoriteId) {
  const membersInGroup = deities.filter(deity => deity.group === group.id);
  const cardsMarkup = membersInGroup.map(deity => buildDeityCard(deity, favoriteId)).join('');
  return `
    <section class="deity-group">
      <h2 class="section-title">${group.label}</h2>
      <div class="card-grid">${cardsMarkup}</div>
    </section>
  `;
}

function renderDeityCards() {
  const grid = document.getElementById('deity-grid');
  if (!grid) {
    return;
  }
  const favoriteId = localStorage.getItem(STORAGE_KEYS.favoriteDeity);
  const sectionsMarkup = deityGroups.map(group => buildDeityGroupSection(group, favoriteId)).join('');
  grid.innerHTML = sectionsMarkup;

  grid.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', event => {
      const card = event.target.closest('.card');
      const deityId = card.dataset.id;
      const currentFavorite = localStorage.getItem(STORAGE_KEYS.favoriteDeity);

      if (currentFavorite === deityId) {
        localStorage.removeItem(STORAGE_KEYS.favoriteDeity);
      } else {
        localStorage.setItem(STORAGE_KEYS.favoriteDeity, deityId);
      }
      renderDeityCards();
      renderFavoriteSummary();
    });
  });
}

function renderFavoriteSummary() {
  const summary = document.getElementById('favorite-summary');
  if (!summary) {
    return;
  }
  const favoriteId = localStorage.getItem(STORAGE_KEYS.favoriteDeity);
  const favoriteDeity = deities.find(deity => deity.id === favoriteId);

  if (favoriteDeity) {
    summary.innerHTML = `<p>Your saved favorite is <strong>${favoriteDeity.name}</strong>, ${favoriteDeity.title.toLowerCase()}.</p>`;
  } else {
    summary.innerHTML = `<p>You have not saved a favorite deity yet. Choose one below.</p>`;
  }
}

// ---------------------------------------------------------
// Festivals page: render, filter, and quote rotator
// ---------------------------------------------------------
function buildFestivalCard(festival) {
  return `
    <article class="card" data-name="${festival.name.toLowerCase()}" data-category="${festival.category.toLowerCase()}">
      <img src="${festival.icon}" alt="Icon for ${festival.name}" loading="lazy" width="84" height="84">
      <h3>${festival.name}</h3>
      <p><strong>${festival.month}</strong> &middot; ${festival.category}</p>
      <p>${festival.description}</p>
    </article>
  `;
}

function renderFestivalCards(list) {
  const grid = document.getElementById('festival-grid');
  if (!grid) {
    return;
  }
  if (list.length === 0) {
    grid.innerHTML = `<p class="no-results">No festivals match that search. Try a different term.</p>`;
    return;
  }
  grid.innerHTML = list.map(buildFestivalCard).join('');
}

function initFestivalFilter() {
  const input = document.getElementById('festival-search');
  if (!input) {
    return;
  }
  renderFestivalCards(festivals);

  input.addEventListener('input', event => {
    const term = event.target.value.trim().toLowerCase();
    const filtered = festivals.filter(festival => {
      return festival.name.toLowerCase().includes(term) ||
        festival.category.toLowerCase().includes(term) ||
        festival.month.toLowerCase().includes(term);
    });
    renderFestivalCards(filtered);
  });
}

function initQuoteRotator() {
  const quoteBox = document.getElementById('quote-box');
  const nextButton = document.getElementById('next-quote-btn');
  if (!quoteBox || !nextButton) {
    return;
  }
  let quoteIndex = 0;

  function showQuote(index) {
    const quote = scriptureQuotes[index];
    quoteBox.innerHTML = `
      <blockquote>&ldquo;${quote.text}&rdquo;</blockquote>
      <p class="form-note">&mdash; ${quote.source}</p>
    `;
  }

  showQuote(quoteIndex);

  nextButton.addEventListener('click', () => {
    quoteIndex = (quoteIndex + 1) % scriptureQuotes.length;
    showQuote(quoteIndex);
  });
}

// ---------------------------------------------------------
// Quiz page: question flow, scoring, history in localStorage
// ---------------------------------------------------------
function initQuiz() {
  const quizBox = document.getElementById('quiz-box');
  if (!quizBox) {
    return;
  }

  const progressEl = document.getElementById('quiz-progress');
  const questionEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const restartBtn = document.getElementById('quiz-restart-btn');

  let currentIndex = 0;
  let score = 0;
  let answered = false;

  function renderQuestion() {
    answered = false;
    const total = quizQuestions.length;

    if (currentIndex >= total) {
      finishQuiz();
      return;
    }

    const current = quizQuestions[currentIndex];
    progressEl.textContent = `Question ${currentIndex + 1} of ${total} \u2014 Score: ${score}`;
    questionEl.textContent = current.question;

    optionsEl.innerHTML = current.options
      .map((option, index) => `<button type="button" data-index="${index}">${option}</button>`)
      .join('');

    optionsEl.querySelectorAll('button').forEach(button => {
      button.addEventListener('click', handleAnswer);
    });
  }

  function handleAnswer(event) {
    if (answered) {
      return;
    }
    answered = true;

    const chosenIndex = Number(event.target.dataset.index);
    const current = quizQuestions[currentIndex];
    const buttons = optionsEl.querySelectorAll('button');

    if (chosenIndex === current.answerIndex) {
      score += 1;
      event.target.classList.add('correct');
    } else {
      event.target.classList.add('incorrect');
      buttons[current.answerIndex].classList.add('correct');
    }

    buttons.forEach(button => { button.disabled = true; });

    setTimeout(() => {
      currentIndex += 1;
      renderQuestion();
    }, 900);
  }

  function finishQuiz() {
    const total = quizQuestions.length;
    progressEl.textContent = `Quiz complete \u2014 Score: ${score} of ${total}`;
    questionEl.textContent = `Nicely done! Your final score is ${score} out of ${total}.`;
    optionsEl.innerHTML = '';
    restartBtn.hidden = false;

    saveQuizResult(score, total);
    renderScoreHistory();
  }

  function saveQuizResult(finalScore, total) {
    const history = readJSON(STORAGE_KEYS.quizHistory, []);
    history.push({
      date: new Date().toLocaleDateString(),
      score: finalScore,
      total
    });
    localStorage.setItem(STORAGE_KEYS.quizHistory, JSON.stringify(history));
  }

  restartBtn.addEventListener('click', () => {
    currentIndex = 0;
    score = 0;
    restartBtn.hidden = true;
    renderQuestion();
  });

  renderQuestion();
}

function renderScoreHistory() {
  const historyEl = document.getElementById('score-history');
  if (!historyEl) {
    return;
  }
  const history = readJSON(STORAGE_KEYS.quizHistory, []);

  if (history.length === 0) {
    historyEl.innerHTML = `<p>You have not completed the quiz yet.</p>`;
    return;
  }

  const bestAttempt = history.reduce((best, attempt) => {
    return attempt.score > best.score ? attempt : best;
  }, history[0]);

  const rows = history
    .slice(-5)
    .map(attempt => `<li>${attempt.date}: ${attempt.score} / ${attempt.total}</li>`)
    .join('');

  historyEl.innerHTML = `
    <h3>Your quiz history</h3>
    <p>Best score so far: <strong>${bestAttempt.score} / ${bestAttempt.total}</strong></p>
    <ul>${rows}</ul>
  `;
}

// ---------------------------------------------------------
// Contact form: validation, feedback, and returning-visitor greeting
// ---------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) {
    return;
  }
  const status = document.getElementById('form-status');
  const nameField = document.getElementById('contact-name');
  const greeting = document.getElementById('visitor-greeting');

  const savedName = localStorage.getItem(STORAGE_KEYS.visitorName);
  if (savedName && greeting) {
    greeting.textContent = `Welcome back, ${savedName}! Feel free to reach out again below.`;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = nameField.value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !subject || !message) {
      status.className = 'form-status error';
      status.textContent = 'Please fill out every field before sending your message.';
      return;
    }

    localStorage.setItem(STORAGE_KEYS.visitorName, name);
    status.className = 'form-status success';
    status.textContent = `Thank you, ${name}! Your message about "${subject}" has been received.`;
    form.reset();
  });
}

// ---------------------------------------------------------
// Boot: run only the initializers relevant to the current page
// ---------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  initMobileNav();

  renderFeaturedDeity();
  renderFeaturedFestival();
  initHomeSurpriseButton();

  renderDeityCards();
  renderFavoriteSummary();

  initFestivalFilter();
  initQuoteRotator();

  initQuiz();
  renderScoreHistory();
  initContactForm();
});
