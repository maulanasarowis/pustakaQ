/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('digilib.view.main.MenuKeranjang', {
    extend: 'Ext.tab.Panel',
    xtype: 'menukeranjang',

    requires: [
        'Ext.MessageBox',
        'digilib.view.main.ToolbarBookmark',
        'digilib.view.main.ToolbarModul',
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
            title: 'Buku Baca',
            iconCls: 'x-fa fa-bookmark',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'toolbarbookmark',
            }]
        },{
            title: 'Buku Wajib',
            iconCls: 'x-fa fa-book',
            layout:'fit',
            items: [{
                xtype: 'toolbarmodul',
            }],
        }
    ]
});
