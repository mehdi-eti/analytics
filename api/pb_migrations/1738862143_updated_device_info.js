/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2990655257")

  // update collection data
  unmarshal({
    "name": "Device"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2990655257")

  // update collection data
  unmarshal({
    "name": "device_info"
  }, collection)

  return app.save(collection)
})
