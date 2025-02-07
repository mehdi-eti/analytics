/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_436107559")

  // update collection data
  unmarshal({
    "name": "Traffic"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_436107559")

  // update collection data
  unmarshal({
    "name": "traffic_sources"
  }, collection)

  return app.save(collection)
})
