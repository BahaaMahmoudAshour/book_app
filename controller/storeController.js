var queries = require('../db/queries');
var dbConnection = require('../db/connection');
var util = require('../util/utility');

exports.getStoreList = async(req, res) => {
    try {
        var storeListQuery = queries.queryList.GET_STORE_LIST_QUERY;
        var result = await dbConnection.dbQuery(storeListQuery);
        return res.status(200).send(JSON.stringify(result));
    } catch (error) {
        console.log("Error : " + error);
        return res.status(500).send({ error: "Failed to list store" });
    }
}

exports.saveStore = async(req, res) => {
    try {
        var createdBy = "admin";
        var createdOn = new Date();
        //req.body
        var storeName = req.body.storeName;
        var address = req.body.address;
        if (!storeName || !address) {
            return res.status(500).send({ error: "Store name and address shouldn't be empty please check and try again." });
        }

        console.log("storeCode");
        var storeCode = util.generateStoreCode();
        console.log(storeCode);
        values = [
            storeName,
            address,
            createdOn,
            createdBy,
            storeCode
        ];


        var storeSaveQuery = queries.queryList.SAVE_Store_QUERY;
        await dbConnection.dbQuery(storeSaveQuery ,values);

        return res.status(201).send("Successfully store created");

    } catch (error) {
        console.log("Error : " + error);
        return res.status(500).send({ error: "Failed to Save new  store" });
    }
}