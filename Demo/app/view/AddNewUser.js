Ext.define('Demo.view.AddNewUser', {
    extend: 'Ext.window.Window',
    alias: 'widget.addnewuser',
    title: 'Add new user',
    height: 200,
    width: 400,
    autoShow: true,
	layout :'fit',
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
                xtype: 'combobox',
                name: 'orgId',
				valueField:'id',
				displayField:'name',
                fieldLabel: 'Orgs'
            }
			
			]
        }];

        this.buttons = [{
            text: 'Save',
            action: 'save'
        },
		{
            text: 'Save Edited User',
            action: 'saveEditedUser'
			
        },
		{
            text: 'Cancel',
            scope: this,
            handler: this.close
        }];



        this.callParent(arguments);
    }
});