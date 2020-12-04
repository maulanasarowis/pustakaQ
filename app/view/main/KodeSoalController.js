    Ext.define('digilib.view.main.KodeSoalController', {  
    extend: 'Ext.app.ViewController',
    alias: 'controller.kodesoal',

    onOk: function(records) {
        var form = this.getView();
        var me = this;
        
        var kode = form.getFields('kodesoal').getValue();
        console.log('kode: ', kode);
        localStorage.setItem('nilai', 0);
        localStorage.setItem('nilai2', -1);

        if(kode>4){
             Ext.Msg.alert('Maaf !!!!', 'Kode Tidak Ada', Ext.emptyFn);
             form.reset();
        }else if (!kode){
            Ext.Msg.alert('Warning !!!!', 'Kode Soal Wajib Disi', Ext.emptyFn);
        }else{
            //var store = Ext.getStore('kuis');
            localStorage.setItem('kode_soal', kode);
            Ext.getStore('kuis').load(function(records, operation, success) { 
                var kode_id =records[0].data.data[0].id_kuis_master;
                var id_kuis_master = localStorage.setItem('id_kuis_master',kode_id);

                var waktu_kuis = records[0].data.data[0].waktu_kuis;
                var set_waktu = localStorage.setItem('set_waktu',waktu_kuis);

                var token = records[0].data.data[0].kode_kuis;
                console.log(token);
            });  
            Ext.getCmp('kuispanel').setActiveItem(0);


            var set_waktu_bru = localStorage.getItem('set_waktu');
            var timeleft = set_waktu_bru * 60 ;
            console.log(timeleft);
            var downloadTimer = setInterval(function(){
            document.getElementById("demo").innerHTML = timeleft + " detik waktu tersisa<br><br>";
            timeleft -= 1;
              if(timeleft <= 0 || localStorage.getItem('nilai24') == 0){
                clearInterval(downloadTimer);
                document.getElementById("demo").innerHTML = "Finished"
                Ext.getCmp('kuispanel').setActiveItem(1);
                
                var store = Ext.getStore('kuis').data.items[0].data.jumlah;
                console.log(store);
                console.log('store',store);
               var nilai2 = localStorage.getItem('nilai');
               // console.log(nilai2);

                for (i=0; i<store; i++){
                    if (localStorage.getItem('jawaban'+i) == localStorage.getItem('knc_jawaban'+i)){
                         var nilai2 = parseInt(localStorage.getItem('nilai'))+1;
                         localStorage.setItem('nilai',nilai2);

                    }
                    
                }
               

                var scoreNilai = parseInt(localStorage.getItem('nilai'));
                scoreNilai = 100/store*parseInt(localStorage.getItem('nilai'));
                localStorage.setItem('score_nilai_akhir',scoreNilai);
                console.log('nilai dirim ke database',scoreNilai);
                Ext.Msg.alert('Selesai', ' Terima Kasih Nilai Anda adalah  '+scoreNilai);//+ scoreNilai);
                form.reset();
               
                var member1 = localStorage.getItem('member_id');
                var kode_baru = localStorage.getItem('kode_soal');
                var kode_kuis_baru = localStorage.getItem('id_kuis_master');
                
                            // input data ke nilai
                var store = Ext.getStore('nilai');
                store.insert(0,{id_siswa : member1, id_kuis : kode_kuis_baru, score : scoreNilai});
                store.sync();
                console.log('id_siswa',member1);
                console.log('id_kuis',kode_baru);
                console.log('id_kuis_master',kode_kuis_baru);
                console.log('score',scoreNilai);

                localStorage.setItem('nilai24',1);
                Ext.getCmp('basicform').reset();


                // input data ke jawaban
                // var storeee = Ext.getStore('kuis').data.items[0].data.jumlah;
                // console.log('panjang',storeee);
                // for (i=0; i<storeee; i++){
                //     var jawaban = localStorage.getItem('jawaban'+i);
                //     var knc_jawaban = localStorage.getItem('knc_jawaban'+i)
                //     var store12 = Ext.getStore('jawaban');
                //     console.log(store12);
                //     store12.insert(0,{id_siswa : member1[i], id_kuis : kode_baru[i], id_soal : i[i], knc_jawaban: knc_jawaban[i], jawaban: jawaban[i] });
                    
                // }
               
                // var store12 = Ext.getStore('jawaban');
                // console.log(store12);


                // localStorage.setItem('score akhir', 0);
                // localStorage.setItem('soal1', 0);
                // localStorage.setItem('No', 1);
            }
        }, 1000); 
        }
    }
});