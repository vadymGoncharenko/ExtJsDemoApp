Ext.define('Demo.controller.EmpController', {
    extend: 'Ext.app.Controller',
	
	 refs: [{
     ref: 'empGrid',
     selector: 'employeesview grid'
     }],
	 
	init: function(){
	this.control({
	'orgsview -> 'organizations treepanel'' :{
	selectionchange: this.onTreeSelectionChange
	}
	});
	this.callParent();
	},
	
	 onTreeSelectionChange: function(tree, selected) {
     console.log('selectionchange ' + selected[0].get('text'));
	 
		this.getEmpGrid().store.clearFilter();
		this.getEmpGrid().store.filter([{
		property: 'orgId',
		value: selected[0].getId()
		}]);
     }
});
