/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_25357001802")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "هنر و سرگرمی، خودرو و وسایل نقلیه، زیبایی و تناسب اندام، کتاب و ادبیات، تجارت و صنعتی، رایانه و الکترونیک، امور مالی، غذا و نوشیدنی، بازی، سلامت، خانه و باغ، اینترنت و مخابرات، مشاغل و آموزش، حقوق و دولت، اخبار، ارتباطات آنلاین جامعه، اموال، مرجع، علم، خرید، ورزش، مسافرت، سایر فعالیت های تجاری"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_25357001802")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "select105650625",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "هنر و سرگرمی، خودرو و وسایل نقلیه، زیبایی و تناسب اندام، کتاب و ادبیات، تجارت و صنعتی، رایانه و الکترونیک، امور مالی، غذا و نوشیدنی، بازی، سلامت، خانه و باغ، اینترنت و مخابرات، مشاغل و آموزش، حقوق و دولت، اخبار، جوامع آنلاین جامعه، اموال، مرجع، علم، خرید، ورزش، مسافرت، سایر فعالیت های تجاری"
    ]
  }))

  return app.save(collection)
})
