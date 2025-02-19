/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // remove field
  collection.fields.removeById("date4055711663")

  // remove field
  collection.fields.removeById("json785210667")

  // remove field
  collection.fields.removeById("date1648226099")

  // add field
  collection.fields.addAt(15, new Field({
    "hidden": false,
    "id": "select4020398583",
    "maxSelect": 1,
    "name": "sex",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "مرد",
      "زن"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("_pb_users_auth_")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "date4055711663",
    "max": "",
    "min": "",
    "name": "last_login_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "json785210667",
    "maxSize": 0,
    "name": "loccation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "date1648226099",
    "max": "",
    "min": "",
    "name": "first_visit",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("select4020398583")

  return app.save(collection)
})
