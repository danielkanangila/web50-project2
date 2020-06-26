import sys
from flask import Blueprint, session, request, jsonify
from flask_login import login_required, logout_user, current_user, login_user
from jsonschema.exceptions import ValidationError

from models import Users

auth_bp = Blueprint(
    "auth", __name__,
)

users = Users()


@auth_bp.route("/api/auth/login", methods=["POST"])
def login():
    try:
        if current_user.is_authenticated:
            return jsonify({"message": "User is aleready logged in"}), 200

        user = users.find_where(
            key="displayName", value=request.json["displayName"])

        if user and users.check_password(user["password"], request.json["password"]):
            login_user(user)
            return jsonify(user)

        return jsonify({"message": "Invalid credentials"}), 400

    except Exception as e:
        print(sys.exc_info(), e)
        return jsonify({"message": "An unknown error occurred"}), 500


@auth_bp.route("/api/auth/logout", methods=["GET"])
def register():
    try:
        user = users.create(payload=request.json)
        login_user(user)

        return jsonify(user), 201
    except ValidationError as error:
        return jsonify({"message": error.message}), 400
    except Exception as e:
        print(sys.exc_info(), e)
        return jsonify({"message": "An unknown error occurred"}), 500


@auth_bp.route("/api/auth/register", methods=["POST"])
def logout():
    logout_user()
    return jsonify({"ok": True}), 200
