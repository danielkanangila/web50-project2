import os

from flask import Flask
from flask_socketio import SocketIO, emit
from flask_login import LoginManager

login_manager = LoginManager()


def create_app():
    app = Flask(__name__, instance_relative_config=False)

    # App configuration
    app.config.from_object('config.Config')

    # Initialize SocketIO
    socketio = SocketIO(app)

    # Initialize Plugins
    login_manager.init_app(app)

    with app.app_context():
        from routes import main_bp
        from auth import auth_bp

        # Register Blueprints
        app.register_blueprint(main_bp)
        app.register_blueprint(auth_bp)

    return app
