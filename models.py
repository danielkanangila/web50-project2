import uuid
from utils import *
from jsonschema import Draft4Validator, validators, ValidationError
from werkzeug.security import generate_password_hash, check_password_hash


class Model:

    def __init__(self):
        self.store = []
        self.schema = {}

    def find_all(self):
        return self.store

    def find_by_id(self, item_id):
        return list(filter(lambda item: item['id'] == item_id, self.store))

    def find_where(self, key, value):
        return list(filter(lambda item: item[key] == value, self.store))

    def create(self, payload):
        payload = self.before_create(payload)
        # validation
        self.validator().validate(payload)
        # added id
        payload = {
            "id": uuid.uuid4(),
            **payload
        }
        # add to store
        self.store.append(payload)
        return self.after_create(payload)

    def update(self, item_id, payload):
        self.validator().validate(payload)
        self.store = list(
            map(lambda item: payload if item["id"] == item_id else item, self.store))
        return self.find_by_id(item_id)

    def remove(self, item_id):
        self.store = list(
            filter(lambda item: item["id"] != item_id, self.store))
        return item_id

    def before_create(self, payload):
        return payload

    def after_create(self, result):
        return result

    def validator(self):
        def is_unique(validator, value, instance, schema):
            if is_exists(self.store, key=value, value=instance):
                yield ValidationError(f"`{value}` `{instance}` already exists")

        all_validators = dict(Draft4Validator.VALIDATORS)
        all_validators["is_unique"] = is_unique

        MyValidator = validators.create(
            meta_schema=Draft4Validator.META_SCHEMA,
            validators=all_validators
        )

        return MyValidator(self.schema)


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
