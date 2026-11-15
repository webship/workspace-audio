# @webship.co/workspace-audio

The **Audio** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `audio/` folder (type `media`), its settings file (`core/config/workspace.audio.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-audio
bash core/scripts/plugins.sh --activate audio --with-needs     # puts `audio` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install audio      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## What it needs

The AI items land in the four AI folders, so the manifest needs them (`needs`): `ai-agents`, `ai-skills`, `ai-commands`, `ai-prompts`. `--activate audio` and `--install audio` stop while one is missing and name it; with `--with-needs` they are required, activated and installed first.

## The AI items

The plugin carries its own AI items (`ai/` in the package, the manifest's `ai` block), written for the work this folder is for. `--install` places each one in the workspace folder of its kind, when that folder is an active workspace folder; `--uninstall` removes them, and keeps one that was edited in its folder.

| Item | Kind | Lands in | What it is for |
| --- | --- | --- | --- |
| `audio-voice-maker` | Agent | `ai-agents/audio-voice-maker.md` | Makes a voice or a sound in `audio/` with `cmd-tools-voice.sh`: engines, voices, a text spoken into a file, a script over a video, a sound effect, music; a plan before any credits |
| `audio-workflow` | Skill | `ai-skills/audio-workflow/` | How work is done in `audio/`: engines, voice, text file, speak, report; every action of `cmd-tools-voice.sh` with its flags, the settings keys |
| `/audio-speak` | Command | `ai-commands/audio-speak.md` | `/audio-speak <text> [voice]`: checks the engines, writes the text to a file, speaks it with Piper and says where the file is |
| `audio-narrate-a-text` | Prompt | `ai-prompts/audio-narrate-a-text.md` | A new session that reads a text aloud into a sound file with a free local voice |

From its folder an item is installed into the AI CLI (Claude Code by default) like any other: the folder's page on the dashboard, or `bash cmd-tools-ai-items.sh <name> --install` in the AI folder (`--to dev/<project>` for one project). A prompt is not installed: the New screen form lists it as the start of a new session. The body of every item is plain Markdown any AI CLI can follow; Claude Code is the default shape (the frontmatter, the launch line of a prompt). Every command, flag, settings key and path an item names is checked by `tests/items.test.ts`; the shape of the items is the one of the reference, [`docs/plugin-items-pattern.md` of the WordPress plugin](https://github.com/webship/workspace-wordpress/blob/1.0.x/docs/plugin-items-pattern.md).

## The commands

| Command |
| --- |
| `cmd-tools-voice.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
