"""
Get Transcript and Action Items from audio file/url
"""
import requests
import json
import symbl

def get_access_token(appId, appSecret):
    """Get access token for symbl.ai"""
    url = "https://api.symbl.ai/oauth2/token:generate"
    access_token = ""

    payload = {
        "type": "application",
        "appId": appId,
        "appSecret": appSecret
    }
    headers = {
        'Content-Type': 'application/json'
    }

    responses = {
        400: 'Bad Request! Please refer docs for correct input fields.',
        401: 'Unauthorized. Please generate a new access token.',
        404: 'The conversation and/or it\'s metadata you asked could not be found, \
              please check the input provided',
        429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
        500: 'Something went wrong! Please contact support@symbl.ai'
    }

    response = requests.request("POST", url, headers=headers, data=json.dumps(payload))

    if response.status_code == 200:
        # Successful API execution
        access_token =  response.json()['accessToken']
        print("accessToken => " + response.json()['accessToken'])  # accessToken of the user
        print("expiresIn => " + str(response.json()['expiresIn']))  # Expiry time in accessToken
    elif response.status_code in responses.keys():
        print(responses[response.status_code], response.text)  # Expected error occurred
    else:
        print("Unexpected error occurred. Please contact support@symbl.ai" + ", \
               Debug Message => " + str(response.text))
    return access_token



def get_conversation_object_from_file(app_id, app_secret, obj_path):
    """Generate conversation object from audio file"""
    # # Process file and get conversation object
    conversation_object = symbl.Audio.process_file(file_path=obj_path,
                                                    credentials={'app_id': app_id, 'app_secret': app_secret})
    return conversation_object

def get_conversation_object_from_url(app_id, app_secret, obj_path):
    """Generate conversation object from audio url"""
    # # Process file and get conversation object
    conversation_object = symbl.Audio.process_url(payload={'url': obj_path},
                                                    credentials={'app_id': app_id, 'app_secret': app_secret})
    return conversation_object

# # Test
if __name__ == '__main__':
    OBJ_PATH = './responder/Welcome.mp3'
    APP_ID = ""
    APP_SECRET = ""
    # ACCESS_TOKEN = get_access_token(APP_ID, APP_SECRET)
    conversation_object = get_conversation_object_from_file(APP_ID, APP_SECRET, OBJ_PATH)
    # # To get the message from the conversation
    messages = conversation_object.get_messages()
    # # Write to file
    # with open('transcript.txt', 'w') as file_out:
    #     file_out.write(str(messages))
    exit()