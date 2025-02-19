/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4156731948")

  // update collection data
  unmarshal({
    "listRule": "",
    "viewRule": ""
  }, collection)

  // remove field
  collection.fields.removeById("_clone_5VJa")

  // remove field
  collection.fields.removeById("_clone_DWyd")

  // remove field
  collection.fields.removeById("_clone_t86m")

  // remove field
  collection.fields.removeById("_clone_el6F")

  // remove field
  collection.fields.removeById("_clone_6X4b")

  // remove field
  collection.fields.removeById("_clone_oDzM")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Wenh",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_v1k6",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_e0SM",
    "maxSelect": 1,
    "name": "size",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "کوچک",
      "متوسط",
      "بزرگ",
      "خیلی بزرگ"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_FX41",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "هنر و سرگرمی",
      "خودرو و وسایل نقلیه",
      "زیبایی و تناسب اندام",
      "کتاب و ادبیات",
      "تجارت و صنعتی",
      "رایانه و الکترونیک",
      "امور مالی",
      "غذا و نوشیدنی",
      "بازی",
      "سلامت",
      "خانه و باغ",
      "اینترنت و مخابرات",
      "مشاغل و آموزش",
      "حقوق و دولت",
      "اخبار",
      "ارتباطات آنلاین جامعه",
      "اموال",
      "مرجع",
      "علم",
      "خرید",
      "ورزش",
      "مسافرت",
      "سایر فعالیت های تجاری"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ThdH",
    "max": 0,
    "min": 0,
    "name": "domain",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_i6yC",
    "max": 0,
    "min": 0,
    "name": "account_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4156731948")

  // update collection data
  unmarshal({
    "listRule": null,
    "viewRule": null
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_5VJa",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_DWyd",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_t86m",
    "maxSelect": 1,
    "name": "size",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "کوچک",
      "متوسط",
      "بزرگ",
      "خیلی بزرگ"
    ]
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_el6F",
    "maxSelect": 1,
    "name": "category",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "هنر و سرگرمی",
      "خودرو و وسایل نقلیه",
      "زیبایی و تناسب اندام",
      "کتاب و ادبیات",
      "تجارت و صنعتی",
      "رایانه و الکترونیک",
      "امور مالی",
      "غذا و نوشیدنی",
      "بازی",
      "سلامت",
      "خانه و باغ",
      "اینترنت و مخابرات",
      "مشاغل و آموزش",
      "حقوق و دولت",
      "اخبار",
      "ارتباطات آنلاین جامعه",
      "اموال",
      "مرجع",
      "علم",
      "خرید",
      "ورزش",
      "مسافرت",
      "سایر فعالیت های تجاری"
    ]
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_6X4b",
    "max": 0,
    "min": 0,
    "name": "domain",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_oDzM",
    "max": 0,
    "min": 0,
    "name": "account_name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_Wenh")

  // remove field
  collection.fields.removeById("_clone_v1k6")

  // remove field
  collection.fields.removeById("_clone_e0SM")

  // remove field
  collection.fields.removeById("_clone_FX41")

  // remove field
  collection.fields.removeById("_clone_ThdH")

  // remove field
  collection.fields.removeById("_clone_i6yC")

  return app.save(collection)
})
