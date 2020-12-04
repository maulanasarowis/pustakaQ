Ext.define('digilib.store.Kuis', { 
    extend: 'Ext.data.Store',

    alias: 'store.kuis',

//tambahan
    storeId:'kuis', 
     //autoLoad: true,
    // autoSync: true,
//
    fields: [
        'id_soal', 'kode_soal', 'soal', 'a', 'b', 'c', 'd', 'knc_jawaban', 'gambar', 'id_kuis_master'
        //'id_kuis', 'id_kuis_master', 'soal', 'a', 'b', 'c', 'd', 'jawaban', 'gambar', 'date', 'time'
    ],

//tambahan
     proxy: {
        type: 'jsonp', 
        api: {

        read: digilib.util.Global.getPhppath()+'kuis.php'
        //read: digilib.util.Global.getPhppath()+'kuis'
        
    },
//    
//
    reader: { 
            type: 'json',
            rootProperty: 'items', 
            messageProperty: 'error'
        }
    },
    
    listeners:{
        beforeload: function(store, operation, eOpts){
            this.getProxy().setExtraParams({
                kode_soal: localStorage.getItem('kode_soal')
                //id_kuis: localStorage.getItem('id_kuis'); //tambahan malam ini
                //role: localStorage.getItem('role')               
            });
        },
        load: function(records, successful, operation){

            var waktu_kuis = records.getAt(0).data.data[0].waktu_kuis;
            localStorage.setItem('set_waktu',waktu_kuis);
            

            var jumlah_soal =   records.getAt(0).data.jumlah;   
            console.log('ibu',jumlah_soal);
            var ibu = localStorage.setItem('jum',jumlah_soal);
            for (i=0; i<jumlah_soal; i++){
                localStorage.setItem('jawaban'+i,'');

            }

            for(i=0; i<jumlah_soal; i++){
                var knc_jawaban = records.getAt(0).data.data[i].knc_jawaban;
                localStorage.setItem('knc_jawaban'+i, knc_jawaban);
            }
            if(jumlah_soal == 1){
                Ext.getCmp('submit').show();
                Ext.getCmp('next').hide();
                var soal = records.getAt(0).data.data[0].soal;
                var gambar = records.getAt(0).data.data[0].gambar;
                var a = records.getAt(0).data.data[0].a;
                var b = records.getAt(0).data.data[0].b;
                var c = records.getAt(0).data.data[0].c;
                var d = records.getAt(0).data.data[0].d;
                if (gambar == ""){
                Ext.getCmp('soal').setHtml('1. '+soal+//'<center><img src="resources/foto/'+gambar+'"></center>'+
                                    '<br>A. <input type="radio" id="pil_a" name="pil" value="a" onclick="pilihan()"> '+a+'</input><br>'+
                                    'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()"> '+b+'</input><br>'+
                                    'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()"> '+c+'</input><br>'+
                                    'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()"> '+d+'</input><br>');
                }else{
                Ext.getCmp('soal').setHtml('1. '+soal+'<center><img src="'+digilib.util.Global.getPhppath()+'/foto/{gambar}" width="300px" hight="400px"></center>'+
                                        '<br>A. <input type="radio" name="pil" id="pil_a" value="a" onclick="pilihan()"> '+a+'</input><br>'+
                                        'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()"> '+b+'</input><br>'+
                                        'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()"> '+c+'</input><br>'+
                                        'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()"> '+d+'</input><br>');
                }
            
            }else{
                Ext.getCmp('submit').hide();
                 var soal = records.getAt(0).data.data[0].soal;
                var gambar = records.getAt(0).data.data[0].gambar;
                var a = records.getAt(0).data.data[0].a;
                var b = records.getAt(0).data.data[0].b;
                var c = records.getAt(0).data.data[0].c;
                var d = records.getAt(0).data.data[0].d;
                console.log(soal); 
               
                if (gambar == ""){
                Ext.getCmp('soal').setHtml('1. '+soal+//'<center><img src="resources/foto/'+gambar+'"></center>'+
                                        '<br>A. <input type="radio" id="pil_a" name="pil" value="a" onclick="pilihan()"> '+a+'</input><br>'+
                                        'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()"> '+b+'</input><br>'+
                                        'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()"> '+c+'</input><br>'+
                                        'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()"> '+d+'</input><br>');
                }else{
                Ext.getCmp('soal').setHtml('1. '+soal+'<center><img src="'+digilib.util.Global.getPhppath()+'/foto/{gambar}" width="300px" hight="400px"></center>'+
                                        '<br>A. <input type="radio" name="pil" id="pil_a" value="a" onclick="pilihan()"> '+a+'</input><br>'+
                                        'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()"> '+b+'</input><br>'+
                                        'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()"> '+c+'</input><br>'+
                                        'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()"> '+d+'</input><br>');
                }
            }
           
        }        
    } 
//    
});