Ext.define("Demo.view.EmployeeManagement", {
    extend: 'Ext.Container',
    alias: "widget.emanagement",
    html: 'Hello, EmployeeManagement!!' ,
    items : [
        {
            xtype : 'combobox'
			
        }
        ,{
            xtype : 'button',
			text: 'Open Window',
			action : 'openwindow'
        }
    ]
});