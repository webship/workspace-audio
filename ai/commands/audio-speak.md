---
description: Speak a text into a sound file in the audio/ folder of the Webship Workspace with cmd-tools-voice.sh — check the engines, pick the voice, write the text to a file, speak it with Piper, and say where the file is.
argument-hint: '<text to speak> [voice]'
---

# /audio-speak

Speak a text into a file in `~/workspace/audio` from: `$ARGUMENTS`

The arguments are the text typed after the command: the text to speak, and a last word that is
the name of a voice when it is one the engine lists. With no text, stop and ask for it. The
workspace is container-based (DDEV by default); the voice is made by the folder's own command.

## 1. What this machine can use

```bash
cd ~/workspace/audio
bash cmd-tools-voice.sh --action engines
bash cmd-tools-voice.sh --action voices --engine piper
```

Use Piper: it is free and local. If Piper is not available, say why (the command says it) and
stop; do not switch to ElevenLabs unasked, it spends credits.

## 2. Write the text to a file

Put the text in `voices/<topic>-<YYYY-MM-DD>.txt`: a short topic, lowercase with hyphens, the
date of today. The text goes into the file, never onto the command line.

## 3. Speak

```bash
bash cmd-tools-voice.sh --action speak --engine piper --text-file voices/<name>.txt --out voices/<name>.wav
bash cmd-tools-voice.sh --action speak --engine piper --text-file voices/<name>.txt --out voices/<name>.wav --voice <voice>
```

Use the second form when a voice was named. An existing output is refused: choose another name,
do not add `--force` unasked.

## 4. Report

The file, its voice and its length, and the link a document uses for it:
`../audio/voices/<name>.wav`. For a voiceover on a video, a sound effect or music, hand over to
the `audio-voice-maker` agent; the `audio-workflow` skill has every action.
