Ext.define('Demo.Application', {
    name: 'Demo',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'EmpController', 'OrgController'
    ],

    stores: [
        'OrgUnits', 'Employees','Tree'
    ],


    init: function(app) {
        console.log('app init');
    }
});
