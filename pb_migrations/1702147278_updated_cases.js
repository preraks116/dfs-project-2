/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx5s3tgrsianvgd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2nnj1ama",
    "name": "link",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dx5s3tgrsianvgd")

  // remove
  collection.schema.removeField("2nnj1ama")

  // remove
  collection.schema.removeField("oyzetcjb")

  return dao.saveCollection(collection)
})
