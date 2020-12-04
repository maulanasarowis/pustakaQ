/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('digilib.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',
        'digilib.view.main.MainController',
        'digilib.view.main.MainModel',
        'digilib.view.main.Login',
        'digilib.view.main.LoginController',
        'digilib.view.dataview.Dataviewbookmark',
        'digilib.view.dataview.Dataviewmodul',
        'digilib.view.main.MenuHistory',
        //'digilib.store.Historybookmark'
        'digilib.view.main.KodeSoal',
        'digilib.view.main.Kuis',
   ],
    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'toolbarhome'
            }]
        },{
            title: 'Ruang Baca',
            iconCls: 'x-fa fa-book',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'menukeranjang'
            }]
        },{
            title: 'Kuis',
            iconCls: 'x-fa fa-pencil-square-o',
            layout :'fit',
            items :[{
                xtype: 'panel',
                id: 'kuispanel',
                layout: 'card',
                items: [{
                    xtype : 'kuis'
                },{
                    xtype: 'kodesoal'
                }]                 
            }],
            listeners:{
                activate: function() {
                    Ext.getCmp('kuispanel').setActiveItem(1);
                }
            }
        },{
            title: 'Riwayat',
            iconCls: 'x-fa fa-history',
            layout :'fit',
            items: [{
                xtype: 'menuhistory'
            }]
        }
    ]
});
