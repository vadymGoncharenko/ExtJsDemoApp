Ext.define("Demo.view.Employees", {
    extend: "Ext.Container",
    alias: "widget.employees",
    items: [
        {
            xtype: "grid",
            title: "Employees",
            store: "Employees",
            columns: [
                {
                    text: "Name",
                    dataIndex: "name"
                },                
                {text: "Phone",
                    dataIndex: "phone"
                }
            ],
            height: 200,
            width: 400

        }
    ]
});