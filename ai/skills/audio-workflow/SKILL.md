---
name: audio-workflow
description: How work is done in the `audio/` folder of the Webship Workspace — what an item is there (a sound file, speech in `voices/`, the rest in `sounds/`), every action of `cmd-tools-voice.sh` (engines, voices, speak, voiceover, sound, music) with its flags, the plan that comes before any credits are spent, and the settings keys of the folder. Use when asked to "make a voice", "which voices are there", "read this aloud into a file", "make a sound effect", or when `cmd-tools-voice.sh` is about to be run.
argument-hint: '[what you are about to do in audio]'
---

# audio-workflow

`~/workspace/audio` is the Audio folder of a Webship Workspace (container-based, DDEV by default).
Audio is voices and sounds: voiceovers, voice samples, narration takes, effects and music, kept as files and played from the folder's page. It comes with the Audio plugin (`@webship.co/workspace-audio`), which places the commands below in the folder. Every command finds the workspace from its own path; run it from the folder, and read `bash <command> --help` before quoting a flag.

## The order of work

1. **See what the machine can use**: `bash cmd-tools-voice.sh --action engines`.
2. **Pick a voice**: `bash cmd-tools-voice.sh --action voices --engine piper`.
3. **Write the text into a file** in `~/workspace/audio/voices`.
4. **Speak**: `bash cmd-tools-voice.sh --action speak --engine piper --text-file voices/hello.txt --out voices/hello-2026-01-31.wav`.
   With `--engine elevenlabs` the first run prints a plan and stops; `--confirm` only after a yes.
5. **Say what was made**: the file, the voice, the text beside it. An existing file is refused
   unless `--force`.

## Commands

| Command | What it does | Flags |
| --- | --- | --- |
| `cmd-tools-voice.sh` | Makes a voice or a sound. `--action` is `engines`, `voices`, `speak`, `voiceover`, `sound` or `music`; Piper is free and local, ElevenLabs prints a plan and stops unless `--confirm` | `--action` `--confirm` `--drop-optional` `--duration` `--engine` `--force` `--influence` `--instrumental` `--json` `--length` `--limit` `--loop` `--model` `--out` `--script` `--search` `--text-file` `--video` `--voice` |

## Settings

| Key | File | What it says |
| --- | --- | --- |
| `doc.name` | `core/config/workspace.audio.settings.yml` | The folder under the workspace root: `audio` |
| `type` | `core/config/workspace.audio.settings.yml` | `media`: the page is a list of media items |
| `assistant.name`, `assistant.placeholder` | `core/config/workspace.audio.settings.yml` | What the assistant is called on this page; `default` takes the workspace's |
| `workspaces` | `core/config/settings.yml` | The active folders; `audio` is on it once the plugin is activated |
| `elevenlabs.voice_id`, `elevenlabs.model_id`, `elevenlabs.region` | `core/config/settings.yml` | The ElevenLabs voice (`ask` means choose one each time), model and region; the key is set on the Settings page and never read here |

## Rules

- **A plan before credits.** With ElevenLabs, `speak`, `voiceover`, `sound` and `music` print a
  plan and stop; `--confirm` is added only after the person agreed to that plan. Piper is free
  and local: use it unless ElevenLabs was asked for.
- **Never read, print or write the key.** It is set on the Settings page of the dashboard, never
  pasted into a session and never put in a file of this folder.
- **An existing file is not replaced**: `--force` only when asked.
- **Never delete unasked.** Say what you made, and offer to remove it.
- The workspace is container-based (DDEV by default); audio here is files, not projects.

The Audio plugin places these beside this one, each in the workspace folder of its kind: the agent `audio-voice-maker` (`ai-agents/`), the command `/audio-speak` (`ai-commands/`) and the prompt `audio-narrate-a-text` (`ai-prompts/`).

## The book

For any automated functional testing in this work (a Gherkin feature, a step definition, choosing a
step, a test run and its failures), read the book *Automated Functional Testing Recipes* first.

- **Where.** Use the first that exists: `.claude/automated-functional-testing-recipes/` in the project,
  `~/.claude/automated-functional-testing-recipes/` (installed by webship/webship-js-ai-agent,
  webship/webship-js-skills or webship/ai-agents), or
  https://github.com/webship/webship-js-ai-agent/tree/2.0.x/automated-functional-testing-recipes
- **How.** Its `README.md` first, then the chapter that matches the task (one file per chapter,
  named by its subject), not the single complete file.
- **Which wins.** The installed webship-js package and the step pack are the source of truth for
  step phrasing. When they differ from the book, follow them and say so.
