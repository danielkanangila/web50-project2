import sys
from flask import Blueprint, render_template, jsonify, request
from flask_login import login_required

from models import Channel, Message

channel = Channel()
message = Message()

main_bp = Blueprint(
    "routes_bp", __name__
)


@main_bp.route("/")
@main_bp.route("/login")
def index():
    return render_template("index.html")

# Template render by the front app


@main_bp.route("/channels")
@main_bp.route("/channels/<string:channel_id>")
@login_required
def protected_route(channel_id=None):
    return render_template("index.html")

# Get messages


@main_bp.route("/api/channels/<string:channel_id>")
@login_required
def retrieve_channel_by_id(channel_id):
    try:
        stored_channel = channel.find_where("id", int(channel_id))
        msg = message.find_where("to", stored_channel[0])
        return jsonify({
            "channel": stored_channel[0],
            "messages": msg
        }), 200
    except Exception as e:
        print(sys.exc_info(), e)
        return jsonify({"message": "An error occurred while trying retrieve channel messages"}), 500

# Get channel list


@main_bp.route("/api/channels")
@login_required
def get_channels():
    return jsonify(channel.find_all())

# create_channel


@main_bp.route("/api/channels", methods=["POST"])
@login_required
def create_channel():
    try:
        channel.create(request.json)
        return jsonify(channel.find_all()), 200
    except KeyError as error:
        print(sys.exc_info(), error)
        return jsonify({"message": "An error occurred while trying create a new channel"}), 500
    except Exception as e:
        print(sys.exc_info(), e)
        return jsonify({"message": "An unknown error occurred"}), 500
