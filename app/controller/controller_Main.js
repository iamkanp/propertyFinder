Ext.define('WorkShopX.controller.controller_Main',{
    extend:'Ext.app.Controller',
    config:{
        refs:{
            //ref_wg_view_Main:'wg_view_Main',
            ref_wg_view_MainSell:'wg_view_MainSell',
            ref_wg_view_MainBuy:'wg_view_MainBuy',
            ref_wg_view_Main_btn_AboutUs:'wg_view_Main #btn_AboutUs',
            ref_wg_view_Main_btn_Buy:'wg_view_Main #btn_Buy',
            ref_wg_view_Main_btn_Sell:'wg_view_Main #btn_Sell',
            ref_wg_view_Main_btn_HotLocation:'wg_view_Main #btn_HotLocation',
            ref_wg_view_Main_btn_ApplyForNews:'wg_view_Main #btn_ApplyForNews'
        },
        control:{
            ref_wg_view_Main_btn_AboutUs:{
                tap:'FNC_btn_AboutUs'
            },
            ref_wg_view_Main_btn_Buy:{
                tap:'FNC_btn_Buy'
            },
            ref_wg_view_Main_btn_Sell:{
                tap:'FNC_btn_Sell'
            },
            ref_wg_view_Main_btn_HotLocation:{
                tap:'FNC_btn_HotLocation'
            },
            ref_wg_view_Main_btn_ApplyForNews:{
                tap:'FNC_btn_ApplyForNews'
            }
        }

    },
    launch:function(){
        console.log('Controller Form Add Start');
    },
    FNC_btn_AboutUs:function(){
        console.log('FNC_btn_AboutUs pressed');
//        var _viewShowData = this.getRef_view_ShowData();
//        Ext.Viewport.animateActiveItem(_viewShowData,{type:'slide',direction:'left'});
    },
    FNC_btn_Buy:function(){
        console.log('FNC_btn_Buy pressed');
        var _viewMainBuy = this.getRef_wg_view_MainBuy();
        Ext.Viewport.animateActiveItem(_viewMainBuy,{type:'slide',direction:'left'});

    },
    FNC_btn_Sell:function(){
        console.log('FNC_btn_Sell pressed');
        var _viewMainSell = this.getRef_wg_view_MainSell();
        Ext.Viewport.animateActiveItem(_viewMainSell,{type:'slide',direction:'left'});

    },
    FNC_btn_HotLocation:function(){
        console.log('FNC_btn_HotLocation pressed');

    },
    FNC_btn_ApplyForNews:function(){
        console.log('FNC_btn_ApplyForNews pressed');

    }

});