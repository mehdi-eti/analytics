/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_920015660")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select154121870",
    "maxSelect": 1,
    "name": "device",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "موبایل",
      "دسکتاپ"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_920015660")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "select154121870",
    "maxSelect": 1,
    "name": "device",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "موبایل، دسکتاپ"
    ]
  }))

  return app.save(collection)
})
