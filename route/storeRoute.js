const express =  require('express');
const router = express.Router();
const storeCtrl = require('../controller/storeController');

router.get("/stores" , storeCtrl.getStoreList);
router.post("/stores/save" , storeCtrl.saveStore);

module.exports = router;