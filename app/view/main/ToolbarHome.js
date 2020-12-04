Ext.define('digilib.view.main.ToolbarHome', {
    extend: 'Ext.Panel',
    xtype: 'toolbarhome',

    requires: [
        'Ext.Toast',
        'Ext.field.Text',
        'Ext.field.Select',
        'digilib.view.dataview.BasicDataView',
    ],
    scrollable: true,    
    iconCls: 'x-fa fa-book',
    title: 'Digital Library',
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
                    id: 'search',
                    valueField: 'title',
                    //placeHolder: 'Nama Lengkap',
                    required: true,
                    clearIcon: true,                              
                    
                    listeners: {  
                        change: function(newValue,oldValue) {
                            var buku = Ext.getStore('semua_buku');                         
                            console.log(buku);
                            buku.filter('title',newValue._value);
                        }
                    }
                }                
            ]
        },
        {
            xtype: 'viewbasic' 
        }
    ]
});