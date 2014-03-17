Ext.define('WorkShopX.view.view_ListViewBuy',{
    extend:'Ext.Container',
    requires:['Ext.dataview.List'],
    alias:'widget.wg_view_ListViewBuy',
    config:{
        layout:'fit',
        items:[
            {
                xtype:'titlebar',
                title:'รายการทรัพย์สิน',
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        itemId:'btn_ฺBack'
                    }
                ]
            },{
                xtype:'list',
                store:'store_MainApp',
                itemTpl:'{f_name} {f_surname} {f_nickname}',
                onItemDisclosure:true,
                emptyText:'No Data',
                itemId:'list_ShowData'

            }
        ]
    }

});