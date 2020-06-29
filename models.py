from flask_login import UserMixin
from flask_bcrypt import generate_password_hash, check_password_hash

from model import Model


class User(UserMixin, Model):
    def __init__(self):
        super().__init__("users")
        self.validation_schema = {
            "type": "object",
            "required": ["username", "displayName", "password"],
            "properties": {
                "username": {"type": "string", "unique": "username"}
            }
        }

    def before_create(self):
        self.password = generate_password_hash(self.password, 10)

    def check_password(self, password):
        return check_password_hash(self.password, password)


class Channel(Model):
    def __init__(self):
        super().__init__("channels")
        self.validation_schema = {
            "type": "object",
            "required": ["name"],
            "properties": {
                "name": {"type": "string", "is_unique": "name"}
            }
        }


class Message(Model):
    def __init__(self):
        super().__init__("messages")
        self.validation_schema = {
            "type": "object",
            "required": ["from", "to", "message", "created_at"],
            "properties": {
                "from": {"type": "object"},
                "to": {"type": "object"},
                "message": {"type": "string"},
                "created_at": {"type": "string"}
            }
        }

    def before_create(self):
        # The application can store only 100 messages per channel.
        # the attribute refer to a unique channel id.
        # retreive all messages while to[channelId] equal
        # to the current message destinaton. sort by created_at
        # if the result length equal to 100, replace the first entry using update method,
        # chang e the `id` to. else use move to create method
        result = self.find_where(key="to", value=self.to)

        if len(result) == 100:
            result.sort(key=lambda item: item["created_at"])
            payload = {
                "id": self.generate_id(),
                **dict(self)
            }
            current_id = result[0]["id"]
            return self.update(current_id, payload)
