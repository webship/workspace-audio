/**
 * The Audio workspace for Webship Workspace: the `audio/` folder as a plugin.
 *
 * What the package carries is placed by the installer from the manifest (the folder's settings file,
 * its commands, its docs and its AI items, each in the folder of its kind) and listed by --activate; the dashboard draws the workspace from the
 * settings file like any other. Nothing to register at run time yet: this is where the folder's own
 * rail buttons, row menus or assistant context would go.
 */

import type { PluginApi } from '@webship.co/workspace-plugin-api';

export const WORKSPACE_KEY = 'audio';

/** The AI items the installer places, each in the workspace folder of its kind (ai/ in this package). */
export const AGENTS = ['audio-voice-maker'];
export const SKILLS = ['audio-workflow'];
export const AI_COMMANDS = ['audio-speak'];
export const PROMPTS = ['audio-narrate-a-text'];

export function register(api: PluginApi): void {
  api.addAssistantContext(() => `The audio/ workspace is the Audio workspace (a plugin, @webship.co/workspace-audio); its commands are the cmd-*.sh scripts in that folder. It comes with AI items for work in this folder: the agent \`audio-voice-maker\` (ai-agents/), the skill \`audio-workflow\` (ai-skills/), the command \`/audio-speak\` (ai-commands/) and the prompt \`audio-narrate-a-text\` (ai-prompts/).`);
}
