from os import environ
from store import Store

store = Store()


class Config:
    FLASK_APP = "application.py"
    FLASK_ENV = environ.get("FLASK_ENV")
    SECRET_KEY = environ.get('SECRET_KEY')
    SESSION_TYPE = "filesystem"

    STATIC_FOLDER = 'static'
    TEMPLATES_FOLDER = 'templates'
    COMPRESSOR_DEBUG = environ.get('COMPRESSOR_DEBUG')
