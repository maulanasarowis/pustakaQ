Ext.define('digilib.view.main.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    controller :'login',    
    

    bodyPadding: 20,
    width: "100%",
    autoSize: true,

    requires: [
        'digilib.view.main.LoginController',
        'Ext.form.Panel'        
    ],

    items: [{
        html : '<center><div class="css-loader"><img class="photo1" src="resources/logo.png"></div></center>'+
                '<center><br><div class= "tulisan"> PAGE LOGIN</div><br></center>'
    },{
        xtype: 'textfield',
        allowBlank: false,
        required: true,
        label: 'User Id',
        name: 'email',
        placeholder: 'user Id'
    }, {
        xtype: 'passwordfield',
        allowBlank: false,
        required: true,
        label: 'Password',
        name: 'password',
        placeholder: 'password'
    }, /*{
        xtype: 'checkboxfield',
        boxLabel: 'Remember me',
        name: 'remember'
    },*/{
        xtype: 'button',
        ui: 'action',
        text: 'Login',
        handler: 'onLogin'
    }]
});