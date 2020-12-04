Ext.define("digilib.util.IMAGE",{
    singleton : true,

    version:'1.0',
    config: {
	    //phppath:"http://localhost/digilib/docs/",
      phppath:"http://smpn1-siakhulu.sch.id/digilib/resources/php/docs/"      

    },
    constructor : function(config) {
        this.initConfig(config);
    }
});