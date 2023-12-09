/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg4fbti85wjll2o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "snjlqgkx",
    "name": "name_key",
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
  const collection = dao.findCollectionByNameOrId("bg4fbti85wjll2o")

  // remove
  collection.schema.removeField("snjlqgkx")

  return dao.saveCollection(collection)
})
