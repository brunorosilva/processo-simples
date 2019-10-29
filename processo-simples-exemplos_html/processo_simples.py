from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')

def home():

    return render_template('main.html')

@app.route('/advogado')

def about():

    return render_template('advogado.html')
    
@app.route('/brasileirinho')

def teste():

    return render_template('brasileirinho.html')

if __name__ == '__main__':

    app.run(debug=True)