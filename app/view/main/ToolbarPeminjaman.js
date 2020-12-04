Ext.define('digilib.view.main.ToolbarPeminjaman', {
    extend: 'Ext.Panel',
    xtype: 'toolbarloan',

    requires: [
        'Ext.Toast',
        'Ext.field.Text',
        'Ext.field.Select',
        'digilib.view.datahistory.RiwayatPeminjaman',
    ],
    scrollable: true,    
    items: [
        {
            xtype: 'listRiwayatBookmark' 
        }
    ]
});