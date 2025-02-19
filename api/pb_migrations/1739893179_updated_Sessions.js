/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_593012572")

  // remove field
  collection.fields.removeById("text154121870")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select154121870",
    "maxSelect": 1,
    "name": "device",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "desktop",
      "mobile",
      "tablet",
      "other"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_593012572")

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text154121870",
    "max": 0,
    "min": 0,
    "name": "device",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select154121870")

  return app.save(collection)
})
