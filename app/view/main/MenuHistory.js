/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('digilib.view.main.MenuHistory', {
    extend: 'Ext.tab.Panel',
    xtype: 'menuhistory',

    requires: [
        'Ext.MessageBox',
        'digilib.view.main.ToolbarRiwayatBoking',
        'digilib.view.main.ToolbarPeminjaman',
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'top',

    items: [
        {
            title: 'Peminjaman',
            //iconCls: 'x-fa fa-bookmark',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'toolbarloan',
            }]
        },{
            title: 'Pemesanan',
            //iconCls: 'x-fa fa-book',
            layout:'fit',
            items: [{
                xtype: 'toolbarriwayat',
            }]
        }
    ]
});
