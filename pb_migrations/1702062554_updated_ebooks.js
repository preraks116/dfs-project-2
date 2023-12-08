/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2fa88fo4ga3wowy")

  // remove
  collection.schema.removeField("j83qaibq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tjsaaqmw",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2fa88fo4ga3wowy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j83qaibq",
    "name": "date",
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

  // remove
  collection.schema.removeField("tjsaaqmw")

  return dao.saveCollection(collection)
})
