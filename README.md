# FitLog

FitLog is a focused workout planning app for discovering exercises, saving favorites, and building a manageable plan for today's training session.

## Technologies

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- Local JSON data served from `public/data.json`
- Browser `localStorage` for plan and saved-workout persistence

## Key Features

1. **Workout library** - Browse exercise data with workout cards, muscle-group information, difficulty, duration, calories, and ratings.
2. **Search and discovery** - Search workouts by name or muscle-group tag.
3. **Today's plan** - Build a daily plan capped at five workouts so a session stays focused.
4. **Saved workouts** - Bookmark workouts for later and open the Saved tab directly from the navbar.
5. **Progress tracking** - Mark planned workouts as done, review plan metrics, sort results, and keep selections across browser sessions.

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm

### Installation

From the project directory:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Application Routes

| Route | Purpose |
| --- | --- |
| `/` | Browse the workout library. |
| `/[id]` | View workout details and instructions. |
| `/my-plan` | Manage today's plan and saved workouts. |
| `/my-plan?tab=plan` | Open the Today's Plan tab. |
| `/my-plan?tab=saved` | Open the Saved tab. |

## Data and Persistence

Workout records are loaded from `public/data.json`. The current plan and saved workouts are stored in the browser under `fitlog_plan` and `fitlog_saved`, so no backend or account is required.

To reset local app data, clear the site's local storage in your browser and reload the application.

## Project Structure

```text
src/app/
├── context/        Shared plan and saved-workout state
├── Pages/           Homepage, workout details, and plan-page components
├── shared/         Navbar, footer, and search components
├── [id]/            Dynamic workout details route
└── my-plan/        Plan-page route
public/data.json     Workout library data
```

## Production Build

```bash
npm run build
npm run start
```

The production server is then available at [http://localhost:3000](http://localhost:3000).
