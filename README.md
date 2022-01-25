
1. 软件准备
首先下载[PicGo](https://github.com/Molunerfinn/picgo/releases)软件，我的是Windows电脑，因此下载Windows版本的。

下载之后不必犹豫，直接进行一下![简单配置](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/picgo01.png)，即可投入使用。

2. 创建仓库和秘钥
首先要在github创建一个仓库，这个不做过多赘述。

接着就是在github个人设置页面，创建一个访问令牌，待会儿配置用的到。

直接访问[git全局token权限配置](https://github.com/settings/tokens) 点击Generate new token按照下图配置创建即可。
![](https://raw.githubusercontent.com/lvxiaowu/resources/main/img/picgo02.png)
3. 配置Picgo

* 设定仓库名：这里的格式为用户名/仓库名，比如我的就是 `lvxiaowu/resources`
* 设定分支名：这里写入分支名称，我这里用`mian`分支。
* 设定Token：将第2步创建的`token`令牌填入。
* 指定存储路径：这个地方可以通过写入一个路径名，从而实现指定目录的上传。我这里写的是 `img`。
* 设定自定义域名：可以不填写。

4. 资源访问
    如：https://raw.githubusercontent.com/lvxiaowu/resources/main/img/picgo01.png
