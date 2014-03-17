Ext.define('WorkShopX.controller.controller_MainSell',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            ref_wg_view_Main:'wg_view_Main',
            //ref_wg_view_MainSell:'wg_view_MainSell',
            ref_wg_view_MainSell_btn_Back:'wg_view_MainSell #btn_Back',
            ref_wg_view_MainSell_btn_Save:'wg_view_MainSell #btn_Save'
        },
        control:{
            ref_wg_view_MainSell_btn_Back:{
                tap:'FNC_btn_Back'
            },
            ref_wg_view_MainSell_btn_Save:{
                tap:'FNC_btn_Save'
            }
        }

    },
    launch:function(){
        console.log('Controller Form Add Start');
    },
    FNC_btn_Back:function(){
        console.log('FNC_btn_Back pressed');
        var _viewMain = this.getRef_wg_view_Main();
        Ext.Viewport.animateActiveItem(_viewMain,{type:'slide',direction:'right'});
    },
    FNC_btn_Save:function(){
        console.log('FNC_btn_Save pressed');

    }

});