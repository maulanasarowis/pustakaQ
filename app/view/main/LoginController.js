    Ext.define('digilib.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function() {
        var form = this.getView();
        var me = this;
        
        var username = form.getFields('email').getValue();         
        var password = form.getFields('password').getValue(); 
        var store = Ext.getStore('login');
        //var member_id = store2.data.items[0].data.member_id;

        // jumlah = store.data.items.length;
        if(username && password){
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            Ext.getStore('login').load(function(records, operation, success) { 
                // alert(success);
                if (success){
                    form.hide();
                    var member = Ext.getStore('login').getAt(0).data.member_id;
                    localStorage.setItem('member_id',member);
                    Ext.Msg.alert('Selamat !!!', 'Berhasil Login', Ext.emptyFn);
                    var store2 = Ext.getStore('buku');
                    var store3 = Ext.getStore('ipa1');
                    var store4 = Ext.getStore('riwayat');
                    var store5 = Ext.getStore('listBookmark');
                    store5.load();
                    store2.load();
                    store3.load();
                    store4.load();
    
                }else{
                    Ext.Msg.alert('Maaf !!!', 'Username dan Password Salah', Ext.emptyFn);
                    form.reset();
                    localStorage.clear();
                }
                
            }); 
        }else{
            Ext.toast('The email/password provided is invalid.');
        }     
        // if(username && password){
        //     for (i=0; i<jumlah; i++){                
        //         if(store.data.items[i].data.member_name == username && store.data.items[i].data.mpasswd == password){
        //            form.hide();  
        //            
        //         }else{
        //            form.reset();
        //         }           
        //     }
        // }else{
        //     Ext.toast('The email/password provided is invalid.');            
        // }    
                 
    }
});