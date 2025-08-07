# React + Vite + Testing Setup

A React application template configured with:

- Vite for build tooling
- Vitest for unit and component testing
- Playwright for end-to-end testing

## Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Run unit/component tests
yarn test
yarn test:ui    # with UI
yarn coverage   # with coverage report

# Run e2e tests
yarn test:e2e
```

## Project Structure

- `src/` - Application source code
  - `test/` - Test setup and utilities
  - `*.test.tsx` - Unit and component tests
- `tests/` - Playwright End-to-end tests

## Technologies

- React 18
- TypeScript
- Vite
- Vitest + Testing Library
- Playwright

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run Vitest tests
- `test:ui` - Run Vitest with UI
- `test:coverage` - Generate test coverage report
- `test:e2e` - Run Playwright tests
