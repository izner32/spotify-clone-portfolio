import requests
import json

playlistOne = "2Ah204pTQkCZN6R3wIIzhp"
playlistTwo = "5QrndcdU5yMO4Ig3aYPPqx"
accessToken = "BQAvE_yAv5y9mt-LpInkrJRLlCJgyRrE_pG7SJ0Ovp5elnKheCViPnZEUycuOQVxKj6EujUGykxWCtorUlxAf6z4rGrmgrP0pI5MI1vXfdNSJRUDfN5_S0NB0nmgbnJdQjpKxuw9bSPymtaTO5ptnR9PMPGyqjc9f7YrUwPSIcrWXYOm9A_OKQMPqJVPqAc" # no worries putting it here, it expires in an hour anyway 
headers = {'Authorization': "Bearer " + accessToken }
path = "D:/Renz/C - Programming/A - Projects/updated-portfolio/public/data"

# fetch playlists 
url1 = "https://api.spotify.com/v1/playlists/" + playlistOne + "/tracks?market=ES&fields=items(track(name%2Chref%2Cpreview_url%2Calbum(name%2Chref%2Cimages)%2Cartists%2Cduration_ms%2Cimages))&limit=100&offset=0"
r1 = requests.get(url1, headers=headers)
data1 = r1.json() 

url2 = "https://api.spotify.com/v1/playlists/" + playlistTwo + "/tracks?market=ES&fields=items(track(name%2Chref%2Cpreview_url%2Calbum(name%2Chref%2Cimages)%2Cartists%2Cduration_ms%2Cimages))&limit=100&offset=0"
r2 = requests.get(url2, headers=headers)
data2 = r2.json()

# put response data in public/data 
with open(path + '/playlistOne.json', 'w') as outputFile:
    json.dump(data1, outputFile)

with open(path + '/playlistTwo.json', 'w') as outputFile:
    json.dump(data2, outputFile)
