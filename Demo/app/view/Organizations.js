Ext.define("Demo.view.Organizations", {
    extend: 'Ext.Container',
    alias: "widget.organizations",
    html: 'Hello, Organizations!!',
    items: [
        {
            xtype: "treepanel",
            width: 300,
            region: "center",
            title: "Company",
            store: "Tree"
        }
    ]
});