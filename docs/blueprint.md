# **App Name**: AutomatonAI

## Core Features:

- Model Selection: Enable the user to select between the two on-device LLMs (M1 text-only and M2 multimodal).
- Gmail Summarization: Generate summaries of emails from the user's Gmail using on-device LLM. Uses custom filters.
- Geofencing: Allow users to define geofences and trigger actions upon entry or exit, such as sending messages to Telegram.
- Workflow Automation: Configure custom workflows with triggers and actions, including email summaries, Telegram messages, and local notifications. This feature will act as a tool determining when the correct geofence/time etc are met to action the relevant LLM.
- Workflow Wizard: Implement a streamlined interface to design and display workflows.
- Account Linking: Connect to user's Gmail via OAuth and send summary to a telegram recipient.
- LLM Output Display: Presents all generated LLM responses (email summarizations, suggested telegram messages, etc.) in clearly formatted response cards.

## Style Guidelines:

- Primary color: A deep, muted blue (#4A6572) evokes stability and intelligence, fitting for an automation tool.
- Background color: Light gray (#F0F4F7), creating a clean and neutral backdrop that emphasizes content.
- Accent color: Soft orange (#D68910), for CTAs, highlighting functionality and promoting user action. The orange is intentionally desaturated so as not to fatigue the user.
- Body and headline font: 'Inter' sans-serif font to provide a modern and machined look, good for reading long text
- Use simple, geometric icons to represent workflows and triggers. For example, a location pin for geofencing and an envelope for email.
- A tabbed interface could manage and create automation workflows, enabling a modular and intuitive design for feature accessibility.
- Subtle animations confirm actions and transitions within the workflow setup, providing helpful visual feedback.