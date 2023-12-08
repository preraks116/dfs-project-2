/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "78sdj8qtdecoe92",
    "created": "2023-12-08 13:11:36.211Z",
    "updated": "2023-12-08 13:11:36.211Z",
    "name": "Categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5mcmrfwn",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("78sdj8qtdecoe92");

  return dao.deleteCollection(collection);
})
