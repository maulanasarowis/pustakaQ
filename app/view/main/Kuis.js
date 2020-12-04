/**
 * Demonstrates a tabbed form panel. This uses a tab panel with 3 tabs - Basic, Sliders and Toolbars - each of which is
 * defined below.
 *
 * See this in action at http://dev.sencha.com/deploy/sencha-touch-2-b3/examples/kitchensink/index.html#demo/forms
 */
Ext.define('digilib.view.main.Kuis', {
    extend: 'Ext.form.Panel', 
    xtype:'kuis',
    controller :'kuiscontroller',

    requires: [
        'Ext.Button',
        'Ext.form.FieldSet',
        'Ext.field.Radio'
    ],
    shadow: true,
    scrollable: true,    
    viewModel: {
        stores: {
            kuis: {
                type: 'kuis'
            } 
        }
    },
    iconCls: 'x-fa fa-hourglass-start',
    title: 'Kuis',
    cls: 'demo-solid-background',
    id: 'basicform',
    
    items: [
        {
            html:'Hitung mundur akan dimulai...<br><br>',
            id: 'demo'
        },{
            html:'',
            id: 'soal'
        },{
            html:'<div align="center"><br><br>Maff Anda Sudah Mengkonfirmasi <br><br> Tunggu Waktu Selesai Untuk Melihat Nilai Anda</div>',
            id: 'warning',
            hidden: true
        },{
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em', 
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [

                {
                    xtype: 'button', 
                    ui: 'action',
                    text: 'Kembali',
                    handler: 'kembali',
                    id : 'kembali',
                    hidden : true                   
                },{
                    xtype: 'button', 
                    ui: 'action',
                    text: 'Lanjut',
                    handler: 'next',
                    id : 'next',
                    hidden : false                   
                },{
                    xtype: 'button', 
                    ui: 'action',
                    text: 'Confirmation',
                    handler: 'submit',
                    id : 'submit',
                    hidden : true                   
                }
            ]
        }
    ]
});