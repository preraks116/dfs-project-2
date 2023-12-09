/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx5s3tgrsianvgd")

  // remove
  collection.schema.removeField("m5aynzqp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "etb7mvo9",
    "name": "tags",
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
  const collection = dao.findCollectionByNameOrId("dx5s3tgrsianvgd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m5aynzqp",
    "name": "tags",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("etb7mvo9")

  return dao.saveCollection(collection)
})
