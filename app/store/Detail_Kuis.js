Ext.define('digilib.store.Detail_Kuis', { 
    extend: 'Ext.data.Store',

    alias: 'store.detail_kuis',

//tambahan
    storeId:'detail_kuis', 
    autoLoad: true,
    autoSync: true,
//
    fields: [
         'kode_soal'
        //'id_kuis', 'id_kuis_master', 'soal', 'a', 'b', 'c', 'd', 'jawaban', 'gambar', 'date', 'time'
    ],

//tambahan
     proxy: {
        type: 'jsonp', 
        api: {

        read: digilib.util.Global.getPhppath()+'detail_kuis.php'
        //read: digilib.util.Global.getPhppath()+'detail_kuis'
    },
//    
//
    reader: { 
            type: 'json',
            rootProperty: 'items', 
            messageProperty: 'error'
        }
    } 
//    
});