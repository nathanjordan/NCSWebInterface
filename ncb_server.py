from flask import Flask, render_template, send_from_directory
import datetime

# Create new application
app = Flask(__name__)

# Debugging is okay for now
app.debug = True

# Serves the main application
@app.route('/')
def mainPage():
    year = datetime.datetime.now().year
    return render_template('index.html', year = year)

# Serves static resources like css, js, images, etc.
@app.route('/assets/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/assets/', resource)

# Run the server if this file is run directly
if __name__ == '__main__':
    app.run()
