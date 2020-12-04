Ext.define('digilib.store.HistoryPeminjaman', {
    extend: 'Ext.data.Store',

    alias: 'store.listBookmark',
    storeId: 'listBookmark',


    fields: [
        'loan_date','due_date','return_date','title'
    ],
    sorters: [{
        property: 'tanggal_bookmark',
        direction: 'ASC'
    }],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'jsonp',
        api: {

             read: digilib.util.Global.getPhppath()+'history_bookmark.php' 
             //read: digilib.util.Global.getPhppath()+'history_bookmark'  
                       
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
