Ext.define('digilib.view.main.KodeSoal', {
    extend: 'Ext.form.Panel',
    xtype: 'kodesoal', 
    controller :'kodesoal', 
    //id :'kode',    
    

    bodyPadding: 20,
    width: "100%",
    autoSize: true,

    requires: [
        'digilib.view.main.KodeSoalController',
        'Ext.form.Panel'        
    ],

    items: [
    {
         html : '<br><br><br><br><br><br><br><br><br>'
    },
    {
         html : '<center>Silahkan Masukkan Kode Soal</center><br>'
    },{
    
        xtype: 'textfield',
        //id: 'kode',
        name : 'kodesoal',
        label: 'Kode Soal',
        placeHolder: 'Kode Soal',
        required: true,
        clearIcon: true
    },{
        xtype: 'button',
        ui: 'action',
        text: 'Ok',
        formBind: true,
        handler: 'onOk'
    }]
}); 