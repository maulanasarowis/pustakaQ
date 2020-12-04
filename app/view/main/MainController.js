

/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('digilib.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onRegister: function () {        
        
        var mulai,berhenti,store;
        
        mulai  = Ext.getCmp('mulai').getValue();
        berhenti = Ext.getCmp('berhenti').getValue();
        console.log(mulai);
        

         store = Ext.getStore('tes');
        store.insert(0, [{ mulai: mulai, berhenti: berhenti}]);
         store.sync();

        // // Ext.getCmp('basicform').reset();

        //  Ext.Msg.alert('Berhasil', 'Silahkan Ambil Diperpustaka !!!', Ext.emptyFn);

         console.log('store: ', store);       
    }
});
