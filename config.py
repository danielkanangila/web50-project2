from os import environ,


class Config:
    FLASK_APP = "application.py"
    FLASK_ENV = environ.get("FLASK_ENV")
    SECRET_KEY = environ.get('SECRET_KEY')

    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'
    COMPRESSOR_DEBUG = environ.get('COMPRESSOR_DEBUG')
