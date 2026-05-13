// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "ACL4SSR",
    options: [
      { label: "—— 在线完整版(Online) ——" },
      { label: "Online", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online.ini" },
      { label: "Online_NoAuto", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_NoAuto.ini" },
      { label: "Online_NoReject", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_NoReject.ini" },
      { label: "Online_AdblockPlus", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_AdblockPlus.ini" },
      { label: "Online_MultiCountry", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_MultiCountry.ini" },
      { label: "—— 在线精简版(Mini) ——" },
      { label: "Online_Mini", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini.ini" },
      { label: "Online_Mini_NoAuto", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini" },
      { label: "Online_Mini_Fallback", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini" },
      { label: "Online_Mini_MultiMode", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini" },
      { label: "Online_Mini_MultiCountry", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini" },
      { label: "Online_Mini_AdblockPlus", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini" },
      { label: "Online_Mini_Ai", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Mini_Ai.ini" },
      { label: "—— 在线全功能版(Full) ——" },
      { label: "Online_Full", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full.ini" },
      { label: "Online_Full_NoAuto", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini" },
      { label: "Online_Full_MultiMode", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini" },
      { label: "Online_Full_Google", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full_Google.ini" },
      { label: "Online_Full_Netflix", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full_Netflix.ini" },
      { label: "Online_Full_AdblockPlus", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini" },
      { label: "—— 本地版(Offline) ——" },
      { label: "默认", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR.ini" },
      { label: "NoAuto", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_NoAuto.ini" },
      { label: "Mini", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Mini.ini" },
      { label: "Mini_NoAuto", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Mini_NoAuto.ini" },
      { label: "Mini_Fallback", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Mini_Fallback.ini" },
      { label: "Mini_MultiMode", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_Mini_MultiMode.ini" },
      { label: "AdblockPlus", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_AdblockPlus.ini" },
      { label: "NoApple", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_NoApple.ini" },
      { label: "NoAuto_NoApple", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_NoAuto_NoApple.ini" },
      { label: "NoAuto_NoApple_NoMicrosoft", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_NoAuto_NoApple_NoMicrosoft.ini" },
      { label: "NoMicrosoft", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_NoMicrosoft.ini" },
      { label: "WithChinaIp", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_WithChinaIp.ini" },
      { label: "WithGFW", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_WithGFW.ini" },
      { label: "WithChinaIp_WithGFW", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_WithChinaIp_WithGFW.ini" },
      { label: "BackCN", value: "https://cdn.jsdelivr.net/gh/ACL4SSR/ACL4SSR@master/Clash/config/ACL4SSR_BackCN.ini" }
    ]
  },
  {
    label: "universal",
    options: [
      {
        label: "No-Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
      },
      {
        label: "Urltest",
        value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
      }
    ]
  },
  {
    label: "customized",
    options: [
      { label: "Maying", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini" },
      { label: "Ytoo", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini" },
      { label: "FlowerCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini" },
      { label: "Nexitally", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini" },
      { label: "SoCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini" },
      { label: "ARK", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini" },
      { label: "ssrCloud", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini" }
    ]
  },
  {
    label: "Special",
    options: [
      { label: "NeteaseUnblock(仅规则，No-Urltest)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini" },
      { label: "Basic(仅GEOIP CN + Final)", value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini" }
    ]
  }
];
