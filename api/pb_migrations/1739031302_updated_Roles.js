/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3166289704")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1466534506",
    "maxSelect": 1,
    "name": "role",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "admin",
      "editor",
      "viewer"
    ]
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json770559087",
    "maxSize": 0,
    "name": "permissions",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3166289704")

  // remove field
  collection.fields.removeById("select1466534506")

  // remove field
  collection.fields.removeById("json770559087")

  return app.save(collection)
})
