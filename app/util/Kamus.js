Ext.define("digilib.util.Globals",{
    singleton : true,

    version:'1.0',
    config: {
	    //phppath: /*'http://localhost/kamus',*/'https://arbihaza.com/Kamus/resources',//
	     phppath: "http://localhost/PHP_Akasia",
	     //phppath: "/PHP_Akasia",
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});