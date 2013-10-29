Ext.define('Demo.view.AddNewUser', {
    extended: 'ext.window.Window ',
    alias: 'widget.addnewuser',
    title: 'Add new user',
    height: 200,
    width: 400,
    autoShow: true,
    requires: ['Ext.form.Panel'],

    initComponent: function () {
        this.items = [{
            xtype: 'form',
            items: [{
                xtype: 'textfield',
                name: 'name',
                fieldLabel: 'Name'

            }, {
                xtype: 'textfield',
                name: 'birthdate',
                fieldLabel: 'Birth Date'
            }, {
                xtype: 'checkbox',
                name: 'terminated',
                fieldLabel: 'Terminated'
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Phone'
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: 'Phone'
            }]
        }];

        this.buttons = [{
            text: 'Save',
            action: 'save'
        }, {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];



        this.callParent(arguments);
    }
});