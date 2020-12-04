Ext.define('digilib.view.main.ToolbarRiwayatBoking', {
    extend: 'Ext.Panel',
    xtype: 'toolbarriwayat',

    requires: [
        'Ext.Toast',
        'Ext.field.Text',
        'Ext.field.Select',
        'digilib.view.datahistory.RiwayatBoking',
    ],
    scrollable: true,    
    items: [
        {
            xtype: 'listRiwayat' 
        }
    ]
});