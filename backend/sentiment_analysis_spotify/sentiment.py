from textblob import TextBlob

def analyze_sentiment(text):
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    subjectivity = blob.sentiment.subjectivity

    mood = (
        "positive" if polarity > 0.3 else
        "negative" if polarity < -0.3 else
        "neutral"
    )

    query_keywords = {
        "positive": "Kollywood upbeat",
        "negative": "soulful ghazals",
        "neutral": "chill Bollywood"
    }

    query = query_keywords[mood]

    return {
        "text": text,
        "mood": mood,
        "query": query,
        "polarity": round(polarity, 3),
        "subjectivity": round(subjectivity, 3)
    }