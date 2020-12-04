Ext.define('digilib.store.Bookmark', {
    extend: 'Ext.data.Store',

    alias: 'store.ipa1',
    storeId: 'ipa1',

    fields: [
        'member','file','judul','gambar'
    ],
    sorters: [{
    property: 'judul',
    direction: 'ASC'
    }],
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'jsonp',
        api: { 
               read: digilib.util.Global.getPhppath()+'bookmark.php' ,
             //read: digilib.util.Global.getPhppath()+'bookmark' ,             
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    },
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
