# Elicit response using symbl.ai

*Main file - process_conversation.py*

1. Pass information to first responder/user of application:

- Process live audio from frontend using symbl.ai
- Retrieve a conversation object (conversation_object)

The conversation object retrieves:
- conversation_id 
- transcript
- action_items

NOTE: Symbl.Ai supports 20 different languages, but we can add a translator if necessary (via Google Translate googletrans) 

2. First responder communicates with person

3. First responder communicates with other responders
