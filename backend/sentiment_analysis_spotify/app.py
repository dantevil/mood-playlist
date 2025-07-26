from flask import Flask, request, jsonify
from sentiment import analyze_sentiment
from spotify_analysis import search_tracks

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "🎵 Sentiment + Spotify Search API is running!"})

@app.route("/recommend", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "").strip()

    if not text:
        return jsonify({"error": "Please provide non-empty 'text' in the request"}), 400

    # Step 1: Analyze sentiment
    sentiment_result = analyze_sentiment(text)

    # Step 2: Search tracks based on sentiment-derived query
    recommendations = search_tracks(sentiment_result["query"], limit=5)

    return jsonify({
        "sentiment": sentiment_result,
        "recommendations": recommendations
    })

if __name__ == "__main__":
    app.run(debug=True)