# app.py
from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/searchScrape', methods=['POST'])
def run_script():
    data = request.get_json()  # Get the JSON data sent from React
    game_name = data.get('game', '')  # Extract 'game' field
    subprocess.run(['python3', 'searchScrape.py'])
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
