# @webship.co/workspace-audio

The **Audio** workspace of the [Webship Workspace](https://github.com/webship/workspace) dashboard:
the `audio/` folder (type `media`), its settings file (`core/config/workspace.audio.settings.yml`),
its commands and its docs, as a plugin.

## Use it

```bash
cd ~/workspace
bash core/scripts/plugins.sh --require github:webship/workspace-audio
bash core/scripts/plugins.sh --activate audio     # puts `audio` on the workspaces list of settings.yml
bash core/scripts/plugins.sh --install audio      # the folder, its settings file (once), its commands, its docs (once)
```

The settings file and the docs are placed once and never overwritten: they hold what you put there.
`--deactivate` takes the workspace off the list; the folder and its content stay.

## The commands

| Command |
| --- |
| `cmd-tools-voice.sh` |

The bash functions these commands call live in the dashboard's `core/scripts/functions`.
