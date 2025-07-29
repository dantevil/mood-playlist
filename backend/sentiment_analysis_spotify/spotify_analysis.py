
import requests
import random  

SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_SEARCH_URL = "https://api.spotify.com/v1/search"
# To add the client id and secret for token generation
client_id = "API_CLIENT_ID" 
client_secret = "API_CLIENT_SECRET"

def get_access_token():
    response = requests.post(SPOTIFY_TOKEN_URL, {
        "grant_type": "client_credentials",
        "client_id": client_id,
        "client_secret": client_secret
    })
    
    if response.status_code == 200:
        return response.json().get("access_token")
    else:
        print("❌ Failed to get access token:", response.text)
        return None

def get_random_offset():
    return random.randint(0, 20)

def search_tracks(query, limit=5):
    access_token = get_access_token()
    if not access_token:
        return []

    headers = {"Authorization": f"Bearer {access_token}"}
    offset = get_random_offset()
    params = {
        "q": query,
        "type": "track",
        "limit": limit,
        "offset": offset,
        "market": "IN"
    }

    response = requests.get(SPOTIFY_SEARCH_URL, headers=headers, params=params)
    
    if response.status_code != 200:
        print("❌ Spotify API error:", response.text)
        return []

    data = response.json()
    
    return [
        {
            "name": item["name"],
            "artist": item["artists"][0]["name"],
            "url": item["external_urls"]["spotify"]
        }
        for item in data.get("tracks", {}).get("items", [])
    ]
