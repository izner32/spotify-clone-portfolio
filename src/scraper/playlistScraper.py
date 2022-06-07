import requests
import json

playlistOne = "2Ah204pTQkCZN6R3wIIzhp"
playlistTwo = "5QrndcdU5yMO4Ig3aYPPqx"
accessToken = "BQAqMC0QWbp0YvQLwNZevVbAfz4rJYT1qTVLqZe7UnjX9leZWjwaQKLFNISmjNToEJ-kt9cHWa2WkNItNzG9Ry99ar0tivG2u_TXRTiWxIfnFHqvWLCF9tpKxH67GYzcW_D8otpiNy-ZK8lpdp--U-zMlWwEfQ" # no worries putting it here, it expires in an hour anyway 
headers = {'Authorization': "Bearer " + accessToken }
path = "D:/Renz/C - Programming/A - Projects/updated-portfolio/public/data"

# fetch playlists 
url1 = "https://api.spotify.com/v1/playlists/" + playlistOne + "/tracks?market=ES&fields=items(track(name%2Chref%2Calbum(name%2Chref%2Cimages)%2Cartists%2Cduration_ms%2Cimages))&limit=100&offset=0"
r1 = requests.get(url1, headers=headers)
data1 = r1.json() 

url2 = "https://api.spotify.com/v1/playlists/" + playlistTwo + "/tracks?market=ES&fields=items(track(name%2Chref%2Calbum(name%2Chref%2Cimages)%2Cartists%2Cduration_ms%2Cimages))&limit=100&offset=0"
r2 = requests.get(url2, headers=headers)
data2 = r2.json()

# put response data in public/data 
with open(path + '/playlistOne.json', 'w') as outputFile:
    json.dump(data1, outputFile)

with open(path + '/playlistTwo.json', 'w') as outputFile:
    json.dump(data2, outputFile)
