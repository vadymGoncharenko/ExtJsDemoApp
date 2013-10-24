Ext.define('Demo.store.Employees', {
 extend: 'Ext.data.Store',
 model: 'Demo.model.Employee',
	data: {
	'items':[
                    {
                        "name": "Lisa",
                        
                        "phone": "555-111-1224",
						'orgId': 'rnd-001'
                    },
                    {
                        "name": "Bart",
                        
                        "phone": "555-222-1234",
						'orgId': 'rnd-001'
                    },
                    {
                        "name": "Homer",
                        
                        "phone": "555-222-1244",
						'orgId': 'rnd-001'
                    },
                    {
                        "name": "Marge",
                        
                        "phone": "555-222-1254",
						'orgId': 'rnd-001'
                    }
                ]
	},
	proxy:{
		type:'memory',
		reader:{
			type:'json',
			root:'items'
		}
	}

});