Ext.define('digilib.store.jawaban', {
    extend: 'Ext.data.Store',

    alias: 'store.jawaban',
    storeId: 'jawaban',
    // autoLoad: true,
    // autoSync: true,

    fields: [
        // 'kode_nilai', 'nilai'
        'id_siswa', 'id_kuis', 'id_soal','knc_jawaban','jawaban' 
    ],

    proxy: {
        type: 'jsonp',
        api: {
              //create: digilib.util.Global.getPhppath()+'nilai.php' , 
              //create : 'http://192.168.100.40/slims8_akasia-master/api/v2/api/nilai'
             create  : "http://localhost/slim/jawaban.php"
             //read  : 'http://smpn1-siakhulu.sch.id/slims/api/v2/api/nilai'//?id_siswa=3&id_kuis=25&score=50' 
                     
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
