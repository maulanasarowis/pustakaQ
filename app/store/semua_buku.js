Ext.define('digilib.store.semua_buku', {
    extend: 'Ext.data.Store',

    alias: 'store.semua_buku',
    storeId: 'semua_buku',
    
    fields: [
        'biblio_id','title','publish_year','notes','image','file_att','publisher_name','call_number'
    ],
    sorters: [{
        property: 'title',
        direction: 'ASC'
    }],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'jsonp',
        api: {
            read: digilib.util.Global.getPhppath()+'buku.php' ,
             //read: digilib.util.Global.getPhppath()+'buku' ,       
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    }
});
