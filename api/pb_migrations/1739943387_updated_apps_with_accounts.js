/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4156731948")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) AS id,  -- Required for PocketBase\n    `Apps`.id AS app_id,\n    `Apps`.name,\n    `Apps`.created,\n    `Apps`.size,\n    `Apps`.category,\n    `Apps`.domain,\n    `Account`.id AS account_id,\n    `Account`.name AS account_name,\n    `Account`.admin\nFROM `Apps`\nJOIN `Account` ON `Apps`.account = `Account`.id;\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_jX1l")

  // remove field
  collection.fields.removeById("_clone_7Mqi")

  // remove field
  collection.fields.removeById("_clone_r8eX")

  // remove field
  collection.fields.removeById("_clone_Xvkf")

  // remove field
  collection.fields.removeById("_clone_BmH3")

  // remove field
  collection.fields.removeById("_clone_3y6T")

  // remove field
  collection.fields.removeById("_clone_wZoj")

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_qeUl",
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
    "id": "_clone_S0Sx",
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
    "id": "_clone_SB6a",
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
    "id": "_clone_ofAl",
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
    "id": "_clone_LDvV",
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
    "id": "_clone_QnH7",
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

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_1VIp",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "admin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4156731948")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) AS id,  -- Required for PocketBase\n    `Apps`.id AS app_id,\n    `Apps`.name,\n    `Apps`.created,\n    `Apps`.size,\n    `Apps`.category,\n    `Apps`.domain,\n    `Account`.id AS account_id,\n    `Account`.name AS account_name,\n  `Account`.admin\nFROM `Apps`\nINNER JOIN `Account` ON `Apps`.account = `Account`.id;\n"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_jX1l",
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
    "id": "_clone_7Mqi",
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
    "id": "_clone_r8eX",
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
    "id": "_clone_Xvkf",
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
    "id": "_clone_BmH3",
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
    "id": "_clone_3y6T",
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

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_wZoj",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "admin",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_qeUl")

  // remove field
  collection.fields.removeById("_clone_S0Sx")

  // remove field
  collection.fields.removeById("_clone_SB6a")

  // remove field
  collection.fields.removeById("_clone_ofAl")

  // remove field
  collection.fields.removeById("_clone_LDvV")

  // remove field
  collection.fields.removeById("_clone_QnH7")

  // remove field
  collection.fields.removeById("_clone_1VIp")

  return app.save(collection)
})
