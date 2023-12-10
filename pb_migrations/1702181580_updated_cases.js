/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx5s3tgrsianvgd")

  // remove
  collection.schema.removeField("oyzetcjb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxz8bjgi",
    "name": "content",
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
    "id": "oyzetcjb",
    "name": "content",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  // remove
  collection.schema.removeField("qxz8bjgi")

  return dao.saveCollection(collection)
})
