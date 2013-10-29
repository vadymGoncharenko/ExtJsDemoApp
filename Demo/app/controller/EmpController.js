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
});