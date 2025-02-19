/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
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
        "collectionId": "pbc_25357001802",
        "hidden": false,
        "id": "relation2038898989",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "app_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
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
      },
      {
        "hidden": false,
        "id": "_clone_DWyd",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2535700180",
        "hidden": false,
        "id": "relation2607505338",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "account_id",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
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
      }
    ],
    "id": "pbc_4156731948",
    "indexes": [],
    "listRule": null,
    "name": "apps_with_accounts",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT \n    (ROW_NUMBER() OVER()) AS id,  -- Required for PocketBase\n    `Apps`.id AS app_id,\n    `Apps`.name,\n    `Apps`.created,\n    `Apps`.size,\n    `Apps`.category,\n    `Apps`.domain,\n    `Account`.id AS account_id,\n    `Account`.name AS account_name\nFROM `Apps`\nINNER JOIN `Account` ON `Apps`.account = `Account`.id;\n",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4156731948");

  return app.delete(collection);
})
