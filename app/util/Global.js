Ext.define("digilib.util.Global",{
    singleton : true,

    version:'1.0',
    config: {
          //phppath:"http://localhost/digilib/"
          phppath:"http://smpn1-siakhulu.sch.id/digilib/resources/php/"
          //phppath:"http://smpn1-siakhulu.sch.id/slims/api/v2/api/"          
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});