/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2311148481")

  // update collection data
  unmarshal({
    "name": "Views"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2311148481")

  // update collection data
  unmarshal({
    "name": "page_views"
  }, collection)

  return app.save(collection)
})
