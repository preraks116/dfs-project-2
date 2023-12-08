/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg4fbti85wjll2o")

  collection.name = "authors"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bg4fbti85wjll2o")

  collection.name = "author"

  return dao.saveCollection(collection)
})
