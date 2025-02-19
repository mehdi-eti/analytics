/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2535700180",
        "hidden": false,
        "id": "relation2100713124",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "account",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1579384326",
        "max": 0,
        "min": 0,
        "name": "name",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select105650625",
        "maxSelect": 1,
        "name": "category",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "هنر و سرگرمی، خودرو و وسایل نقلیه، زیبایی و تناسب اندام، کتاب و ادبیات، تجارت و صنعتی، کامپیوتر و الکترونیک، امور مالی، غذا و نوشیدنی، بازی، سلامت، خانه و باغ، اینترنت و مخابرات، مشاغل و آموزش، قانون و دولت، اخبار، جوامع آنلاین، علوم ورزشی، مردم و جامعه",
          "سفر",
          "سایر فعالیت های تجاری"
        ]
      },
      {
        "hidden": false,
        "id": "select4156564586",
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
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_25357001802",
    "indexes": [],
    "listRule": null,
    "name": "Apps",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_25357001802");

  return app.delete(collection);
})
