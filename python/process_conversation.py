"""
Get Transcript from file
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

def respond(local_path):
    """Generate conversation object from file or url"""
    # # set API token from symbl
    # access_token = 'AUTH_TOKEN'
    # # note hardcoded API tokens for testing
    APP_ID = "4c4f68426c69724362634b5045413665583072324176336f7142324370627956"
    APP_SECRET = "474e34625449467238786c73756b793077466849764371503070722d695148594c755138394c6161616c574b5a44444545474870376648427a50344171376779"

    # # Process audio file
    conversation_object = symbl.Audio.process_file(file_path=local_path,
                                                   credentials={'app_id': APP_ID, 'app_secret': APP_SECRET})
    # # get transcript to first responder
    # action - communicate with other responders
    return conversation_object

if __name__ == '__main__':
    local_path = './python/Welcome.mp3'
    # APP_ID = "4c4f68426c69724362634b5045413665583072324176336f7142324370627956"
    # APP_SECRET = "474e34625449467238786c73756b793077466849764371503070722d695148594c755138394c6161616c574b5a44444545474870376648427a50344171376779"
    # ACCESS_TOKEN = get_access_token(APP_ID, APP_SECRET)
    conversation_object = respond(local_path)
    print(conversation_object.get_messages())
    exit()