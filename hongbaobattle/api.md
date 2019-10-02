## 获取提现信息

GET https://api.clotfun.online/withdraw?appkey=a0ce878c3e5a1889710b0e371fbb08f8&adSpaceKey=8afa33707640aafaf9a045b2d6da0e36&mobileSystem=0&uid=626183677730635776&sessionId=GwOEBbcVrn&browserType=10&country=&province=&city=&imei=&idfa=&promotionTarget=1&promotionSex=&promotionNetwork=&hdggReferer=hongbaobattle%2F&advLayout=3&adTriggerType=withdraw&t=1569980975126

Response

```json
{
    "code":"200",
    "message":"success",
    "result":{
        "hdggAdvInfo":{
            "id":7205,
            "isDelete":0,
            "name":"cpa支付宝-1112豆盟-7.6-tx-tt",
            "advType":"180,184",
            "imageUrl":"https://hdggcdn.bayimob.com/program/20190706/253571a00fe545b3ae1b5e2d0d53d1fd.png",
            "urlPath":"https://render.alipay.com/p/f/jfxb4alj/pages/receive-redpacket/index.html?__webview_options__=ttb%253Dauto&partnerId=1112&sceneCode=KF_DYW04&shareChannel=QRCode&shareUserId=2088531481321668&sharedUserId=",
            "customerId":5596,
            "doumobkey":"CFL8NtnwYx2yBTdwL2s7+A==",
            "issuedTime":1569980975300,
            "sessId":"VtVRZMLbiVUq",
            "repeatIssued":1,
            "advMaterialId":74108,
            "promotionTarget":1,
            "manualBidPrice":0.2,
            "dkey":"5d94022ff10c5777277acde5",
            "advLayout":3,
            "cashlimit":8,
            "cashplaycount":3,
            "expected":0.00701,
            "adPlatformValue":1,
            "bidReqId":"9DD7B4D9FCA1D10BC906CBAE7A4259BB14D40A537B93994E",
            "adTriggerType":"withdraw",
            "entityAdvForm":1,
            "minDayBudget":200
        }
    }
}
```

## getRedpacketRate

GET /tiger/getAdSpaceRedRate/8afa33707640aafaf9a045b2d6da0e36

Response

```json
{
    "code":"200",
    "message":"success",
    "result":35
}
```

## 获取广告相关配置

GET tiger/getConfig/${adSpaceKey}

Response

```json
{
    "code":"200",
    "message":"success",
    "result":{
        "adspacePluginsSettingVOList":[
            {
                "adspacePluginsId":1,
                "triggerValue":1,
                "state":0
            },
            {
                "adspacePluginsId":2,
                "triggerValue":35,
                "state":1
            },
            {
                "adspacePluginsId":3,
                "triggerValue":null,
                "state":1
            }
        ],
        "adspaceReturnPathSetting":{
            "openOrClose":1,
            "pathChoose":0
        },
        "mediaPluginsSettingVOList":[
            {
                "mediaPluginsId":1,
                "state":0,
                "setting":""
            },
            {
                "mediaPluginsId":2,
                "state":0,
                "setting":""
            }
        ]
    }
}
```

## 获取抽奖结果

Request

GET https://api.clotfun.online/tiger?appkey=a0ce878c3e5a1889710b0e371fbb08f8&adSpaceKey=8afa33707640aafaf9a045b2d6da0e36&mobileSystem=0&uid=626183677730635776&sessionId=NEWbBkBJW7&browserType=10&country=&province=&city=&imei=&idfa=&hdggReferer=hongbaobattle%2F&advLayout=2&adTriggerType=interactive&t=1569979473608

Response

```json
{
    "code":"200",
    "message":"success",
    "result":{
        "hdggAdvInfo":{
            "id":7636,
            "isDelete":0,
            "name":"龙井茶-贝叶集",
            "advType":"245,249",
            "advTitle":"正宗明前龙井",
            "advIntro":"限时特惠",
            "imageUrl":"https://hdggcdn.bayimob.com/program/20190820/ad84d108855f4291a9a099c46fff6987.gif",
            "urlPath":"http://m.beiyeji.com/order/4196.html?doum",
            "customerId":6614,
            "doumobkey":"caxoCz0qiPpH5OIr/n1g9Q==",
            "issuedTime":1569979473990,
            "sessId":"eaXfxUtWShIV",
            "repeatIssued":0,
            "advMaterialId":79708,
            "promotionTarget":1,
            "receiveText":"立即抢购",
            "dkey":"5d93fc5197714b6e3eb93043",
            "advLayout":1,
            "expected":0.00635,
            "adPlatformValue":1,
            "bidReqId":"9FDBF393064AD489A8E73C093EB1F154081E3F9C99EED0C9",
            "adTriggerType":"interactive",
            "minDayBudget":100,
            "entityAdvForm":1
        }
    }
}
```

## 获取游戏列表

> 游戏次数用完后，会调用该接口

GET https://api.clotfun.online/gameList?appkey=a0ce878c3e5a1889710b0e371fbb08f8&adSpaceKey=8afa33707640aafaf9a045b2d6da0e36&uid=626183677730635776&imei=&idfa=&hdgghtmlid=287

Response

```json
{
    "msg":"success",
    "code":0,
    "list":[
        {
            "cardImage":"/program/20190927/d2c178bb4076405c969a9e67ce2b1c28.jpg",
            "status":"1",
            "buttonText":"立即查看",
            "gameName":"国庆礼盒2019",
            "id":"500",
            "pathName":"static/zadan42",
            "url":"static/zadan42/index.html?appkey=a0ce878c3e5a1889710b0e371fbb08f8&adSpaceKey=8afa33707640aafaf9a045b2d6da0e36&uid=626183677730635776&imei=&idfa=&hdgghtmlid=287&t=1569980834307"
        },
        {
            "cardImage":"program/20190927/dc253ad41d0b4d23a26ca8e154f36367.jpg",
            "status":"1",
            "gameName":"国庆赢大奖",
            "pathName":"static/kaimen",
            "id":"499",
            "buttonText":"立即查看",
            "url":"static/kaimen/index.html?appkey=a0ce878c3e5a1889710b0e371fbb08f8&adSpaceKey=8afa33707640aafaf9a045b2d6da0e36&uid=626183677730635776&imei=&idfa=&hdgghtmlid=287&t=1569980834308"
        }
    ]
}
```

## 游戏记录

POST /tiger/statistics/game

Request

Content-Type: application/x-www-form-urlencoded

form data

```
appkey: a0ce878c3e5a1889710b0e371fbb08f8
adSpaceKey: 8afa33707640aafaf9a045b2d6da0e36
gameName: 红包争夺
uid: 626183677730635776
sessionId: u71UCRYRXS
entranceType: 1
hdggReferer: hongbaobattle/
imei: 
wasmSupport: true
```

No response

## 页面事件记录

POST /tiger/statistics/reportEvent

Request

```json
{
    "event":"monitorPage",
    "appkey":"a0ce878c3e5a1889710b0e371fbb08f8",
    "adSpaceKey":"8afa33707640aafaf9a045b2d6da0e36",
    "uid":"626183677730635776",
    "expansion":{
        "redirect":0,
        "lookupDomain":0,
        "appcache":0,
        "connect":0,
        "request":8,
        "ttfb":23,
        "domReadyStart":213,
        "domReadyEnd":271,
        "loadPage":1,
        "gamename":"红包争夺"
    }
}
```

no response

