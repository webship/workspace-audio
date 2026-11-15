Read a text aloud into a sound file in the audio folder, with a free local voice.

The launch line is for Claude Code, the default; the text between the triple quotes can be given to another AI CLI as it is.

```
claude --permission-mode bypassPermissions """
Read the text <text-file> aloud into a sound file in the audio folder
# ~/workspace/audio/voices · speech as files · container-based (DDEV by default)
# Piper is free and local; ElevenLabs spends credits: never use it here without asking me first
# never read, print or write a key

1. bash cmd-tools-voice.sh --action engines
   tell me which engines this machine can use
2. bash cmd-tools-voice.sh --action voices --engine piper
   tell me the voices, and which one you would use for this text and why
3. bash cmd-tools-voice.sh --action speak --engine piper --text-file <text-file> --out voices/<name>.wav
   <name> is the topic and the date of today; an existing file is refused, choose another name
4. tell me the file, the voice and how long it is

If a command fails, show what it printed and stop. Do not retry with other flags.
Then ask me whether to keep the file or remove it.
"""
```
