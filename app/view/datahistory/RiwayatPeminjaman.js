Ext.define('digilib.view.datahistory.RiwayatPeminjaman', {
    extend: 'Ext.Container',
    xtype : 'listRiwayatBookmark',
    requires: [
        'Ext.dataview.plugin.ItemTip',
        'Ext.plugin.Responsive',
        'digilib.store.HistoryPeminjaman'
    ],

    layout: 'fit',
    cls: 'ks-basic demo-solid-background',
    shadow: true,
    autoLoad: true,
    autoSync: true,
    //padding: 20,
    title: 'History',
    viewModel: {
        stores: {
            listBookmark: {
                type: 'listBookmark'
            }
        }
    },
    items: [{
        xtype: 'dataview',
        scrollable: 'y',
        cls: 'dataview-basic',
        itemTpl: '<table width="100%" style="text-align:left;letter-spacing: 1px; text-indent: 30px;"><tr><td style="padding: 5px 20px 5px 15px;"><font size="2"><br><i style="font-weight: bold;">Judul Buku</i>: {title}</br>'+
                  '<i style="font-weight: bold;">Tanggal Peminjaman</i>: {loan_date}</br>'+
                  '<i style="font-weight: bold;">Tanggal Pengembalian </i>:{due_date}<br>'+
                  '<i style="font-weight: bold;">Tanggal Kembalian </i>:{return_date}<br><br></td></tr></table>',
        //itemTpl: '<font size=3 color="blue"><i>{room}</i></font><br><font size=4>{date}</font><img src="'+Kamus.util.Globals.getPhppath()+'/images/{lafal_status}.png" width="20" align="right"><img src="'+Kamus.util.Globals.getPhppath()+'/images/{status}.png" width="20" align="right"><hr>',
        
        bind: '{listBookmark}',
    }]
});