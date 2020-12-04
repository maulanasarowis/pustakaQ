Ext.define('digilib.view.main.ToolbarBookmark', {
    extend: 'Ext.Panel',
    xtype: 'toolbarbookmark',

    requires: [
        'Ext.Toast',
        'Ext.field.Text',
        'Ext.field.Select'
    ],
    scrollable: true,    
    viewModel: {
        stores: {
            ipa1: {
                type: 'ipa1'
            }
        }
    },
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
                    id: 'cari',
                    valueField: 'title',
                    required: true,
                    clearIcon: true,                              
                    
                    listeners: {  
                        change: function(newValue,oldValue) {
                            var buku = Ext.getStore('ipa1');                         
                            console.log(buku);
                            buku.filter('judul',newValue._value);
                        }
                    }
                }                
            ]
        },
        {
            xtype:'dataviewbookmark'
        }
    ]
});