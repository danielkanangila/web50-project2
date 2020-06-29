class Store(object):
    def __init__(self):
        self.storages = dict()

    def create_storages(self, storages):
        for storage in storages:
            self.storages[storage] = []

    def add(self, storage_name, payload):
        self.storages[storage_name].append(payload)
        return payload

    def update(self, storage_name, item_id, payload):
        self.storages[storage_name] = list(
            map(lambda item: payload if item["id"] ==
                item_id else item, self.storages[storage_name])
        )
        result = self.find(storage_name, key="id", value=item_id)
        return result[0] if result else result

    def remove(self, storage_name, key, value):
        old_storage = self.storages[storage_name]
        self.storages[storage_name] = list(
            filter(lambda item: item[key] != value, old_storage))
        return {key: value}

    def find_all(self, storage_name):
        return self.storages[storage_name]

    def find(self, storage_name, key, value):
        return list(filter(lambda item: item[key] == value, self.storages[storage_name]))

    def contains(self, storage_name, key, value):
        if any(key in item for item in self.storages[storage_name]):
            result = self.find(storage_name, key, value)
            return True if result else False
        return False
