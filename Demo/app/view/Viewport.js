Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        // 'Demo.view.Main'
        'Demo.view.Employees',
        'Demo.view.Organizations',
        'Demo.view.EmployeeManagement'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        // xtype: 'app-main'
        xtype :'container',
        layout: 'border',
        items: [
            {xtype : 'emanagement',
             region : 'north'
            },
            {xtype : 'organizations',
             region : 'west'
            },
            {xtype : 'employees',
             region : 'center'
            }
        ]
    }]
});