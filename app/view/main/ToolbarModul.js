Ext.define('digilib.view.main.ToolbarModul', {
    extend: 'Ext.Panel',
    xtype: 'toolbarmodul',

    requires: [
        'Ext.Toast',
        'Ext.field.Text',
        'Ext.field.Select',
    ],
    scrollable: true,    
    items: [
        {
            docked: 'top',
            xtype: 'toolbar',
            layout: 'vbox',
            items: [
                {
                    xtype: 'searchfield',
                    name: 'search',
                    label: 'Search',
                    //id: 'cari',
                    valueField: 'title',
                    //placeHolder: 'Nama Lengkap',
                    required: true,
                    clearIcon: true,                              
                    
                    listeners: {  
                        change: function(newValue,oldValue) {
                            var buku = Ext.getStore('buku');                         
                            console.log(buku);
                            buku.filter('judul_buku',newValue._value);
                        }
                    }
                }                
            ]
        },
        {
            xtype:'dataviewmodul'
        }
    ]
});