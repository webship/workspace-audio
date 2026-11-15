Feature: The Audio workspace plugin
  Once the plugin is activated and installed, the audio workspace is on the dashboard, and the
  Plugins page lists the plugin with its four steps.

  Scenario: The workspace page is there
    Given I am on "/audio"
     Then the element "h1" should be displayed
      And "#webship-workspace-projects, .items-list, .workspace-page" should be attached

  Scenario: The plugin is listed on the Plugins page
    Given I am on "/settings/plugins"
     Then I should see "Audio"
      And I should see "@webship.co/workspace-audio"

  Scenario: The AI Agents folder lists the agent the plugin ships
    Given I am on "/ai-agents"
     Then I should see "audio-voice-maker"

  Scenario: The AI Skills folder lists the skill the plugin ships
    Given I am on "/ai-skills"
     Then I should see "audio-workflow"

  Scenario: The AI Commands folder lists the command the plugin ships
    Given I am on "/ai-commands"
     Then I should see "audio-speak"

  Scenario: The AI Prompts folder lists the prompt the plugin ships
    Given I am on "/ai-prompts"
     Then I should see "audio-narrate-a-text"
