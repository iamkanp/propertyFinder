Ext.define('WorkShopX.controller.controller_ListViewBuy',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            ref_wg_view_MainBuy:'wg_view_MainBuy',
          //  ref_view_FormEdit:'wg_view_FormEdit',
            ref_wg_view_DetailBuy:'wg_view_DetailBuy',
            ref_wg_view_ListViewBuy_btn_Back:'wg_view_ListViewBuy #btn_Back',
            ref_wg_view_ListViewBuy_list_ShowData:'wg_view_ListViewBuy #list_ShowData'
        },
        control:{
            ref_wg_view_ListViewBuy_btn_Back:{
                tap:'FNC_btn_Back'
            },
            ref_wg_view_ListViewBuy_list_ShowData:{
                itemtap:'FNC_list_ShowData'
            }
        }

    },
    FNC_btn_Back:function(){
        console.log('FNC_btn_Back');
        var _view = this.getRef_wg_view_MainBuy();
//        _view.setValues({
//            txt_name:'',
//            txt_surname:'',
//            txt_nickname:''
//        });
        Ext.Viewport.animateActiveItem(_view,{type:'slide',direction:'right'});
    },
    FNC_list_ShowData:function(list,index,target,record){
        console.log(record.data);
        var _view = this.getRef_wg_view_DetailBuy();
        _view.setRecord(record);
        _view.setValues({
            txt_name:record.data.f_name,
            txt_surname:record.data.f_surname,
            txt_nickname:record.data.f_nickname
        });
        Ext.Viewport.animateActiveItem(_view,{type:'slide',direction:'left'});

    }
});
