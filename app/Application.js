/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('digilib.Application', {
    extend: 'Ext.app.Application',

    name: 'digilib',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        'digilib.store.Bookmark',
        'digilib.store.Modul',
        'digilib.store.semua_buku',
        'digilib.store.login',
        'digilib.store.HistoryBookmark',
        'digilib.store.HistoryPeminjaman',
        'digilib.store.Kuis',
        'digilib.store.Nilai',
        'digilib.store.Detail_Kuis',
        'digilib.store.jawaban'

       
            //   'login' 
        // TODO: add global / shared stores here
    ],

    
    launch: function () {
            localStorage.setItem('soal1', 0);
            localStorage.setItem('No', 1);
            localStorage.setItem('jawaban', 'none');
            localStorage.setItem('scoreawal', 0);
            localStorage.setItem('score akhir', 0);
            localStorage.setItem('nilai', 0);
            
         var loggedIn;
         loggedIn = localStorage.getItem("username");
         console.log(loggedIn);
         if (!loggedIn) {
             this.overlay = Ext.Viewport.add({                
                 xtype: 'login',
                 floated: true,
                 showAnimation: {
                     type: 'popIn',
                     duration: 250,
                     easing: 'ease-out'
                 },
                 hideAnimation: {
                     type: 'popOut',
                     duration: 250,
                     easing: 'ease-out'
                 },
                 // centered: true,
                 width: "100%",
                 height: "100%",
                 scrollable: true
             });
             this.overlay.show();   
        }
         
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
