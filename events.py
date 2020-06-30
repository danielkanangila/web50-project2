from flask import session
from flask_socketio import emit, join_room, leave_room

from authentication import authenticated_only
from config import socketio
from models import Channel, Message

channel = Channel()
message = Message()


@socketio.on("joined")
@authenticated_only
def joined(channel_id):
    session.set("room", channel_id)
    join_room(channel_id)
    emit('status', {"message": f"Successfull joined room with id {channel_id}"},
         room=channel_id, broadcast=True)


@socketio.on("chat")
@authenticated_only
def message_handler(data):
    room = session.get("room")
    message.create({
        **data,
        "to": room
    })
    emit("message", dict(message), room=room)


@socketio.on("leave")
@authenticated_only
def left():
    room = session.get("room")
    leave_room(room)
    emit("status", f"Successfull left room with id {room }")
