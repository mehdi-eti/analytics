/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2535700180")

  // update collection data
  unmarshal({
    "name": "Account"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2535700180")

  // update collection data
  unmarshal({
    "name": "Apps"
  }, collection)

  return app.save(collection)
})
