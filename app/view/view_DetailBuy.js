Ext.define('WorkShopX.view.view_DetailBuy',{
    extend:'Ext.form.Panel',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text'],
    alias:'widget.wg_view_DetailBuy',
    config:{
        items:[
            {
                xtype:'titlebar',
                title:'รายละเอียดทรัพย์สิน',
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'back',
                        itemId:'btn_Back',
                        align:'left'
                    },{
                        xtype:'button',
                        text:'remove',
                        itemId:'btn_Remove',
                        align:'right'
                    }
                ]
            },{
                xtype:'fieldset',
                title:'title',
                instructions:'instructions',
                items:[
                    {
                        xtype:'textfield',
                        name:'txt_name',
                        label:'Name',
                        placeHolder:'your name'

                    },{
                        xtype:'textfield',
                        name:'txt_surname',
                        label:'Surname',
                        placeHolder:'your surname'

                    },{
                        xtype:'textfield',
                        name:'txt_nickname',
                        label:'Nickname',
                        placeHolder:'your nickname'

                    },{
                        xtype:'button',
                        text:'Update',
                        itemId:'btn_Update'

                    }
                ]
            }
        ]
    }

});