/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1664626482")

  // remove field
  collection.fields.removeById("text522136100")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1664626482")

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text522136100",
    "max": 0,
    "min": 0,
    "name": "element_id",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
