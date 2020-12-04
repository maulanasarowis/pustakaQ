Ext.define('digilib.view.dataview.BasicDataView', {
    extend: 'Ext.Container',
    xtype : 'viewbasic',
    id: 'viewbasic',
    requires: [
        
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive'
    ],
    viewModel:{
        stores:{
            semua_buku:{
                type:'semua_buku'
            }
        }
    },
    
    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    items: [{
        xtype: 'dataview',
        id: 'mydataview',
        scrollable: 'y',
        cls: 'dataview-basic',
        itemTpl: '<div class= "background1"><tr><td><center><img class="photo" src="'+digilib.util.IMAGE.getPhppath()+'{image}"></center></td><td>'+
        '<center><div id = "coba" class = "keteragan">"{title}"<br>{call_number}<br>{publisher_name}</div></center></td></tr>'+
                '<center><tr><td><button class="button" onclick="bookmarkclicked()"><span>Simpan</span></button></td><td><button class="button1" id="btn2" ><span>Tersedia</span></button></td></tr></center><hr></div>',
        bind:{
            store:'{semua_buku}',
        },
        plugins: {
            type: 'dataviewtip',
            align: 'l-r?',
            // plugins: 'responsive',
            
            // On small form factor, display below.
            responsiveConfig: {
                "width < 600": {
                    align: 'tl-bl?'
                }
            },
            width: 330,
            minWidth: 300,
            delegate: '.button1',
            allowOver: true,
            anchor: true,
            bind: '{semua_buku}',
            tpl: ' <center><img class="photo" src="'+digilib.util.IMAGE.getPhppath()+'{image}"></center><center>'+
                 '<tr><td> </td><td>{notes}</td></tr>'+
                 '<br><tr>{publish_year}</tr>'+
                 '</table><center><button class="button" onclick="reservationclicked()"><span>Reservasi</span></button></center></div>'

        }
    }]
});