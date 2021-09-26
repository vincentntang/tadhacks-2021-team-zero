import requests
import json

url = "https://api.symbl.ai/oauth2/token:generate"
appId = "4c4f68426c69724362634b5045413665583072324176336f7142324370627956"
appSecret = "474e34625449467238786c73756b793077466849764371503070722d695148594c755138394c6161616c574b5a44444545474870376648427a50344171376779"
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
    404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
    429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
    500: 'Something went wrong! Please contact support@symbl.ai'
}

response = requests.request("POST", url, headers=headers, data=json.dumps(payload))

if response.status_code == 200:
    # Successful API execution
    access_token =  response.json()['accessToken']
    # print("accessToken => " + response.json()['accessToken'])  # accessToken of the user
    print("expiresIn => " + str(response.json()['expiresIn']))  # Expiry time in accessToken
elif response.status_code in responses.keys():
    print(responses[response.status_code], response.text)  # Expected error occurred
else:
    print("Unexpected error occurred. Please contact support@symbl.ai" + ", Debug Message => " + str(response.text))

exit()