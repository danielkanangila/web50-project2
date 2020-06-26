import sys
from flask import Blueprint, session, request, jsonify
from flask_login import login_required, logout_user, current_user, login_user
from jsonschema.exceptions import ValidationError

from application import login_manager
from models import User

auth_bp = Blueprint(
    "auth", __name__,
)

user = User()


@login_manager.user_loader
def load_user(user_id):
    return user.get(user_id)


@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
    try:
        if current_user.is_authenticated:
            return jsonify({"message": "User is aleready logged in"}), 200

        stored_user = user.find_where(
            key="displayName", value=request.json["displayName"])

        if len(stored_user) and user.check_password(stored_user[0]["password"], request.json["password"]):
            login_user(stored_user[0])
            return jsonify(stored_user[0])

        return jsonify({"message": "Invalid credentials"}), 400

    except Exception as e:
        print(sys.exc_info(), e)
        return jsonify({"message": "An unknown error occurred"}), 500


@auth_bp.route("/api/auth/register", methods=["POST"])
def register():
    try:
        new_user = user.create(payload=request.json)
        login_user(new_user)

        return jsonify(new_user), 201
    except ValidationError as error:
        return jsonify({"message": error.message}), 400
    except Exception as e:
        print(sys.exc_info(), e)
        raise
        # return jsonify({"message": "An unknown error occurred"}), 500


@auth_bp.route("/api/auth/logout")
@login_required
def logout():
    logout_user()
    return jsonify({"ok": True}), 200
