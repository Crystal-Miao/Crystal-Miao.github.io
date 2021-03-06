/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/09/12/just-try/index.html","e1f8779807fc555cdee26bbcd4ef3c66"],["/2019/02/27/敬请期待哦/index.html","1f5413ce6d76d0c3b4f5c9f812a295f2"],["/2019/07/19/ad1.0/index.html","cf98a1f1ba2ee287c3944766dfd85758"],["/2019/08/07/Group-interview/index.html","073ca7e508938378904f7e89b35148de"],["/2019/08/08/Youth-Protection-Model/index.html","cbfdced9643aa83578d9454b8e3f7f82"],["/404.html","0a2ce23577b4f92f3a004872a6a6895d"],["/about/index.html","ca906194c256e92f3716e51b6d12816d"],["/archives/2018/09/index.html","5ad210cfbeb78ff34e291547dbc79fd5"],["/archives/2018/index.html","177c7a9a66dcf8d03917c27dcc380cfd"],["/archives/2019/02/index.html","a7024227fb086e96024c2fdd460aca13"],["/archives/2019/07/index.html","260b544d3d6dbb97cd4e639af6c6bcae"],["/archives/2019/08/index.html","831149da944a35f81752ca4c994f0c29"],["/archives/2019/index.html","bfb1491889de335cd6435d7b7547afd3"],["/archives/index.html","7a0d9158236ad97bde00a558c47fc55c"],["/baidu_verify_tvNc42Gx3A.html","bf44eec5fe6116f78dadc949f2ba11de"],["/categories/Learn/PM/index.html","b50f9d90d5c0d5f72b2c2245877caa32"],["/categories/Learn/index.html","f7cb4bf44a6a3f6cab4c947cba93b670"],["/categories/NLP/index.html","daba0352bce674ab343a8316597d4a85"],["/categories/NLP/二级/index.html","b290c912fce17992595dba7dfcc25e43"],["/categories/PM/index.html","67f9585210a4724e636cd8af9b0a68f6"],["/categories/PM/interview/index.html","cce440d4cec5c4541834d96af1ebbc5e"],["/categories/PM/work/index.html","17975eb31fcaf33dc02d57c300474e7d"],["/categories/PM/二级分类/index.html","67bd017195bf0cf6793d5a5e9b48bae4"],["/categories/index.html","3ebabf89e23676b6f36b076f4a5d5393"],["/css/main.css","88a310aa744c98790fee531ac8d71ef2"],["/google47671999b73952db.html","b224df0e61cc8ea4ed484562e153b4c7"],["/images/Wachat_money.png","adf5c583fd24719d2154005a6290129f"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay_money.png","30225ede0367033ba4a2ea350e618946"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/miao_ID_round.png","5f7994b5391f1e6487cc4c81572ab632"],["/images/miao_ID_round1.png","f69406dd0ffe817e0205960e59948d27"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/imagess/77/七月流火 九月授衣.jpg","86a5f6e14102c3f29aac5bf3ec3ad94b"],["/imagess/Ad/AUC标签体系.png","9b8bea36dbcfbcb4f437b0d387ad8925"],["/imagess/Ad/DSP重定向.png","4b9dc44ee0f4a4a4eb2e58835c6a76a4"],["/imagess/Ad/ROI优化.png","7f6b72d6c1fa9921aa08fb4d7a69e143"],["/imagess/Ad/cookie mapping.png","6c1a55e74fce76d3fcebf292fc62cc35"],["/imagess/Ad/受众定向评测.png","f6ad5ce4aa6eb60cbcaf0f86881a8bf4"],["/imagess/Ad/在线分配问题.png","372df2b61dbf929588f0a37a3df10e3d"],["/imagess/Ad/在线广告市场.png","0ac4c596d6ec591f1f7ce8581107eec1"],["/imagess/Ad/在线广告市场结构图.png","08494848284d3794132508268df3ec6a"],["/imagess/Ad/在线广告核心计算问题.png","793f1e2dc9cfca91d568793adbde21e1"],["/imagess/Ad/在线广告系统.png","38d75e6b6bf8708806f5230a7ad74cfc"],["/imagess/Ad/在线广告计算的挑战.png","463360c262dab16b243eebb44fd8054b"],["/imagess/Ad/实时竞价.png","f9644d5e7691b07b4be0a8989e1cbc89"],["/imagess/Ad/常见受众定向形式.png","de933901664bb0ccc4b0283e287e3f88"],["/imagess/Ad/广告与销售的区别.png","8e52f0e884549c89f63778e5a0432216"],["/imagess/Ad/广告搜索推荐比较.png","a4d832f59bcc907b76fb2892d03709e5"],["/imagess/Ad/广告流量交易方式.png","03f2abe4b26939716f7d6c6eb2125de1"],["/imagess/Ad/广告策略的效果.png","5188ce19c5ca5b31ccd32e89c456ba34"],["/imagess/Ad/担保式投放与广告投放.png","8360a64a816646492958ee0f68514671"],["/imagess/Ad/探索与利用.png","419ecb430e5bae40f2d558b699ae2804"],["/imagess/Ad/框架-计算广告.png","b518d6c586b8d8f34b71e5eb75c6695a"],["/imagess/Ad/流式计算平台.png","661652addbba33ed33407fb03e8ad550"],["/imagess/Ad/点击价值估计.png","86353e3accac27eaaa87123a2c8a234d"],["/imagess/Ad/点击率预测.png","78e3a90564508e901357865f98df7059"],["/imagess/Ad/用开源工具搭建广告系统.png","be7d3115f6f894b9d538889094744fc8"],["/imagess/Ad/精准广告业务错误观点.png","dea504a7f645f26f2375d27f9e91df7d"],["/imagess/Ad/行为定向.png","b5f0721fd5946fa517879c2c78e54f85"],["/imagess/Ad/计算广告喵.png","7cbe235dee1276577c904d1f5a75e3d2"],["/imagess/Ad/逻辑回归.png","15be37509da025d72ebf8c988a8d5416"],["/imagess/Youth/1.png","0a11d3bfc4c652b38d433bf042286089"],["/imagess/Youth/10.png","5b1a8bf550a23497f58a47c66e332970"],["/imagess/Youth/11.png","24db8c17c30e96ce6af4f3ff480f608e"],["/imagess/Youth/12.png","3f45ceca793a16a689296eb9c1d1c4ae"],["/imagess/Youth/13.png","26c1b205ff1ef858da61578796e35fca"],["/imagess/Youth/14.png","a2f08e55a35017748da7618f7e834ae5"],["/imagess/Youth/15.png","ad9a5955601aa664c78e9951d2d8566a"],["/imagess/Youth/16.png","5eb95f94d6cecec94675d02278bd91af"],["/imagess/Youth/17.png","a39b05cf1bf15b468bc760623772c324"],["/imagess/Youth/18.png","7a4670c84dadacadba487ba0b70f1eb7"],["/imagess/Youth/19.png","bb179d93b45f1b67c3bd2208c955e083"],["/imagess/Youth/2.png","2fc04c3607a29458ed57aaa721dfc21a"],["/imagess/Youth/20.png","8853bb44bf49cf918a1a20099e9b5798"],["/imagess/Youth/21.png","afd5dd203d015cd592e5a4c5e4fc0064"],["/imagess/Youth/22.png","3710b77b0ec0d11d1f6a187e26df6cb7"],["/imagess/Youth/23.png","f214b0df33fa8858766cd16334a7e2a5"],["/imagess/Youth/24.png","5f9d35d94cd26e4f4b78fe884b45862d"],["/imagess/Youth/25.png","b95ddf69b51c3ef09db6dc7952f3d0b3"],["/imagess/Youth/26.png","9901e9d312eec6dedbdf781857b583a3"],["/imagess/Youth/27.png","cb10ded411fcc7c8cd69e9016131224c"],["/imagess/Youth/28.png","06d9680c7b02378738ea804a7223a448"],["/imagess/Youth/29.png","a621c90e1b666489f4072a4c87915144"],["/imagess/Youth/3.png","bd8cd17074afb58ff1061eef9319ffdd"],["/imagess/Youth/30.png","407fe68b725b0d748391e3ad4a827c01"],["/imagess/Youth/31.png","a85f5d3b9799687f704f92ff155fe559"],["/imagess/Youth/32.png","c95726205db68b0978acc9d2099ef191"],["/imagess/Youth/33.png","2a598cbd8a1c07e4434bcb4d7e20eb88"],["/imagess/Youth/34.png","4a804062a7e42091309e718aa54438ad"],["/imagess/Youth/35.png","7764c3aa687da96edc107917907ca789"],["/imagess/Youth/36.png","44756c129136392c6bbd40b8ce105747"],["/imagess/Youth/37.png","a1638c700f0fc7f4cd9422e6e8ca09a5"],["/imagess/Youth/38.png","e094fda8ffe6dd95ea4a6c1776d10c7a"],["/imagess/Youth/39.png","ec1669b338e4775b170e9ee04b770d8e"],["/imagess/Youth/4.png","7f10b9fbeccabbbcac1f646890826201"],["/imagess/Youth/40.png","b01e45e03bce2aaeb88fcc07672f6469"],["/imagess/Youth/5.png","b7fa3f0498f1c7dfec253e09f2b2ae8a"],["/imagess/Youth/6.png","7f5b369f9f4ffec99aff0c918e64f35f"],["/imagess/Youth/7.png","d2641714c82b52037d69dd4e496b7abb"],["/imagess/Youth/8.png","a96ae41e62a57decb489619f5ae45985"],["/imagess/Youth/9.png","8202914e604b543ecc87ffd5f15d7625"],["/imagess/Youth/青少年模式竞品分析图.png","21f52393bbc2864f1ad127c6237de3c0"],["/imagess/miao.png","9da33972e67563ac291d979469fa335c"],["/imagess/miao.svg","e5b9df397b492be40f2f03adb158ad25"],["/imagess/miao_16.png","9d32a610b4b7273bedb2b227c6cb013d"],["/imagess/miao_32.png","a98797c2e77f1fabb5de8a3a55950bec"],["/imagess/淘宝内容中台分析报告/1.png","5f176066a583ba20f6ca6721d6a37f8f"],["/imagess/淘宝内容中台分析报告/10.png","359f214a55d0722af32911bcf2df8802"],["/imagess/淘宝内容中台分析报告/11.png","f6a1e65180fb82049f711c223fd25ac5"],["/imagess/淘宝内容中台分析报告/12.png","1177a0572c6dd967ec6ef8f7672ea21e"],["/imagess/淘宝内容中台分析报告/13.png","e60265461c228b9671d762f95c1137b6"],["/imagess/淘宝内容中台分析报告/14.png","8f23b31c0548f288cc5983e22d559474"],["/imagess/淘宝内容中台分析报告/15.png","62ab88d19b10be8e9330cfc9b4f60cb1"],["/imagess/淘宝内容中台分析报告/16.png","40847f6eb981706d0dc697e804dcb105"],["/imagess/淘宝内容中台分析报告/17.png","ebe1f41ffba2ef47e1fc87a12a5c567a"],["/imagess/淘宝内容中台分析报告/18.png","b8fa304df2b4d832348417b64301e77e"],["/imagess/淘宝内容中台分析报告/19.png","e47afd21c1798539b9a595e75aac960c"],["/imagess/淘宝内容中台分析报告/2.png","461a3b174ccf46a720d4662d31f022cd"],["/imagess/淘宝内容中台分析报告/20.png","6182bc48c5b0a250a6653300d5716536"],["/imagess/淘宝内容中台分析报告/21.png","c8887331ca3bd4bfbb1aac89d12e0f85"],["/imagess/淘宝内容中台分析报告/22.png","a6dfb77b48214bab3efb3bd002b31db8"],["/imagess/淘宝内容中台分析报告/23.png","1b62a3d85b0b4e41832977fb3a18aea5"],["/imagess/淘宝内容中台分析报告/24.png","d845f30e041506077115c83b0012124b"],["/imagess/淘宝内容中台分析报告/25.png","740788326d159d30af802c7e1fd7c5cc"],["/imagess/淘宝内容中台分析报告/26.png","4961bcca2f8a36ebc1b2173b16f55459"],["/imagess/淘宝内容中台分析报告/27.png","9a24754f20240fd4aadc7d7923b17fa8"],["/imagess/淘宝内容中台分析报告/28.png","ede1d7f423df9096f6de42f22a5b462a"],["/imagess/淘宝内容中台分析报告/29.png","c29f1c4e942030c2759ed8121a8748b3"],["/imagess/淘宝内容中台分析报告/3.png","f11edb5c833452cb342c5639978c4363"],["/imagess/淘宝内容中台分析报告/30.png","a68bd8ddaa4b1add2c728a952405b52d"],["/imagess/淘宝内容中台分析报告/4.png","f4f41458bc407957c234a488c96fa44c"],["/imagess/淘宝内容中台分析报告/5.png","a4f7f42c510e365070befaadc7062846"],["/imagess/淘宝内容中台分析报告/6.png","73e44ec0dee3a84aa6f0c37eaaed0c80"],["/imagess/淘宝内容中台分析报告/7.png","3c65f140d84d2892ee30b966756eda96"],["/imagess/淘宝内容中台分析报告/8.png","d8a69c86ac3db596aac330d295079442"],["/imagess/淘宝内容中台分析报告/9.png","72bafa0afd99917e7a19bb325b60f1c1"],["/index.html","62df9bad45dc35672898d35bcfc33284"],["/js/crypto-js.js","a9d090555f71c39019be28a229179de2"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clipboard-use.js","2dd2ee556391c3fe23a303e3902c4ad1"],["/js/src/clipboard.min.js","3f3688138a1b9fc4ef669ce9056b6674"],["/js/src/custom.js","a42eea7478955b886d8ec1f5c3bc6f5d"],["/js/src/custom_title.js","416a4fc617a5635326ed4a578ee3f3ea"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/love.js","fd5559b88c9328c9a419b0232e0ef1bd"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/particle.js","b1a64c0b4d871a43a2b873c8896bed46"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","850b3ed1dec8a5b76173c517dd5b5a62"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","2bb91f504aff31896f37ba49a9471870"],["/lib/jquery_lazyload/README.html","9d9505357b111d988a9a73c39d6a048b"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/static/api/css/imgshare.css","bf5a03e2562cef4d10c42b3aa7830602"],["/static/api/css/like.css","44e892352ebf3a845c629659d52a0ea5"],["/static/api/css/select_share.css","98dd25de6f829d1909c1fea715f56735"],["/static/api/css/share_popup.css","f3cfcf955a5b1e95fa27c0c133154a6b"],["/static/api/css/share_style0_16.css","6976da1ebd7dafe60c5fd3147e502b13"],["/static/api/css/share_style0_24.css","f3d26334a23480e70273b549fa7bdaed"],["/static/api/css/share_style0_32.css","8bd7e256bc9382cefad50233f00bf49f"],["/static/api/css/share_style1_16.css","c7f31cdf18e48aec721fcaf5ca36911f"],["/static/api/css/share_style1_24.css","f9a0d8b89158af8015feeaa473e7b6bf"],["/static/api/css/share_style1_32.css","9811c0b803a293e5d2faf7fd87c4d49b"],["/static/api/css/share_style2.css","b45e61921210fedbff5367dd611d4f74"],["/static/api/css/share_style2_16.css","98930d37cb1aad26a6a874c510d57670"],["/static/api/css/share_style2_24.css","e14b327a07f0511d2f02fbfea60c4a22"],["/static/api/css/share_style2_32.css","31be3f23657e730323f3ffd777a016f3"],["/static/api/css/share_style4.css","01a5f7f8e87eeed3964f8040cef2b8f3"],["/static/api/css/slide_share.css","823f63a5ef3ced19dacd039e31ee942c"],["/static/api/css/weixin_popup.css","67b091fe95d743ebb2890e723d9a4466"],["/static/api/img/share/icons_0_16.png","f8fe712adcbe277d37a2bf6b91362611"],["/static/api/img/share/icons_0_24.png","cc6389da0e1a06120431dfb3dcaa92d6"],["/static/api/img/share/icons_0_32.png","766abf73c3181b2b649d8808acc572ea"],["/static/api/img/share/icons_1_16.png","2140d70428939dc0c9555b39774cfc30"],["/static/api/img/share/icons_1_24.png","1d80bcf3870b6fbea36dafce37be22f4"],["/static/api/img/share/icons_1_32.png","8253f4f6a41f40c2dff87ae983ba0265"],["/static/api/img/share/icons_2_16.png","5bf2283a46d0d92cc8e3feeb81508962"],["/static/api/img/share/icons_2_24.png","590f4808a5979b956d0d05d9a64ca404"],["/static/api/img/share/icons_2_32.png","d1da1e6d19cb0a30e3dcbf821bc5c881"],["/static/api/img/share/l0.gif","a568ce9a9f2d4f5b16037c314e666e56"],["/static/api/img/share/l1.gif","ab325a7c2c289a8d323b5cb33ffb4640"],["/static/api/img/share/l2.gif","0f82ccee500a2beb41ecfdca47242a70"],["/static/api/img/share/l3.gif","c3d2b8e18abf7b01bee295e478e2d043"],["/static/api/img/share/l4.gif","46bdb528bbb34a26665d92cc4afa38d2"],["/static/api/img/share/l5.gif","7d2b8d2c1474bc41ced7cb015e170970"],["/static/api/img/share/l6.gif","59dbf427dbb55a9312a575a38759da8b"],["/static/api/img/share/l7.gif","56d346aca407097a1bf935dadf4c2738"],["/static/api/img/share/l8.gif","058c71a6003dac9e17b490dd31ac73d4"],["/static/api/img/share/pop_c.gif","0402af3f608e8d97b61ace712d7108c8"],["/static/api/img/share/r0.gif","823ff268cb1533c18ac75c79d9371706"],["/static/api/img/share/r1.gif","60d7c44f2ff75187120d60755668db67"],["/static/api/img/share/r2.gif","81fb45e1d1690089cb25fb3c08b06973"],["/static/api/img/share/r3.gif","64f3c67a5e086dfc96bfedc776e62e61"],["/static/api/img/share/r4.gif","ba6ed23c31e1e0f81b8b29e71a3eaae1"],["/static/api/img/share/r5.gif","bc1b6451d4de64a2b1074c62c90e5a12"],["/static/api/img/share/r6.gif","13e623c878180b56b44311fc8af9306f"],["/static/api/img/share/r7.gif","cc0f73f4ec9c7cd0494867ca053cdaac"],["/static/api/img/share/r8.gif","e7360c711205dea02ff1f80c640a093b"],["/static/api/img/share/sc.png","8fd98fddd3cfac30ba71cdd3a970ff04"],["/static/api/img/share/selectshare_close.png","eeccbf360e3c168b66bf08a71b34ee88"],["/static/api/img/share/share-search-icon.png","2dfa3ff22f5285544db0ca6d88109db5"],["/static/api/js/base/class.js","baecf37aeee2bcbedff122bf8f3d3e8b"],["/static/api/js/base/tangram.js","81040e695eba15ff3767063e37768233"],["/static/api/js/component/animate.js","38ea46901ac6a60728406fcf5b737477"],["/static/api/js/component/anticheat.js","f47bd58aec3aa26ea578b95044b9b245"],["/static/api/js/component/comm_tools.js","77247e36d8bcf620d0faa577cb5ac077"],["/static/api/js/component/partners.js","60b64b3e1452ec2abe740687911c4302"],["/static/api/js/component/pop_base.js","a4374af8d1508d034aaefc2d36f92e70"],["/static/api/js/component/pop_dialog.js","12444a745d262069a96b7f39d479767d"],["/static/api/js/component/pop_popup.js","ecb7201c0cdc5a9479eecaf74387b4e1"],["/static/api/js/component/pop_popup_slide.js","216b2f432175cae5d316f8d133ebfae3"],["/static/api/js/component/qrcode.js","d74807f3c8eb0afe40c69c24d69754a9"],["/static/api/js/conf/const.js","9e49aed6498d166e1196503be8724785"],["/static/api/js/conf/define.js","edc8f648433e5fb942e41c9d186a3f08"],["/static/api/js/share.js","e541793a094fa0b301a66538ed5678ab"],["/static/api/js/share/api_base.js","7abf8bdf4939d97f3141e355f781d1c6"],["/static/api/js/share/combine_api.js","e86ac4a099f8f3c5fbc724588d37a7b3"],["/static/api/js/share/image_api.js","b4f9e827c6cfdeed4a8899ca94e85273"],["/static/api/js/share/like_api.js","82e7b74d8b84f8a351df3d86d3693f0a"],["/static/api/js/share/likeshare.js","9eecb7db59d16c80417c72d1e1f4fbf1"],["/static/api/js/share/select_api.js","be599bd13808c256de5b662ba63667f1"],["/static/api/js/share/share_api.js","aeed62b9ab154e66264b41be226108fe"],["/static/api/js/share/slide_api.js","0cdb6ce64560b238ed230353ec14f516"],["/static/api/js/start/router.js","3e9cfc637b10d155381043d30a63fa38"],["/static/api/js/trans/data.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/logger.js","d41d8cd98f00b204e9800998ecf8427e"],["/static/api/js/trans/trans.js","c35826a8e8c39c2a386e3e4d3cbca282"],["/static/api/js/trans/trans_bdxc.js","8a65a16a683f36ae892343337ac21555"],["/static/api/js/trans/trans_bdysc.js","e759c9e370b39b884b04e222fc21acaa"],["/static/api/js/trans/trans_weixin.js","5c62680f96222ec5671a5905540b6ccf"],["/static/api/js/view/image_view.js","f534297c3d6307a81eb162fc90cb7240"],["/static/api/js/view/like_view.js","d5deb4ffeeeed06ace8f4479df3e0eca"],["/static/api/js/view/select_view.js","29f5d7fc9a474b4ec18ce5f685fc7cec"],["/static/api/js/view/share_view.js","f41f7713e6684dcbcd8304843ae6026d"],["/static/api/js/view/slide_view.js","962eae6aabf14115f23e57b6bd55e23d"],["/static/api/js/view/view_base.js","e719093c5a4ff674bcefbfe80f4dee2b"],["/sw-register.js","13a401bc67b9dc629bc29ba33af651c3"],["/tags/index.html","96db41a9bae2db10ef005786cd7ea748"],["/tags/tag1/index.html","4286b51df4fe23aa4593c52d35abf719"],["/tags/tag2/index.html","55dbeec065e4f86615ac01f74e0d9a16"],["/tags/产品/index.html","3bacb4aacbccf06c39ccf2bfb16cd767"],["/tags/商业产品/index.html","fac0d8cb3b437d933fb12513e3f41b9c"],["/tags/广告/index.html","26268c9d561c6020daa8fa5fd579ab07"],["/tags/群面/index.html","6e29c4af480d7e080cc0f38ecdb8d2c3"],["/tags/调研/index.html","116982b0e247613a2025b7c00c757d79"],["/top/index.html","17d323327005ba12101990a31bbcfcb0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
