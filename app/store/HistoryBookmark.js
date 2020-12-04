Ext.define('digilib.store.HistoryBookmark', {
    extend: 'Ext.data.Store',

    alias: 'store.riwayat',
    storeId: 'riwayat',


    fields: [
        'reserve_date','keterangan','title'
    ],
    sorters: [{
        property: 'reserve_date',
        direction: 'ASC'
    }],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'jsonp',
        api: {
             read: digilib.util.Global.getPhppath()+'history_reserved.php'
             //read: digilib.util.Global.getPhppath()+'history_reserved'  
                       
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    },
    listeners:{
        beforeload: function(store, operation, eOpts){
            this.getProxy().setExtraParams({
                user_name: localStorage.getItem('username')          
            });
        }
    }
});
