/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78sdj8qtdecoe92")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "95jilyjd",
    "name": "ebook_type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("78sdj8qtdecoe92")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "95jilyjd",
    "name": "cancer_type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
