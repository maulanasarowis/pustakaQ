Ext.define("digilib.util.PDF",{
    singleton : true,

    version:'1.0',
    config: {
	    //phppath: "http://localhost/digilib/pdfjs/web/viewer.html",
	    phppath:"http://smpn1-siakhulu.sch.id/digilib/resources/php/pdfjs/web/viewer.html"
    },
    constructor : function(config) {
        this.initConfig(config);
    }
});