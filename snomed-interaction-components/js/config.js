//It can be time consuming to load all the collections into mongo.  If you are only loading one collection
//set it here and all GUI elements will use this collection.  Used by switchReleases function
var mongoDetails = {
    database: 'en-edition',
    collection: 'v20180131',
    mongoRestServer: 'http://browser-backend.com/api/snomed'
};

var paramDetails ={
        editionName:'PAMI Edition',
        languageRefset:'900000000000509007'
};