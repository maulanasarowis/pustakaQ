Ext.define('digilib.view.dataview.Dataviewmodul', {
    extend: 'Ext.Container',
    xtype : 'dataviewmodul',
     requires: [
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive'
    ],
    autoLoad: true,
    autoSync: true,
    viewModel:{
        stores:{
            buku:{
                type:'buku'
            }
        }
    },
    
    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    items: [{
        xtype: 'dataview',
        scrollable: 'y',
        cls: 'dataview-basic',
        // itemTpl: '<div class= "background1"><tr><td><center><img class="photo" src="'+digilib.util.IMAGE.getPhppath()+'{gambar}"></center></td><td>'+
        // '<center><div id = "coba" class = "keteragan">"{title}"<br>{call_number}<br>{publisher_name}</div></center></td></tr>'+
        //         '<center><tr><td><button class="button" onclick="bookmarkclicked()"><span>Bookmark</span></button></td><td><button class="button1" id="btn2" ><span>Avaible</span></button></td></tr></center><hr></div>',
        itemTpl:'<center><img class="photo" src="'+digilib.util.IMAGE.getPhppath()+'{gambar}"></center><center><div id = "coba" class = "keteragan">{judul_buku}<br></div>'+
                '</center><center><button class="button"><span><a href="'+digilib.util.PDF.getPhppath()+'?file=jakfar.pdf#zoom=40" style="width: 100%; height:2000px; "">View</a></span></button>'+
                '</center><hr></div>',

        bind:{
            store:'{buku}',
        }
    }]
});