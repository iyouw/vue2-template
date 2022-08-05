const SERVICES = {
  USER_CENTER_SERVICE: "http://192.1.3.167/UserCenter/api/",
  MEDIA_BRAIN_SERVICE: "http://192.1.3.167/MediaBrain/api/",
  CLOUD_RESOURCE_SERVICE: "http://192.1.3.167/CloudResource/api/",
  LOG_SERVICE: "http://192.1.3.167/LogSystem/api/",
};

const PAGES = {
  BIG_DATA_SEARCH_PAGE: "https://test-om.linker.cc/BigDataSearchApi/index.html",
};

const AUTHENTICATION = {
  //认证中心地址
  authority: "http://192.1.3.167/id4/",
  //系统Id
  client_id: "BD95B464-80A4-470E-BFE4-111900000001",
  //密钥
  client_secret: "123456",
  //认证完成后回调地址
  redirect_uri:
    window.location.origin +
    window.location.pathname.replace(/\/[^/]+$/, "") +
    "callback.html",
  //认证类型 （固定）
  response_type: "code",
  //可使用域（固定）
  scope: "api openid profile",
  //状态码（固定）
  state: "STATE",
  //开启登录状态检测
  monitorSession: true,
  //检测登录状态间隔
  checkSessionInterval: 10000,
};

export default {
  SERVICES,
  PAGES,
  AUTHENTICATION,
};
