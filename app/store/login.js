Ext.define('digilib.store.login', {
    extend: 'Ext.data.Store',

    alias: 'store.login',
    storeId: 'login',
    // autoLoad: true,
    // autoSync: true,

    fields: [
        'member_name',' mpasswd','member_id'
    ],

    proxy: {
        type: 'jsonp',
        api: {
             read: digilib.util.Global.getPhppath()+'login.php'  
             //read: digilib.util.Global.getPhppath()+'login'   
                     
        },
        reader: {
            type: 'json',
            rootProperty: 'items',
            messageProperty: 'error'
        }
    },listeners:{
        beforeload: function(store, operation, eOpts){
            this.getProxy().setExtraParams({
                username: localStorage.getItem('username'),
                password: localStorage.getItem('password')
                //role: localStorage.getItem('role')               
            });
        }
    }
});
