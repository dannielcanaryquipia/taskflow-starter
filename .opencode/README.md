# .opencode (TaskFlow student setup)

OpenCode reads this folder automatically when you run `opencode` in your codespace. It also reads `AGENTS.md` in the project root, which sets the rules: **tutor mode** until Part 3 is finished, then **design mode**.

## What is here

| Path | What it does |
|---|---|
| `opencode.json` | Project settings. No API keys, no MCP servers. Session sharing is off. |
| `skills/taskflow-mobile-ui/` | TaskFlow styling rules: NativeWind 4 `className`, Figma colors in `tailwind.config.js`, mobile UI checklist. Written for this class. |
| `skills/expo-router/` | Expo Router: stacks, groups, dynamic routes, headers. (Official Expo skill, MIT) |
| `skills/expo-native-ui/` | Native-feeling screens, icons, controls, safe areas. (Official Expo skill, MIT, with a TaskFlow note added at the top) |
| `skills/expo-design-system/` | Consistent colors, spacing, reusable components. (Official Expo skill, MIT, with a TaskFlow note added at the top) |
| `skills/expo-animation/` | Animations with Reanimated that work in Expo Go. (Official Expo skill, MIT) |
| `skills/systematic-debugging/` | Find the cause of a bug before changing code. |

Official Expo skills come from https://github.com/expo/skills (see `skills/EXPO-SKILLS-LICENSE.txt`).

## Your own AI key

Never put an API key in these files: this repository is public. If your AI provider needs a key, add it as a **Codespaces secret** (GitHub › Settings › Codespaces › Secrets) and log in with `opencode auth login` inside the codespace.

## Getting updates from your teacher

```bash
git remote add template https://github.com/dannielcanaryquipia/taskflow-starter.git   # first time only
git fetch template
git checkout template/main -- AGENTS.md .opencode
git commit -m "Update AI tools from template"
git push
```
