/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_593012572")

  // remove field
  collection.fields.removeById("text3134083924")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_593012572")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3134083924",
    "max": 0,
    "min": 0,
    "name": "traffic_source",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
