# East African Countries Explorer

A React Native app that shows a grid of six East African countries. Tapping a country opens a detail screen with its flag/image, capital, and a short history. Built as a class assignment to learn lists, state, and screen switching in React Native.

## Features

- Scrollable grid of six countries (Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan), two per row
- Tap any image to open a detail view with the country's image, capital, and a short history paragraph
- "Back" button to return to the grid
- Country data kept in a single array, so adding a country is one new object

## Tech Stack

- React Native ([Expo)
- JavaScript
- Core components: `View`, `Image`, `Text`, `Pressable`, `ScrollView`, `Button`, `StatusBar`

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- [Expo Go app or an Android/iOS emulator]

### Installation

```bash
git clone https://github.com/[your-username]/country-explorer-app.git
cd country-explorer-app
npm install
```

### Running the app

```bash
npx expo start
```

Scan the QR code with Expo Go, or press `a` (Android) or `i` (iOS).

## Project Structure

```
├── App.js
├── assets/
│   ├── kenya.jpg
│   ├── uganda.jpg
│   ├── tanzania.jpg
│   ├── rwanda.jpg
│   ├── burundi.jpg
│   └── south_sudan.jpg
└── package.json
```

## How It Works

- A `countries` array holds each country's name, capital, image, and history text.
- A `selectedCountry` state variable (`useState`) decides which screen to show: `null` shows the grid, and an object shows that country's detail view.
- The grid uses `flexDirection: "row"` with `flexWrap: "wrap"` inside a `ScrollView`.



## License

[MIT, or whichever you choose]
