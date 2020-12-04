Ext.define('digilib.store.Nilai', {
    extend: 'Ext.data.Store',

    alias: 'store.nilai',
    storeId: 'nilai',
    //autoLoad: true,
    //autoSync: true,

    fields: [
        // 'kode_nilai', 'nilai'
        'id_siswa', 'id_kuis', 'score' 
    ],

    proxy: {
        type: 'jsonp',
        api: {
              create: digilib.util.Global.getPhppath()+'nilai.php' ,
              //create: digilib.util.Global.getPhppath()+'nilai' ,              
                     
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    }
    // listeners: {
    //     beforeload: function(store, operation, eOpts){   
    //         this.getProxy().getExtraParams({
    //             id_siswa: 4, //localStorage.getItem('member_id'),
    //             id_kuis: 5, //localStorage.getItem('id_kuis'),
    //             score: 100 //localStorage.getItem('score akhir')
    //         })
    //     }
    // }
});
