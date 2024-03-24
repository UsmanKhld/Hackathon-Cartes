import os
from dotenv import load_dotenv
import psycopg2
import psycopg2.extras
from flask import Flask, render_template, request, redirect, url_for, session
from flask_wtf import FlaskForm
from flask_wtf.csrf import CSRFProtect
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError, Email, EqualTo
from flask_bcrypt import Bcrypt

app = Flask(__name__)

@app.route('/restaurant-login', methods=['POST'])
def submitform():
    email=request.form.get('email')
    password=request.form.get('password')
    print("Received email:", email)
    print("Received password:", password)

@app.route('/restaurant-signup', methods=['POST'])
def signup():
    return 'Successful'

if __name__ == '__main__': 
   app.run(debug = True) 