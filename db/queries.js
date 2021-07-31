exports.queryList = {
    GET_STORE_LIST_QUERY: 'SELECT store_id, store_name, store_address, created_on, created_by, store_code FROM bms.store',
    SAVE_Store_QUERY: 'INSERT INTO bms.store (store_name, store_address, created_on, created_by, store_code) VALUES($1, $2, $3, $4, $5)',

}