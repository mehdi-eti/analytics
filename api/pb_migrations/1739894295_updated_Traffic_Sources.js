/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1585872421")

  // update collection data
  unmarshal({
    "name": "Traffic"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1585872421")

  // update collection data
  unmarshal({
    "name": "Traffic_Sources"
  }, collection)

  return app.save(collection)
})
