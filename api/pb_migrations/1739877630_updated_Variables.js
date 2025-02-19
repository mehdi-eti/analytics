/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1846614314")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select4144913218",
    "maxSelect": 1,
    "name": "variable_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "constant",
      "javascript",
      "url",
      "cookie"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1846614314")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select4144913218",
    "maxSelect": 1,
    "name": "variable_type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "'constant'",
      "'javascript'",
      "'url'",
      "'cookie'"
    ]
  }))

  return app.save(collection)
})
