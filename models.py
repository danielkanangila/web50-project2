from werkzeug.security import generate_password_hash, check_password_hash

from model import Model


class User(Model):
    def __init__(self):
        super().__init__()
        self.schema = {
            "type": "object",
            "required": ["displayName", "password"],
            "properties": {
                "displayName": {"type": "string", "is_unique": "displayName"},
                "password": {"type": "string", min: 8},
            }
        }

    def get(self, user_id):
        user = self.find_where(key=id, value=user_id)
        return user[0] if len(user) else None

    def before_create(self, payload):
        payload["password"] = generate_password_hash(
            payload["password"],
            method="sha256"
        )

        return {**payload, "is_active": True}

    def check_password(self, stored_password, password):
        return check_password_hash(stored_password, password)


class Channel(Model):
    def __init__(self):
        super().__init__()
        self.schema = {
            "type": "object",
            "required": ["name"],
            "properties": {
                "name": {"type": "string", "is_unique": "name"}
            }
        }


class Message(Model):
    def __init__(self):
        super().__init__()
        self.schema = {
            "type": "object",
            "required": ["from", "to", "message", "created_at"],
            "properties": {
                "from": {"type": "object"},
                "to": {"type": "object"},
                "message": {"type": "string"},
                "created_at": {"type": "string"}
            }
        }
