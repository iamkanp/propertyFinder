Ext.define('WorkShopX.controller.controller_MainBuy',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            ref_wg_view_Main:'wg_view_Main',
            ref_wg_view_MainBuy:'wg_view_MainBuy',
            ref_wg_view_ListViewBuy:'wg_view_ListViewBuy',
            ref_wg_view_MainBuy_btn_Back:'wg_view_MainBuy #btn_Back',
            ref_wg_view_MainBuy_btn_Search:'wg_view_MainBuy #btn_Search'
        },
        control:{
            ref_wg_view_MainBuy_btn_Back:{
                tap:'FNC_btn_Back'
            },
            ref_wg_view_MainBuy_btn_Search:{
                tap:'FNC_btn_Search'
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
    FNC_btn_Search:function(){
        console.log('FNC_btn_Search pressed');
        var _viewListViewBuy = this.getRef_wg_view_ListViewBuy();
        Ext.Viewport.animateActiveItem(_viewListViewBuy,{type:'slide',direction:'right'});
    }

});