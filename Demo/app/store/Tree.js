Ext.define('Demo.store.Tree', {
    extend: 'Ext.data.TreeStore',
    root: {
        text: 'Company',
        children: [{
            text: 'R&D',
            id: 'rnd',
            children: [{
                text: 'Web interface for trade automation',
                leaf: true,
                id: 'rnd-001'
            }]
        }, {
            text: 'Inner clients',
            id: 'inner',
            children: [{
                text: 'Health monitoring badge',
                leaf: true,
                id: 'inner-001'
            }]
        }, {
            text: 'VIP clients',
            id: 'vip',
            children: [{
                text: 'Building a helicopter',
                leaf: true,
                id: 'vip-002'
            }, {
                text: 'Sharks shooting lasers',
                leaf: true,
                id: 'vip-003'
            }]
        }, {
            text: 'Flying saucers development',
            id: 'z51',
            children: [{
                text: 'Teddy bears stuffing',
                leaf: true,
                id: 'z51-001'
            }, {
                text: 'Teddy bears sewing',
                leaf: true,
                id: 'z51-002'
            }, {
                text: 'Teddy bears homing system',
                leaf: true,
                id: 'z51-003'
            }]
        }]
    },
    height : 400,
    width: 400
});