from flask import Flask, render_template, send_from_directory

# Create new application
app = Flask(__name__)

# Debugging is okay for now
app.debug = True

# Serves the main application
@app.route('/')
def mainPage():
    # Test for templated rendering
    testVar = 'This is a test'
    return render_template('index.html', test = testVar)

# Serves static resources like css, js, images, etc.
@app.route('/assets/<path:resource>')
def serveStaticResource(resource):
    return send_from_directory('static/assets/', resource)

# Run the server if this file is run directly
if __name__ == '__main__':
    app.run()
