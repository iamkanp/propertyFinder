Ext.define('WorkShopX.view.view_MainBuy',{
    extend:'Ext.form.Panel',
    requires:['Ext.TitleBar','Ext.form.FieldSet','Ext.field.Text','Ext.field.Checkbox','Ext.field.Slider','Ext.field.Radio','Ext.field.Select'],
    alias:'widget.wg_view_MainBuy',
    config:{
        items:[
            {
                xtype:'titlebar',
                title:'ค้นหาสินทรัพย์',
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
                xtype:  'fieldset',
                layout: 'vbox',
                margin: '10 10 10 10',
                title:  'ประเภท',
                items: [
                    {
                        xtype: 'checkboxfield',
                        name : 'CB_TYPE_H',
                        label: 'บ้าน',
                        value: 'SH'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_TYPE_TH',
                        label: 'ทาวน์เฮ้า',
                        value: 'TH'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_TYPE_CB',
                        label: 'อาคารพาณิชย์',
                        value: 'CB'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_TYPE_CD',
                        label: 'คอนโดมิเนี่ยม',
                        value: 'CD'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_TYPE_L',
                        label: 'ที่ดิน',
                        value: 'LD'
                    }
                ]
            },{
                xtype:'fieldset',
                layout: 'vbox',
                margin: '10 10 10 10',
                items: [
                    {
                        name: 'PROVINCE',
                        xtype: 'selectfield',
                        options: [
                            {
                                text: 'กรุณาเลือกจังหวัดที่ต้องการ',
                                value: 'NONE'
                            },{
                                text: 'กรุงเทพมหานคร',
                                value: 'BKK'
                            },{
                                text: 'นนทบุรี',
                                value: 'NTB'
                            },{
                                text: 'ปทุมธานี',
                                value: 'PTT'
                            },{
                                text: 'สมุทรปราการ',
                                value: 'SMP'
                            },{
                                text: 'จังหวัดอื่นๆ',
                                value: 'ETC'
                            }],
                        label: 'จังหวัด',
                        disabled: false
                    },
                    {
                        xtype: 'sliderfield',
                        id: 'Price',
                        itemId: 'price',
                        component: {
                            allowThumbsOverlapping: true
                        },
                        label: 'ช่วงราคาที่สนใจ',
                        value: [
                            25,
                            75
                        ]
                    },
                    {
                        xtype: 'sliderfield',
                        id: 'Distance',
                        itemId: 'distance',
                        component: {
                            allowThumbsOverlapping: true
                        },
                        label: 'รัศมีในการค้นหา'
                    }
                ]
            },{
                xtype:  'fieldset',
                layout: 'vbox',
                margin: '10 10 10 10',
                title:  'ลักษณะพิเศษ',
                items: [
                    {
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_NONE',
                        label: 'ไม่กำหนด',
                        value: 'NONE'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_BTS',
                        label: 'ใกล้รถไฟฟ้า',
                        value: 'BTS'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_EXAT',
                        label: 'ใกล้ทางด่วน',
                        value: 'EXAT'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_ROAD',
                        label: 'ใกล้ถนน',
                        value: 'ROAD'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_CLOSE_TO_ROAD',
                        label: 'อยู่ห่างจากถนนไม่เกิน 100 เมตร',
                        value: 'CLOSE_TO_ROAD'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_RIVER',
                        label: 'ใกล้แม่น้ำ คลอง',
                        value: 'RIVER'
                    },{
                        xtype: 'checkboxfield',
                        name : 'CB_SPECIAL_MOUNTAIN',
                        label: 'ใกล้ภูเขา',
                        value: 'MOUNTAIN'
                    }
                ]
            },{
                xtype:'button',
                margin: '10 10 10 10',
                text:'ค้นหา',
                itemId:'btn_Search'
            }
//code from  //http://www.mindstick.com/Articles/45357e10-b8c2-4214-9fe6-3d1ec28c8699/?Slider%20Field%20in%20Sencha%20Touch

        ],// end items
        listeners: [
//            {
//                fn: 'onOverlappingCkeckBoxCheck',
//                event: 'check',
//                delegate: '#OverlappingCkeckBox'
//            },
//            {
//                fn: 'onOverlappingCkeckBoxUncheck',
//                event: 'uncheck',
//                delegate: '#OverlappingCkeckBox'
//            },
            {
                fn: 'onSliderFieldChange',
                event: 'change',
                delegate: '#SliderField'
            }
        ]  // end listeners
    },    // end configs

//    onOverlappingCkeckBoxCheck: function(checkboxfield, e, eOpts) {
//        Ext.getCmp('SliderField').getComponent().setAllowThumbsOverlapping(true);
//    },
//
//    onOverlappingCkeckBoxUncheck: function(checkboxfield, e, eOpts) {
//        Ext.getCmp('SliderField').getComponent().setAllowThumbsOverlapping(false);
//    },

    onSliderFieldChange: function(me, sl, thumb, newValue, oldValue, eOpts) {
        console.log("onSliderFieldChange");
        Ext.getCmp('SliderField').getComponent().setAllowThumbsOverlapping(false);
//        var slider= Ext.getCmp('SliderField');
//        Ext.getCmp('SliderValueToolbar').setTitle('values = [' + slider.getValues() + ']');
    }



});
