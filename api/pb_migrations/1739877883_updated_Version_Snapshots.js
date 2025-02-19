/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924701211")

  // update collection data
  unmarshal({
    "name": "Snapshots"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1924701211")

  // update collection data
  unmarshal({
    "name": "Version_Snapshots"
  }, collection)

  return app.save(collection)
})
