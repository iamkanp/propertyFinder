Ext.define('WorkShopX.view.view_Main',{
    extend:'Ext.Container',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text'],
    alias:'widget.wg_view_Main',
    config:{
        items:[
            {
                xtype:'titlebar',
                title:'ซื้อขายอสังหาริมทรัพย์',
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'เกี่ยวกับเรา',
                        itemId:'btn_AboutUs',
                        align:'right'
                    }
                ]
            },{
                xtype:'fieldset',
                layout: 'hbox',
                margin: '10 10 10 10',
                items:[
                    {
                        xtype:'button',
                        margin: '10 10 10 10',
                        text:'ต้องการซื้อ',
                        itemId:'btn_Buy',
                        flex:1
                    },{
                        xtype:'button',
                        margin: '10 10 10 10',
                        text:'ต้องการขาย',
                        itemId:'btn_Sell',
                        flex:1
                    }
                ]
            },{
                xtype:'fieldset',
                layout: 'vbox',
                items:[
                    {
                        xtype:'button',
                        margin: '10 10 10 10',
                        text:'Hot Location!',
                        itemId:'btn_HotLocation'
                    },{
                        xtype:'button',
                        margin: '10 10 10 10',
                        text:'Apply for news',
                        itemId:'btn_ApplyForNews'
                    }
                ]
            }

        ]
    }

});
