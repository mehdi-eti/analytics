/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_920015660")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3166289704",
    "hidden": false,
    "id": "relation1466534506",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_920015660")

  // remove field
  collection.fields.removeById("relation1466534506")

  return app.save(collection)
})
