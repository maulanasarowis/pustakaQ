Ext.define('digilib.view.datahistory.RiwayatBoking', {
    extend: 'Ext.Container',
    xtype : 'listRiwayat',
    requires: [
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive',
        'digilib.store.HistoryBookmark'
    ],

    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    autoLoad: true,
    autoSync: true,
    //padding: 20,
    scrollable:true,
    viewModel: {
        stores: {
            riwayat: {
                type: 'riwayat'
            }
        }
    },
    items: [{
        title:'Riwayat',
        xtype: 'dataview',
        scrollable:true,
        cls: 'dataview-basic',
        itemTpl: '<table width="100%" style="text-align:left;letter-spacing: 1px; text-indent: 30px;"><tr><td style="padding: 5px 20px 5px 15px;"><font size="2"><br><i style="font-weight: bold;">Judul Buku</i>: {title}</br>'+
                '<i style="font-weight: bold;">Keterangan</i>: {keterangan}</br>'+
                 '<i style="font-weight: bold;">Tanggal / Waktu </i>:{reserve_date}<br><br></td></tr></table>',
        //itemTpl: '<font size=3 color="blue"><i>{room}</i></font><br><font size=4>{date}</font><img src="'+Kamus.util.Globals.getPhppath()+'/images/{lafal_status}.png" width="20" align="right"><img src="'+Kamus.util.Globals.getPhppath()+'/images/{status}.png" width="20" align="right"><hr>',
        
        bind: '{riwayat}',
    }]
});