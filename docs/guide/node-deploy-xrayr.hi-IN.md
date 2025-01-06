```markdown
---
title: XrayR
order: 1
group: 
  title: नोड अंतर्विभाग
  order: 5
toc: content
---

## नोड अंतर्विभाग स्थापित करें

### एक-क्लिक स्थापना

```shell
bash <(curl -Ls https://raw.githubusercontent.com/perfect-panel/XrayR-release/master/install.sh)
```

### डॉकर स्थापना

```
curl -fsSL https://get.docker.com | bash -s docker

docker pull ghcr.io/perfect-panel/xrayr:latest && docker run --restart=always --name xrayr -d -v ${PATH_TO_CONFIG}/config.yml:/etc/XrayR/config.yml --network=host ghcr.io/perfect-panel/xrayr:latest
```

### डॉकर कंपोज़ स्थापना

```
# डॉकर और डॉकर कंपोज़ स्थापित करें
curl -fsSL https://get.docker.com | bash -s docker

# कॉन्फ़िगरेशन खींचें
git clone https://github.com/perfect-panel/XrayR-release

# निर्देशिका में स्विच करें
cd XrayR-release

# कॉन्फ़िगरेशन संपादित करें, कृपया कॉन्फ़िगरेशन आइटम देखें, सहेजने के बाद जारी रखें
vi ./config/config.yml

# प्रारंभ करें
docker compose up -d
```

कॉन्फ़िगरेशन आइटम विवरण:

```yaml
Log:
  Level: none # लॉग स्तर: none, error, warning, info, debug
  AccessPath: # /etc/XrayR/access.Log
  ErrorPath: # /etc/XrayR/error.log
DnsConfigPath: # /etc/XrayR/dns.json DNS कॉन्फ़िगरेशन का पथ
ConnetionConfig:
  Handshake: 4 # हैंडशेक समय सीमा, सेकंड
  ConnIdle: 10 # कनेक्शन निष्क्रिय समय सीमा, सेकंड
  UplinkOnly: 2 # कनेक्शन डाउनस्ट्रीम बंद होने पर समय सीमा, सेकंड
  DownlinkOnly: 4 # अपलिंक बंद होने के बाद कनेक्शन बंद होने पर समय सीमा, सेकंड
  BufferSize: 64 # प्रत्येक कनेक्शन का आंतरिक कैश आकार, kB
Nodes:
  - PanelType: 'PPanel' # पैनल प्रकार: PPanel, SSpanel, V2board, NewV2board, PMpanel, Proxypanel, V2RaySocks
    ApiConfig:
      ApiHost: 'http://127.0.0.1:667'
      ApiKey: '123'
      NodeID: 41
      NodeType: V2ray # नोड प्रकार: V2ray, Shadowsocks, Trojan
      Timeout: 30 # एपीआई अनुरोध के लिए समय सीमा
      EnableVless: false # V2ray प्रकार के लिए Vless सक्षम करें
      EnableXTLS: false # V2ray और Trojan के लिए XTLS सक्षम करें
      SpeedLimit: 0 # Mbps, स्थानीय सेटिंग्स दूरस्थ सेटिंग्स को प्रतिस्थापित करें, 0 का अर्थ है अक्षम करना
      DeviceLimit: 0 # स्थानीय सेटिंग्स दूरस्थ सेटिंग्स को प्रतिस्थापित करें, 0 का अर्थ है अक्षम करना
      RuleListPath: # /etc/XrayR/rulelist स्थानीय नियम सूची फ़ाइल का पथ
    ControllerConfig:
      ListenIP: 0.0.0.0 # IP पता जिसे आप सुनना चाहते हैं
      SendIP: 0.0.0.0 # IP पता जिसे आप पैकेज भेजना चाहते हैं
      UpdatePeriodic: 60 # नोड जानकारी को अपडेट करने का समय, कितने सेकंड।
      EnableDNS: false # कस्टम DNS कॉन्फ़िगरेशन का उपयोग करें, कृपया सुनिश्चित करें कि आपने dns.json को ठीक से सेट किया है
      DNSType: AsIs # AsIs, UseIP, UseIPv4, UseIPv6, DNS रणनीति
      EnableProxyProtocol: false # केवल वेबस्कॉकेट और TCP के लिए काम करता है
      EnableFallback: false # केवल Trojan और Vless के लिए समर्थन
      FallBackConfigs: # कई फॉलबैक का समर्थन करें
        - SNI: # TLS SNI (सर्वर नाम संकेत), किसी के लिए खाली
          Path: # HTTP पथ, किसी के लिए खाली
          Dest: 80 # आवश्यक, फॉलबैक का गंतव्य, विवरण के लिए https://xtls.github.io/config/fallback/ देखें।
          ProxyProtocolVer: 0 # PROXY प्रोटोकॉल संस्करण भेजें, 0 अक्षम करने के लिए
      CertConfig:
        CertMode: dns # प्रमाणपत्र प्राप्त करने के तरीके के बारे में विकल्प: none, file, http, dns। "none" चुनने से tls कॉन्फ़िगरेशन मजबूरन अक्षम हो जाएगा।
        CertDomain: 'node1.test.com' # प्रमाणपत्र के लिए डोमेन
        CertFile: /etc/XrayR/cert/node1.test.com.cert # यदि CertMode फ़ाइल है तो प्रदान किया गया
        KeyFile: /etc/XrayR/cert/node1.test.com.key
        Provider: alidns # DNS प्रमाणपत्र प्रदाता, यहां पूर्ण समर्थन सूची प्राप्त करें: https://go-acme.github.io/lego/dns/
        Email: test@me.com
        DNSEnv: # DNS प्रदाता द्वारा उपयोग किया जाने वाला DNS ENV विकल्प
          ALICLOUD_ACCESS_KEY: aaa
          ALICLOUD_SECRET_KEY: bbb
```

