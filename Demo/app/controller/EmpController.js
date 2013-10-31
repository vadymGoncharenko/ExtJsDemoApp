Ext.define('Demo.controller.EmpController', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'empGrid',
        selector: 'employees grid'
    }],
	views: [
        'AddNewUser', 'EmployeeManagement', 'Employees',
        
    ],

    init: function () {
        this.control({
            'organizations > treepanel': {
                selectionchange: this.onTreeSelectionChange
            },
                'emanagement button[action=openwindow]': {
                click: this.openWindow
            },
                'addnewuser button[action=save]': {
                click: this.saveNewUser
            },			
			'employees grid': {
                itemclick: this.editUser
            },
            'addnewuser button[action=saveEditedUser]': {
                click: this.saveEditedUser
            }
        });
        this.callParent();
    },

    onTreeSelectionChange: function (tree, selected) {
        console.log('selectionchange ' + selected[0].get('text'));

        this.getEmpGrid().store.clearFilter();
        this.getEmpGrid().store.filter([{
            property: 'orgId',
            value: selected[0].getId()
        }]);
    },
    openWindow: function (button) {
        console.log('button click open window');
		//var view = Ext.widget('addnewuser');
		//	form = view.down('form'),
		Ext.create('Demo.view.AddNewUser');
		console.log('End of  click open window');
    }
	,
    saveNewUser: function (button) {
        console.log('button click save New User');
		var win = button.up('addnewuser');
		form = win.down('form');
		
		this.getEmpGrid().store.add({
			'name': form.getForm().findField('name').getValue(),
			'birthdate': form.getForm().findField('birthdate').getValue(),
			'phone': form.getForm().findField('phone').getValue(),
			'orgId': 'rnd-001'
		});
		
		//record = form.getRecord(),
        //    values = form.getValues();
        //record.set(values);
        win.close();
		console.log('End of  click save New User');
    },
	editUser: function (grid,record) {
        console.log('Start edit User');
		var view = Ext.widget('addnewuser');
		view.down('form').loadRecord(record);
		
		//Ext.create('Demo.view.AddNewUser');				       
		console.log('End   edit User');
    }
	,
    saveEditedUser: function (button) {
        console.log('button click save Edit User');
		var win = button.up('addnewuser');
		form = win.down('form');
		
		this.getEmpGrid().store.add({
			'name': form.getForm().findField('name').getValue(),
			'birthdate': form.getForm().findField('birthdate').getValue(),
			'phone': form.getForm().findField('phone').getValue(),
			'orgId': 'rnd-001'
		});
		
		//record = form.getRecord(),
        //    values = form.getValues();
        //record.set(values);
        win.close();
		console.log('End of  click save Edit User');
    }
});