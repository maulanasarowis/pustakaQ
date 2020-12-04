Ext.define('digilib.view.main.KuisController', {  
    extend: 'Ext.app.ViewController', 
    alias: 'controller.kuiscontroller',

    next: function(){
        //alert("NEXT CLICKED");
        // Cek jawaban
        Ext.getCmp('kembali').show(); 

        var kode_soal = parseInt(localStorage.getItem('kode_soal'));
        
        var nomor = parseInt(localStorage.getItem('No'))+1;
        localStorage.setItem('No',nomor);
        console.log('nomor soal',nomor);
        var soalskrg = parseInt(localStorage.getItem('soal1'))+1;
        localStorage.setItem('soal1',soalskrg);
        console.log('soal1',soalskrg); 
        var store4 = Ext.getStore('kuis');
        var jumlah = store4.getAt(0).data.data.length;
        console.log('jumlah',jumlah);
        var nilai3 = parseInt(localStorage.getItem('nilai2'))+1;
        localStorage.setItem('nilai2',nilai3);
        if(localStorage.getItem('knc_jawaban'+nilai3)==localStorage.getItem('jawaban'+nilai3)){
            console.log("jawaban: ", localStorage.getItem('jawaban'));
            localStorage.setItem('jawaban'+nilai3,localStorage.getItem('jawaban'));
            localStorage.setItem('jawaban','');  
        }
        else{
            localStorage.setItem('jawaban'+nilai3,localStorage.getItem('jawaban'));
            localStorage.setItem('jawaban','');  
        }   

        //console.log(jumlah);
        var  ibu = parseInt(localStorage.getItem('jum')) - 1;
        console.log(ibu);
        if (soalskrg<ibu ){
 
            var soal = Ext.getStore('kuis').getAt(0).data.data[soalskrg].soal;
            var gambar = Ext.getStore('kuis').getAt(0).data.data[soalskrg].gambar;
            var a = Ext.getStore('kuis').getAt(0).data.data[soalskrg].a;
            var b = Ext.getStore('kuis').getAt(0).data.data[soalskrg].b;
            var c = Ext.getStore('kuis').getAt(0).data.data[soalskrg].c;
            var d = Ext.getStore('kuis').getAt(0).data.data[soalskrg].d;
            var jawaban_a = '';
            var jawaban_b = '';
            var jawaban_c = '';
            var jawaban_d = '';
            console.log("JAWABAN IBU A: ",jawaban_a);
            console.log("JAWABAN IBU NILAI3: ",localStorage.getItem('jawaban'+nilai3));
            
            if(localStorage.getItem('jawaban'+nilai3) == 'a'){
                jawaban_a = 'checked';
                console.log(jawaban_a);
            }
            else if(localStorage.getItem('jawaban'+nilai3) == 'b')
                jawaban_b = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'c')
                jawaban_c = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'd')
                jawaban_d = 'checked';
          
            console.log(soal);

               
            if (gambar == ""){
                Ext.getCmp('soal').setHtml(nomor+'. '+soal+//'<center><img src="resources/foto/'+gambar+'"></center>'+
                                        '<br>A. <input type="radio" id="pil_a" name="pil" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                        'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                        'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                        'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
                }else{
                Ext.getCmp('soal').setHtml(nomor+'. '+soal+'<center><img src="'+digilib.util.Global.getPhppath()+'/foto/{gambar}" width="300px" hight="400px"></center>'+
                                        '<br>A. <input type="radio" name="pil" id="pil_a" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                        'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                        'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                        'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
                }


        }else{
            var soal = Ext.getStore('kuis').getAt(0).data.data[soalskrg].soal;
            var gambar = Ext.getStore('kuis').getAt(0).data.data[soalskrg].gambar;
            var a = Ext.getStore('kuis').getAt(0).data.data[soalskrg].a;
            var b = Ext.getStore('kuis').getAt(0).data.data[soalskrg].b;
            var c = Ext.getStore('kuis').getAt(0).data.data[soalskrg].c;
            var d = Ext.getStore('kuis').getAt(0).data.data[soalskrg].d;
      
            console.log("JAWABAN BAPAK NILAI3: ",localStorage.getItem('jawaban'+ibu));
            if(localStorage.getItem('jawaban'+nilai3) == 'a'){
                jawaban_a = 'checked';
                console.log(jawaban_a);
            }
            else if(localStorage.getItem('jawaban'+nilai3) == 'b')
                jawaban_b = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'c')
                jawaban_c = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'd')
                jawaban_d = 'checked';
            console.log(soal);

           
            if (gambar == ""){
                Ext.getCmp('soal').setHtml(nomor+'. '+soal+//'<center><img src="resources/foto/'+gambar+'"></center>'+
                                    '<br>A. <input type="radio" id="pil_a" name="pil" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                    'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                    'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                    'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
            }else{
                Ext.getCmp('soal').setHtml(nomor+'. '+soal+'<center><img src="'+digilib.util.Global.getPhppath()+'/foto/{gambar}" width="300px" hight="400px"></center>'+
                                    '<br>A. <input type="radio" name="pil" id="pil_a" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                    'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                    'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                    'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
            }

            Ext.getCmp('next').hide();
            Ext.getCmp('submit').show();
            Ext.getCmp('kembali').show();

            

        }

    },
    kembali: function(){
       
        var kode_soal = parseInt(localStorage.getItem('kode_soal'));
        var nomor = parseInt(localStorage.getItem('No'))-1;
        localStorage.setItem('No',nomor);
        var nilai3 = parseInt(localStorage.getItem('nilai2'))-1;
        localStorage.setItem('nilai2',nilai3);
        console.log('nomor soal',nomor);
        var soalskrg = parseInt(localStorage.getItem('soal1'))-1;
        localStorage.setItem('soal1',soalskrg);
        if (soalskrg < 1){   
            Ext.getCmp('submit').hide();
            Ext.getCmp('next').show();
            Ext.getCmp('kembali').hide();

        }else{
            Ext.getCmp('submit').hide();
            Ext.getCmp('next').show();
            Ext.getCmp('kembali').show();            
        }
        console.log('soal1',soalskrg); 
        var store4 = Ext.getStore('kuis');
        var jumlah = store4.getAt(0).data.data.length;
        if (soalskrg<jumlah){
            //console.log(Ext.getStore('kuis').getAt(soalskrg))   
            var soal = Ext.getStore('kuis').getAt(0).data.data[soalskrg].soal;
            var gambar = Ext.getStore('kuis').getAt(0).data.data[soalskrg].gambar;
            var a = Ext.getStore('kuis').getAt(0).data.data[soalskrg].a;
            var b = Ext.getStore('kuis').getAt(0).data.data[soalskrg].b;
            var c = Ext.getStore('kuis').getAt(0).data.data[soalskrg].c;
            var d = Ext.getStore('kuis').getAt(0).data.data[soalskrg].d;
            var jawaban_a = '';
            var jawaban_b = '';
            var jawaban_c = '';
            var jawaban_d = '';
            console.log("JAWABAN A: ",jawaban_a);
            console.log("JAWABAN NILAI3: ",localStorage.getItem('jawaban'+nilai3));
            if(localStorage.getItem('jawaban'+nilai3) == 'a'){
                jawaban_a = 'checked';
                console.log(jawaban_a);
            }
            else if(localStorage.getItem('jawaban'+nilai3) == 'b')
                jawaban_b = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'c')
                jawaban_c = 'checked';
            else if(localStorage.getItem('jawaban'+nilai3) == 'd')
                jawaban_d = 'checked';

            var knc_jawaban = Ext.getStore('kuis').getAt(0).data.data[soalskrg].knc_jawaban;
            localStorage.setItem('knc_jawaban', knc_jawaban); 
          
            console.log(soal);

           
            if (gambar == ""){
            Ext.getCmp('soal').setHtml(nomor+'. '+soal+//'<center><img src="resources/foto/'+gambar+'"></center>'+
                                    '<br>A. <input type="radio" id="pil_a" name="pil" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                    'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                    'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                    'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
            }else{
            Ext.getCmp('soal').setHtml(nomor+'. '+soal+'<center><img src="http://localhost/slim/foto/'+gambar+'" width="300px" hight="400px"></center>'+
                                    '<br>A. <input type="radio" name="pil" id="pil_a" value="a" onclick="pilihan()" '+jawaban_a+'> '+a+'</input><br>'+
                                    'B. <input type="radio" name="pil" id="pil_b" value="b" onclick="pilihan()" '+jawaban_b+'> '+b+'</input><br>'+
                                    'C. <input type="radio" name="pil" id="pil_c" value="c" onclick="pilihan()" '+jawaban_c+'> '+c+'</input><br>'+
                                    'D. <input type="radio" name="pil" id="pil_d" value="d" onclick="pilihan()" '+jawaban_d+'> '+d+'</input><br>');
            }


        }else{
            Ext.getCmp('kembali').hide();

        }

    },
    submit: function(){
        var nilai3 = parseInt(localStorage.getItem('nilai2'))+1;
        localStorage.setItem('nilai2',nilai3);
        localStorage.setItem('jawaban'+nilai3,localStorage.getItem('jawaban'));
        localStorage.setItem('jawaban','none'); 
        Ext.getCmp('kembali').hide();
        Ext.getCmp('soal').hide();
        Ext.getCmp('submit').hide();
        Ext.getCmp('warning').show();  
        localStorage.setItem('nilai24', 0); 

    }
});