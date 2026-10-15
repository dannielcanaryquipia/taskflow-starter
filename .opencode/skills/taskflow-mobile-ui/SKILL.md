---
name: taskflow-mobile-ui
description: Use when styling, restyling or polishing any TaskFlow screen (Sign In, Sign Up, My Tasks, Task Details) in design mode, matching a student's Figma design, choosing colors, spacing, typography or icons, or adding loading, empty and error states. TaskFlow uses Expo SDK 57, Expo Go and NativeWind 4 with className.
---

# TaskFlow Mobile UI (NativeWind 4)

Use this skill only in **design mode** from `AGENTS.md` (after Part 3 is finished). In tutor mode, explain styling ideas but do not write the screens.

## The setup you must keep

- Styling is **NativeWind 4.2 + Tailwind CSS 3.4**: use `className="..."` on React Native components.
- Do **not** switch to `StyleSheet.create`, inline style objects for everything, NativeWind 5, Tailwind 4, `react-native-css` or a UI kit. Use `style={...}` only for values `className` cannot express (for example a dynamic width or `useSafeAreaInsets()` padding).
- Do not edit `babel.config.js`, `metro.config.js`, `global.css` or the `tailwind.config.js` `content`/`presets` lines.
- Icons: `@expo/vector-icons` (install with `npx expo install @expo/vector-icons`), for example `import Feather from '@expo/vector-icons/Feather'`.
- Everything must run in **Expo Go on Android**. Test on the phone after each screen.

## Step 1: Put the student's Figma colors in tailwind.config.js

Ask the student for their Figma colors (hex codes from the Figma Inspect/Design panel). Add them as named tokens so screens read like the design:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      surface: '#f7f9fb',   // screen background
      ink: '#191c1e',       // main text
      muted: '#565e74',     // small labels
      danger: '#ba1a1a',    // errors, delete
      brand: { DEFAULT: '#2563eb', deep: '#004ac6', soft: '#dae2fd' },
    },
  },
},
```

Then use `bg-surface`, `text-ink`, `bg-brand`, `text-brand-deep`. After changing `tailwind.config.js`, restart the server with `npm start`, because NativeWind reads the config at start-up.

## Step 2: Restyle one screen at a time

Order: Sign In → Sign Up → My Tasks → Task Details. For each screen:

1. Keep every handler, state variable and Firebase call exactly as it is. Change only JSX structure and `className`.
2. Explain each change in one or two sentences.
3. Ask the student to check it on the phone before moving on.

## Mobile UI rules

- **Touch targets** at least 44×44: buttons `h-11` or `h-12`; icon buttons `h-11 w-11 items-center justify-center`.
- **Spacing**: use one scale (4, 8, 12, 16, 24 → `gap-1 gap-2 gap-3 p-4 mb-6`). Screen padding `px-4`. Prefer `gap-*` over many margins.
- **Cards**: `rounded-xl bg-white p-4 shadow-sm`. Inputs: `h-11 rounded-lg px-3` with a visible background or border.
- **Text**: one title per screen (`text-2xl font-semibold text-ink`), body `text-sm` or `text-base`, labels `text-xs font-medium`. Keep contrast readable: dark text on light backgrounds.
- **Primary button**: full width, `rounded-xl bg-brand`, white `font-semibold` text. Disabled while busy: add `opacity-60` and keep the "Signing in..." label.
- **Safe area**: when hiding the header (`headerShown: false`), pad the top with `useSafeAreaInsets()` from `react-native-safe-area-context`.
- **Keyboard**: wrap forms in `KeyboardAvoidingView` + `ScrollView` with `keyboardShouldPersistTaps="handled"`.
- **Lists**: keep `FlatList`. Give each task a card, a 24×24 checkbox (`h-6 w-6 rounded-lg`), and `line-through text-muted` for done tasks.

## States every screen needs

| State | Pattern |
|---|---|
| Loading | `ActivityIndicator` with the brand color, centered |
| Empty | Card with an icon, a short title ("No tasks yet") and a hint ("Tap + to add one") |
| Error | Red text (`text-danger`) near the action that failed, in plain words, never raw `auth/...` codes |
| Busy | Disabled button with a changing label |

## Nice extras (only if the student asks)

- A floating **+** button: `absolute bottom-6 right-5 h-14 w-14 rounded-full bg-brand items-center justify-center shadow-lg`, opening an Add Task screen that calls the existing `addTask`.
- Small enter animations with `react-native-reanimated` (already installed): `entering={FadeInDown}` on list items. Keep them short and subtle.
- A task counter badge: `rounded-full bg-brand-soft px-2.5 py-0.5` next to the section title.

## Never

- Change Firestore paths, Security Rules, `onAuthStateChanged` or `Stack.Protected` logic while styling.
- Add packages that need a development build.
- Paste large blocks without explaining them: the student must be able to explain every line in class.
