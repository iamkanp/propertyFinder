Ext.application({
    name:'WorkShopX',
    views:['view_Main','view_MainSell','view_MainBuy','view_ListViewBuy'],
    controllers:['controller_Main','controller_MainSell','controller_MainBuy','controller_ListViewBuy'],
    launch:function(){
        console.log('x');

        var _viewMain = {
            xtype:'wg_view_Main'
        };

        var _viewMainSell = {
            xtype:'wg_view_MainSell'
        };

        var _viewMainBuy = {
            xtype:'wg_view_MainBuy'
        };

        var _viewListViewBuy = {
            xtype:'wg_view_ListViewBuy'
        };

//        var _viewAboutUs = {
//            xtype:'wg_view_AboutUs'
//        };




        //EVa
        Ext.Viewport.add([_viewMain,_viewMainSell,_viewMainBuy,_viewListViewBuy]);
    }


});