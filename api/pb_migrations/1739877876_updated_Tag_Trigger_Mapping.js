/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3989823705")

  // update collection data
  unmarshal({
    "name": "Trigger"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3989823705")

  // update collection data
  unmarshal({
    "name": "Tag_Trigger_Mapping"
  }, collection)

  return app.save(collection)
})
