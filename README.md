# Fifty-Two

Every card game, in your pocket. Offline rules reference built with Expo + Expo Router.

## Features

- **Home** — favorites, Game Theory, My Games, Request a Game
- **Games** — searchable catalog with category filters and visual cards
- **Game detail** — exhaustive setup, rules, win condition, variations, notes, house rules overrides, share/print
- **Profile** — export/import backup, reset built-in catalog
- **Offline** — all rules bundled locally (SQLite on native, AsyncStorage on web)

## Run locally

```bash
npm install
npm run web      # browser dev server
npm run ios      # iOS simulator
npm run android  # Android emulator
```

## Build installable PWA

```bash
npm run export:web
npx serve dist
```

Open in mobile Safari/Chrome and use **Add to Home Screen**.

## Brand

- **Name:** Fifty-Two (short: 52)
- **Palette:** Ink navy, cream felt, gold accents, suit-red highlights
- **Fonts:** Playfair Display (headings), DM Sans (body)

## Content sources

Built-in rules are summarized in original prose with attribution per game (Pagat.com, Wikipedia, Bicycle Cards, etc.). See each game's Source link in the app.
