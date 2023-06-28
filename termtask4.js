var map = L.map("map", {
    center: [30.659462, 104.065735],
    zoom: 3,
    zoomControl: false
}).setMaxBounds([[-90, 0], [90, 360]]);
var mapLayers = {
    '谷歌高德杂交/卫星': L.layerGroup([
        L.tileLayer('http://mt3.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            minZoom: 10,
            attribution: "谷歌提供卫星图，高德提供街道图"
        }),
        L.tileLayer('https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            maxNativeZoom: 18,
            minZoom: 10,
            attribution: "谷歌提供卫星图，高德提供街道图",
            subdomains: "1234",
            opacity: 0.5
        })
    ]).addTo(map),
    '高德/卫星': L.layerGroup([
        L.tileLayer('https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            maxNativeZoom: 18,
            minZoom: 10,
            attribution: "高德地图 AutoNavi.com",
            subdomains: "1234"
        }),
        L.tileLayer('https://webst0{s}.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            maxNativeZoom: 18,
            minZoom: 10,
            attribution: "高德地图 AutoNavi.com",
            subdomains: "1234",
            opacity: 0.5
        })
    ]),
    '高德/街道': L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        maxNativeZoom: 18,
        minZoom: 10,
        attribution: "高德地图 AutoNavi.com",
        subdomains: "1234"
    }),
    '谷歌/卫星': L.tileLayer('http://mt3.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        minZoom: 10,
        attribution: "谷歌 Google.cn"
    }),
    '谷歌/街道': L.tileLayer('http://mt3.google.cn/vt/lyrs=m&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        minZoom: 10,
        attribution: "谷歌 Google.cn"
    }),
    '智图/街道': L.tileLayer('https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 20,
        maxNativeZoom: 16,
        minZoom: 10,
        attribution: "智图 GeoQ.cn"
    })
}
var layerControl = L.control.layers(mapLayers, {}, {
    position: 'topright',
    collapsed: true
}).addTo(map);
L.control.zoom({
    zoomInTitle: '放大',
    zoomOutTitle: '缩小'
}).addTo(map);