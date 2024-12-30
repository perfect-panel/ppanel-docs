---
title: PPnode
group:
  title: NodeDeploy
  order: 1
toc: content
---
# PPnode

PPanel is a pure, professional, and perfect open-source proxy panel tool, designed to be your ideal choice for learning and practical use.

## Features

- Permanently open-source and free of charge.  
- Supports multiple protocols, including V2ray, Trojan, and Shadowsocks.  
- Supports new features such as Vless and XTLS.  
- Supports multi-node integration with a single instance, eliminating the need for repeated startups.  
- Enables restrictions on online IPs.  
- Allows limiting the number of TCP connections.  
- Supports bandwidth throttling at both the node port and user levels.  
- Features a simple and clear configuration process.  
- Automatically restarts the instance when configuration changes are made.  
- Supports multiple kernels, making it easy to extend functionality.  
- Allows conditional compilation to include only the necessary kernels.  


## Feature Overview

| Feature                 | v2ray | trojan | shadowsocks | hysteria |
|-------------------------|-------|--------|-------------|----------|
| Automatic TLS certificate application | √     | √      | √           | √        |
| Automatic TLS certificate renewal     | √     | √      | √           | √        |
| Online user count statistics          | √     | √      | √           | √        |
| Audit rules                           | √     | √      | √           |          |
| Custom DNS                            | √     | √      | √           | √        |
| Online IP limit                       | √     | √      | √           | √        |
| Connection limit                      | √     | √      | √           |          |
| Cross-node IP limit                   | √     | √      | √           |          |
| User-based bandwidth throttling       | √     | √      | √           |          |
| Dynamic throttling (untested)         | √     | √      | √           |          |




## 软件安装

### 一键安装

```
wget -N https://raw.githubusercontents.com/Yuzuki616/V2bX-script/master/install.sh && bash install.sh
```

### 手动安装

[手动安装教程（过时待更新）](https://yuzuki-1.gitbook.io/v2bx-doc/xrayr-xia-zai-he-an-zhuang/install/manual)

## 构建
``` bash
# 通过-tag选项指定要编译的内核， 可选 xray， hy
go build -o V2bX -ldflags '-s -w' -gcflags="all=-trimpath=${PWD}" -asmflags="all=-trimpath=${PWD} -tags "xray hy"
```

## 配置文件及详细使用教程

[详细使用教程](https://yuzuki-1.gitbook.io/v2bx-doc/)



