Ext.define('WorkShopX.view.view_MainSell',{
    extend:'Ext.form.Panel',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text'],
    alias:'widget.wg_view_MainSell',
    config:{
        items:[
            {
                xtype:'titlebar',
                title:'ข้อมูลทรัพย์สินที่ต้องการขาย',
                docked:'top',
                items:[
                    {
                        xtype:'button',
                        text:'Back',
                        itemId:'btn_Back',
                        align:'left'
                    }
                ]
            },{
                xtype:'fieldset',
                layout: 'vbox',
                items:[
                    {
                        xtype:'textfield',
                        name:'txt_name',
                        label:'ชื่อ',
                        placeHolder:'กรุณากรอกชื่อ'

                    },{
                        xtype:'textfield',
                        name:'txt_phone',
                        label:'เบอร์โทรศัพท์',
                        placeHolder:'กรุณากรอกเบอร์โทรศัพท์'

                    },{
                        xtype:'textfield',
                        name:'txt_detail',
                        label:'รายละเอียดทรัพย์สินเบื้องต้น',
                        placeHolder:'กรุณากรอกรายละเอียดทรัพย์สิน'

                    },{
                        xtype:'textfield',
                        name:'txt_photo',
                        label:'รูปถ่ายทรัพย์สิน'

                    },{
                        xtype:'button',
                        text:'Save',
                        itemId:'btn_Save'

                    }
                ]
            }

        ]
    }

});
