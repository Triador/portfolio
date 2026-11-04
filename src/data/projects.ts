import lexqoraLogo from '../assets/projects/lexqora.png';
import numqoraLogo from '../assets/projects/numqora.jpg';
import bookeyLogo from '../assets/projects/bookey.svg';
import grindbotLogo from '../assets/projects/grindbot.webp';
import azimqoraLogo from '../assets/projects/azimqora.png';
import type { ImageMetadata } from 'astro';

export type Language = 'ru' | 'en';
type Copy = Record<Language, string>;
type Project = {
  id: string;
  name: string;
  logo: ImageMetadata;
  url: string;
  route: string;
  summary: Copy;
  about: Copy;
  stack: string[];
  architecture: Copy;
};
export const copy = (ru: string, en: string): Copy => ({ ru, en });

// Verified against the sibling checkouts on 2026-11-02.
// Names, links and logos: finance-manager/landing, Lexqora/miniapp,
// bookey-frontend/src/app/shared/components/text-logo, grindbot-service/miniapp.
// Implementation: finance-manager/docs/PROJECT.md + api.go; Lexqora/README.md;
// Bookey's frontend routes + backend controllers; Grindbot's three AGENTS.md files.
// Azimqora: Documents/ChatGPT/Azimqora/{docs/PROJECT.md, public/projects.js,
// public/projects.css, server/index.mjs, server/store.mjs}.
// Azimqora logo supplied by the owner on 2026-11-02.
export const projects: Project[] = [
  {
    id: 'lexqora', name: 'Lexqora', logo: lexqoraLogo,
    url: 'https://t.me/lexqora_bot', route: 'tech-lexqora',
    summary: copy('Карточки для изучения и повторения иностранных слов и фраз.', 'Flashcards for learning and reviewing words and phrases in another language.'),
    about: copy(
      'Приложение для изучения иностранных слов и фраз. Есть готовые наборы, личный словарь и повторение карточек в двух направлениях. Свои слова можно добавлять текстом, голосом или с фотографии.',
      'An app for learning words and phrases in another language. Includes prepared sets, a personal dictionary and flashcards for recognition and recall. Add your own vocabulary by text, voice or photo.'),
    stack: ['Go', 'React', 'Vite', 'PostgreSQL', 'Telegram Mini Apps', 'OpenAI'],
    architecture: copy(
      'React / Vite → Go API → PostgreSQL\nTelegram-бот → Go → OpenAI\n\nКарточки · словарь · наборы\nПонимание и воспроизведение · прогресс',
      'React / Vite → Go API → PostgreSQL\nTelegram bot → Go → OpenAI\n\nFlashcards · vocabulary · sets\nRecognition and recall · progress'),
  },
  {
    id: 'numqora', name: 'Numqora', logo: numqoraLogo,
    url: 'https://t.me/NumqoraBot', route: 'tech-numqora',
    summary: copy('Учёт личных и совместных расходов, доходов и долгов.', 'Track personal and shared expenses, income and debts.'),
    about: copy(
      'Приложение для учёта личных и совместных финансов. Расходы можно вводить текстом, голосом или по фотографии чека. Есть кошельки, бюджеты, долги, регулярные платежи и импорт банковских выписок. Работает в Telegram и браузере.',
      'An app for tracking personal and shared finances. Record expenses by text, voice or receipt photo. Includes wallets, budgets, debts, recurring payments and bank statement imports. Available in Telegram and a browser.'),
    stack: ['Go', 'React', 'Vite', 'PostgreSQL', 'Telegram Bot API', 'OpenAI'],
    architecture: copy(
      'Telegram-бот ───────────┐\nReact / Vite · Mini App ├→ Go → PostgreSQL\nReact / Vite · браузер ─┘\n\nOpenAI → распознавание → проверка → запись\nОбщие функции и API · отдельная авторизация',
      'Telegram bot ──────────┐\nReact / Vite · Mini App ├→ Go → PostgreSQL\nReact / Vite · browser ─┘\n\nOpenAI → recognition → review → save\nShared features and API · separate authentication'),
  },
  {
    id: 'bookey', name: 'Bookey', logo: bookeyLogo,
    url: 'https://bookey.ru/', route: 'tech-bookey',
    summary: copy('Список книг: что читаешь, прочитал или хочешь прочитать.', 'Track books you’re reading, have read or want to read.'),
    about: copy(
      'Сервис для ведения списка книг: что читаешь, что уже прочитал и что планируешь прочитать. Есть оценки, рецензии, заметки, рекомендации и совместные марафоны чтения.',
      'An app for keeping track of books you’re reading, have read or plan to read. Includes ratings, reviews, notes, recommendations and group reading challenges.'),
    stack: ['Angular', 'Java 11', 'Spring Boot', 'PostgreSQL', 'Liquibase', 'WebSocket'],
    architecture: copy(
      'Angular / Akita / RxJS → REST API\nSpring Boot → сервисы → JPA / QueryDSL\nPostgreSQL · Liquibase · Caffeine\n\nКниги · полки · рецензии · марафоны\nВнешние каталоги · S3 · Telegram',
      'Angular / Akita / RxJS → REST API\nSpring Boot → services → JPA / QueryDSL\nPostgreSQL · Liquibase · Caffeine\n\nBooks · shelves · reviews · challenges\nExternal catalogues · S3 · Telegram'),
  },
  {
    id: 'grindbot', name: 'Grindbot', logo: grindbotLogo,
    url: 'https://t.me/GridTeamBot', route: 'tech-grindbot',
    summary: copy('Бот для автоматической сеточной торговли на Bybit.', 'A bot for automated spot grid trading on Bybit.'),
    about: copy(
      'Бот для сеточной торговли на спотовом рынке Bybit. В Mini App можно подобрать параметры, проверить стратегию в тестовом режиме и запустить её на бирже. Есть история и наблюдение за действующими стратегиями.',
      'A bot for spot grid trading on Bybit. Use the Mini App to select parameters, try a strategy in paper trading and launch it on the exchange. Includes history and monitoring of running strategies.'),
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Bybit API', 'WebSocket'],
    architecture: copy(
      'grind-trading-analytics → рекомендации\nReact / Telegram → grindbot-service\n                   ├→ тестовая торговля\n                   └→ grindbot → Bybit\n\nHexagonal · REST / WebSocket · Liquibase\nОрдера · частичные исполнения · восстановление',
      'grind-trading-analytics → recommendations\nReact / Telegram → grindbot-service\n                   ├→ paper trading\n                   └→ grindbot → Bybit\n\nHexagonal · REST / WebSocket · Liquibase\nOrders · partial fills · recovery'),
  },
  {
    id: 'azimqora', name: 'Azimqora', logo: azimqoraLogo,
    url: 'https://azimqora.grind-bot.win/', route: 'tech-azimqora',
    summary: copy('Списки задач и подзадач для личных и общих проектов.', 'Task lists and subtasks for personal and shared projects.'),
    about: copy(
      'Менеджер проектов со списками задач, подзадачами, секциями и вложениями. Проекты можно вести одному или совместно. Через Telegram можно добавлять задачи текстом и голосом и получать напоминания.',
      'A project manager with task lists, subtasks, sections and attachments. Work on projects alone or with others. Add tasks by text or voice and receive reminders through Telegram.'),
    stack: ['Node.js', 'JavaScript', 'SQLite', 'Telegram', 'OpenAI'],
    architecture: copy(
      'Браузер / Telegram Mini App → Node.js HTTP API\nTelegram-бот → распознавание текста / голоса\nОбщий домен → SQLite\n\nПроекты · секции · задачи · подзадачи\nДоступ к проектам · файлы · очередь напоминаний',
      'Browser / Telegram Mini App → Node.js HTTP API\nTelegram bot → text / voice recognition\nShared domain → SQLite\n\nProjects · sections · tasks · subtasks\nProject access · files · reminder queue'),
  },
];
