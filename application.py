import os
from flask import Flask
from flask_login import LoginManager
from flask_session import Session

from config import store, socketio

# Creating data storages. Acting as database
store.create_storages(["channels", "messages", "users"])

login_manager = LoginManager()


def create_app():
    app = Flask(__name__, instance_relative_config=False)

    # App configuration
    app.config.from_object('config.Config')

    # Initialize session
    Session(app)

    # Initialize SocketIO
    socketio.init_app(app, manage_session=False, cors_allowed_origins="*")

    # Initialize Plugins
    login_manager.init_app(app)

    with app.app_context():
        from routes import main_bp
        from auth import auth_bp

        # Register Blueprints
        app.register_blueprint(main_bp)
        app.register_blueprint(auth_bp)

    return app


if __name__ == "__main__":
    create_app().run()
