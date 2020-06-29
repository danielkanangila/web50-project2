import uuid
from jsonschema import Draft4Validator, validators, ValidationError

from settings import store


class Model(object):

    def __init__(self, storage_name):
        self.__storage_name = storage_name
        self.validation_schema = {}

    def __iter__(self):
        first_key = list(self.__dict__.keys())[0]
        for attribute_name in self.__dict__:
            if attribute_name != "validation_schema" and attribute_name != first_key:
                yield(attribute_name, self.__dict__[attribute_name])

    def find_all(self):
        return store.find_all(self.__storage_name)

    def find_by_id(self, item_id):
        result = store.find(self.__storage_name, key="id", value=item_id)

        if not result:
            return []

        self.set_attributes(result[0])
        return self

    def find_where(self, key, value):
        return store.find(self.__storage_name, key, value)

    def create(self, payload):
        self.set_attributes(payload)
        self.before_create()
        self.validator().validate(dict(self))
        self.id = uuid.uuid4().hex
        result = store.add(self.__storage_name, dict(self))
        self.set_attributes(result)
        self.after_create()
        return dict(self)

    def before_create(self):
        pass

    def after_create(self):
        pass

    def update(self, item_id, payload):
        self.set_attribute(payload)
        self.before_update()
        self.validator().validate(dict(self))
        result = store.update(self.__storage_name, dict(self))
        self.set_attribute(result)
        self.after_update()
        return dict(self)

    def before_update(self):
        pass

    def after_update(self):
        pass

    def remove(self, item_id):
        return store.remove(self.__storage_name, key="id", value=item_id)

    def validator(self):
        def unique(validator, value, instance, schema):
            if store.contains(self.__storage_name, key=value, value=instance):
                yield ValidationError(f"`{value}` `{instance}` already exists.")

        all_validators = dict(Draft4Validator.VALIDATORS)
        all_validators["unique"] = unique

        MyValidator = validators.create(
            meta_schema=Draft4Validator.META_SCHEMA,
            validators=all_validators
        )

        return MyValidator(self.validation_schema)

    def set_attributes(self, data):
        for key in data:
            setattr(self, key, data[key])
