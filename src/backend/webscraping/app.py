# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import subprocess

app = Flask(__name__)

# Enable CORS for all routes
CORS(app, resources={r"/*": {"origins": "*"}})
@app.route('/searchScrape', methods=['POST'])
def run_script():
    data = request.get_json()  # Get the JSON data sent from React
    game_title = data.get('game_title', '')  # Extract 'game' field
    subprocess.run(['python3', 'searchScrape.py', game_title], capture_output=True, text=True)
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
