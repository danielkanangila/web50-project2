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
