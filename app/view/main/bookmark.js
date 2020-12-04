Ext.define('digilib.view.main.bookmark', {
    extend: 'Ext.Container',
    xtype :'bookmark',

    requires: [
        'Ext.carousel.Carousel',
     
    ],
    autoLoad: true,
    cls: 'cards',
    shadow: true,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    defaults: {
        cls: 'demo-solid-background',
        flex: 1
    },
    items: [{
        xtype: 'carousel',
        items: [{
                xtype: 'panel',
                //title: 'Buku Bookmark',
                scrollable: 'y', 
                id: 'denah',

                
        },
        {
                xtype: 'panel',
                title: 'Buku Wajib',
                scrollable: 'y', 
                id: 'buku_wajib'
                
        }]
    }]
});