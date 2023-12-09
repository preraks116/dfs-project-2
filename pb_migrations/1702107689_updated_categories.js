/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78sdj8qtdecoe92")

  // remove
  collection.schema.removeField("o03rkcox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uqrrrfdx",
    "name": "ebooks",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2fa88fo4ga3wowy",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78sdj8qtdecoe92")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o03rkcox",
    "name": "ebooks",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("uqrrrfdx")

  return dao.saveCollection(collection)
})
