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
        # print("accessToken => " + response.json()['accessToken'])  # accessToken of the user
        # print("expiresIn => " + str(response.json()['expiresIn']))  # Expiry time in accessToken
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

def get_response_from_id(access_token, conversationId):
    baseUrl = "https://api.symbl.ai/v1/conversations/{conversationId}/messages"
    url = baseUrl.format(conversationId=conversationId)
    # set your access token here. See https://docs.symbl.ai/docs/developer-tools/authentication

    headers = {
        'Authorization': 'Bearer ' + access_token,
        'Content-Type': 'application/json'
    }

    params = {
        'verbose': True,  # <Optional, boolean| Gives you word level timestamps of each sentence.>
        'sentiment': True  # <Optional, boolean| Give you sentiment analysis on each message.>
    }

    responses = {
        401: 'Unauthorized. Please generate a new access token.',
        404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
        500: 'Something went wrong! Please contact support@symbl.ai'
    }

    response = requests.request("GET", url, headers=headers)

    if response.status_code == 200:
        # Successful API execution
        print("success")
        # print("messages => " + str(response.json()['messages']))  # messages is a list of id, text, from, startTime, endTime, conversationId, words, phrases, sentiment
    elif response.status_code in responses.keys():
        print(responses[response.status_code])  # Expected error occurred
    else:
        print("Unexpected error occurred. Please contact support@symbl.ai" + ", Debug Message => " + str(response.text))
    return response

def get_transcript(response):
    """Get transcript in text from response"""
    output_str = ""
    for item in response.json()['messages']:
        output_str += item['text'] + '\n'
    return output_str

# # Test
if __name__ == '__main__':
    OBJ_PATH = './responder/Welcome.mp3'
    APP_ID = "4c4f68426c69724362634b5045413665583072324176336f7142324370627956"
    APP_SECRET = "474e34625449467238786c73756b793077466849764371503070722d695148594c755138394c6161616c574b5a44444545474870376648427a50344171376779"
    ACCESS_TOKEN = get_access_token(APP_ID, APP_SECRET)
    conversation_object = get_conversation_object_from_file(APP_ID, APP_SECRET, OBJ_PATH)
    # # Get the message from the conversation
    CONVERSATION_ID = str(conversation_object.get_conversation_id())
    response = get_response_from_id(ACCESS_TOKEN, CONVERSATION_ID)
    transcript = get_transcript(response)
    # # Write to file
    with open('./responder/transcript.txt', 'w') as file_out:
        file_out.write(transcript)
    exit()