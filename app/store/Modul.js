Ext.define('digilib.store.Modul', {
    extend: 'Ext.data.Store',

    alias: 'store.buku',
    storeId: 'buku',
    autoLoad: true,
    autoSync: true,

    fields: [
        'id_buku','file_att','gambar','judul_buku','kelas'
    ],
    sorters: [{
    property: 'judul_buku',
    direction: 'ASC'
    }],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'jsonp',
        api: {
             read: digilib.util.Global.getPhppath()+'buku_wajib.php'
              //read: digilib.util.Global.getPhppath()+'buku_wajib'  
                       
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    }
    ,
    listeners:{
        load: function(records, successful, operation){            
        },
        beforeload: function(store, operation, eOpts){
            this.getProxy().setExtraParams({
                user_name: localStorage.getItem('username')          
            });
        }
    }
});
