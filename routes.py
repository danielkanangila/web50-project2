from flask import Blueprint, render_template

main_bp = Blueprint(
    "routes_bp", __name__
)


@main_bp.route("/")
def index():
    return render_template("index.html")


@main_bp.route("/login")
@main_bp.route("/channels")
@main_bp.route("/channels/<string:channel_id>")
def protected_route(channel_id=None):
    return render_template("index.html")
