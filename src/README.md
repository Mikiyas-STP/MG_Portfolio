# Project Architecture

## /components
Reusable UI elements that are agnostic to business logic.
- **common**: Atoms/Molecules (Buttons, Inputs, Cards).
- **layout**: Global structures (Navbar, Footer, Layout Wrappers).

## /features
Self-contained modules representing specific parts of the domain.
- **hero**: The landing section logic and UI.
- **projects**: Logic for fetching and displaying the portfolio gallery.

## /data
Static data sources (JSON) to replace the database.

## /types
Global TypeScript interfaces (Contracts) used across multiple features.

## /hooks
Custom React hooks for shared logic (e.g., useTheme, useScroll).