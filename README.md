# TaskFlow Starter (AppDev SpC 5205)

Your TaskFlow project, already set up. It runs in **GitHub Codespaces** (in your phone's browser) and opens in **Expo Go** on your phone. No laptop needed.

Already done for you:

| | Version |
|---|---|
| Expo SDK | 57 (React Native 0.86) |
| Expo Router | included, routes live in `src/app/` |
| NativeWind | 4.2.7 with Tailwind CSS 3.4 (`className` works) |
| TypeScript | strict |
| Firebase JS SDK | 13 (Firestore and Auth) |
| AsyncStorage | 2.2 (for Week 13 saved login) |
| Tunnel (ngrok) | installed, so `npm start` works from the cloud |

## Every time you code

1. Open your repository on GitHub, tap **Code › Codespaces**, and open your codespace (or create one the first time). The first start takes 2 to 4 minutes while it installs packages.
2. Open the terminal (menu **☰ › Terminal › New Terminal**) and run:

   ```
   npm start
   ```

3. Wait until a QR code and a line starting with `exp://` appear (up to a minute).
   - **Coding on your phone:** you cannot scan your own screen. Copy the `exp://…` link printed under the QR code, open **Expo Go › Enter URL manually**, paste it and tap **Connect**.
   - **Coding on a laptop:** scan the QR code with Expo Go.
4. Edit a file. It saves by itself and the app on your phone reloads.

When you finish:

- **Commit and sync** your work (Source Control panel › Commit › Sync Changes). Codespaces unused for 30 days are deleted; GitHub keeps what you synced.
- **Stop the server:** tap the trash-can icon (Kill Terminal) on the terminal panel, or press Ctrl + C on a keyboard.
- **Stop your codespace** (github.com › Your codespaces › ⋯ › Stop codespace) so you do not use up your free hours.

## Folder map

```
src/
  app/            screens only (Expo Router)
    _layout.tsx   the root Stack
    index.tsx     setup check screen, replace it in Week 12
  lib/
    firebase.ts   paste YOUR Firebase config here (Week 12)
global.css        Tailwind (do not delete)
```

You will add `src/types/`, `src/lib/tasks.ts`, `src/context/` and more screens by following the Week 12 and Week 13 slides.

## Commands

| Command | What it does |
|---|---|
| `npm start` | Starts Expo with a tunnel (use this in Codespaces) |
| `npm run start:lan` | Starts Expo without a tunnel (only on a laptop on the same Wi-Fi as your phone) |
| `npm run typecheck` | Checks your TypeScript for errors |
| `npx expo install <package>` | Adds a package that matches SDK 57 |

## If something goes wrong

| You see | Try |
|---|---|
| QR code never appears, "ngrok tunnel took too long" | Kill the terminal, open a new one, run `npm start` again. Tunnels sometimes fail on the first try. |
| "Project is incompatible with this version of Expo Go" | Install the SDK 57 build of Expo Go from expo.dev/go. iPhone: the App Store Expo Go stops at SDK 54, so use an Android phone. |
| Expo Go says "Something went wrong" | Check that `npm start` is still running in the codespace, then Reload. |
| App is very slow to reload | Normal on a tunnel. The first load downloads about 9 MB; later reloads are smaller. Use Wi-Fi if you can. |
| `npm start` says command not found | The codespace is still installing. Wait for the terminal to finish, or run `npm ci`. |
| Red line under `getReactNativePersistence` | Already fixed in `tsconfig.json`. Reload the window (☰ › View › Command Palette › "Reload Window"). |

## Rules

This is your own project. You must be able to explain every line of your code. Never share your Firebase password; the web config in `firebase.ts` is not a secret, your Security Rules protect your data.
