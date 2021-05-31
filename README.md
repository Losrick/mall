# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

vuecli3安装时保存的默认配置信息存储位置
1. C:\Users\Administrator 下的.vuerc中
2. 删除的话将文件下 presets:{}中的对象删除就行了

vuecli3修改配置文件
1. vuecli3的配置文件位于 node_modules下的@vue下的cli-service中的webpack.config.js文件中，其它配置文件位于
      cli-service下的lib文件在的congfig文件夹中
2. 在项目目录下创建 vue.config.js 文件
3. 在文件中使用 module.exports = {}将配置文件导出
   1. 导出的配置文件会自动和cli-service中的配置文件合并

连接远程仓库
1. 如果本地文件中没有.git文件，需要添加本地仓库
   1. git init
2. 将本地仓库添加到远程仓库中
   1. git remote add origin https://github.com/Losrick/supermall.git
3. 创建分支
   1. git branch -M main
4. 将所有文件添加到暂存区
   1. git add .
5. 提交第一次更新
   1. git commit -m "first commit"
6. 将本地更改提交到远程仓库
   1. git push -u origin main

当代码修改后，需要更新到github中时
1. 点击文件后面的加号，先暂存更改
2. 点击上面的勾，提交更改，并填写修改说明
3. 点击右边的···,点击里面的推送按钮

添加文件到.gitignore文件中
1. 将文件去除托管
   1. 去除文件夹：git rm -r --cached 文件夹名
   2. 去除文件：  git rm --cached 文件名
2. 将文件写入.gitignore文件
3. 提交推送

安装必要插件
1. axios:                npm install axios --save
2. 压缩webpack打包插件:   npm install compression-webpack-plugin@5.0.1 --save-dev
3. better-scroll滚动插件: npm install better-scroll -S
4. ElementUI 组件库：     npm i element-ui -S  （与better-scroll合用需要重新配置，已卸载）
   1. ElementUI适用于pc端，移动端可以使用Mint UI
5. fastClick:            npm install fastclick --save   （解决移动端300ms延迟）
   1. 在main.js中导入
   2. 使用该功能： fastClick.attach(document.body)
划分项目结构
1. ./assets/css:CSS文件      ./assets/img:图片资源
2. ./src/common:公共js文件
3. ./components/common:与项目完全分离的公共vue组件      ./components/contect:只能在本项目使用的vue组件
4. ./src/network:网络请求相关文件
5. ./src/views:主要的视图页面vue文件

引入CSS文件
1. 引入normalize.css文件
2. 引入base.css文件
3. 在base.css中使用媒体查询限制当视口宽度大于750px时的html的font-size固定为75px

引入flexible.js文件
在main.js中引入flexible.js文件

base.css文件中
1. 定义变量： --属性名：值;  例：--color: red;
2. 使用变量： 属性名：var(--已定义的属性名);   例:  background-color: var(--color);
3. 全局变量： :root{ --color: red; }   整个页面都可使用
4. 局部变量： .元素{ --color: red; }   只能在当前元素或者其子元素中使用

复用之前的tarbar组件
1. 将之前的组件文件夹中的tarbar文件夹下的src文件夹下的components文件夹下的tarbar文件夹和views文件夹，assets
      文件夹，router文件夹，App.vue文件复制过来
2. 修改MainTarBar.vue文件中的所有路径
3. 修改router文件夹下的router.js文件的路径
4. 修改App.vue文件中的路径

修改别名
1. 建立vue.config.js文件，根据vue-cli4的新特性修改别名

创建路由
1. 在router文件夹下的index.js文件中为views中的每个页面创建路由对象
2. 设置默认路由对象redirect

封装首页导航栏nav-bar
1. 在components文件夹下的common文件夹中创建navbar文件夹
2. 在navbar文件夹中建立NavBar.vue文件
   1. 建立具名插槽 （注意插槽用<div>包裹，方便修改样式）
   2. 修改基本样式属性（不会再次动用的属性）
3. 在views文件夹下的Home.vue文件中导入NavBar.vue文件
   1. 替换在Home首页展示的中间插槽，其他插槽不变，还是不显示
   2. 设置navbar组件在Home页面下的样式属性（只会在Home页面下有效）

使用网络请求
1. 复制learnaxios文件夹下的network文件
2. 在network文件夹下建立和页面对应的.js文件，存储关于对应页面下的网络请求
   1. 目的：方便之后对于对应模块的网络请求的修改
   1. 例如：在network文件夹下建立home.js文件，存储所有关于home页面的网络请求
3. 修改request.js文件中的baseURL

navbar的网络请求
1. 在home.js文件中导入 request.js文件
2. 导出一个网络请求函数
3. 在Home.vue中创建一个声明周期函数created(){}
   1. 当页面创建时，发送网络请求，返回结果
4. 创建多个data属性
5. 将返回结果保存到data中

首页-封装轮播图
1. 在views文件夹下的home文件夹下创建childComps文件夹，用于保存home页面的组件
2. 在childComps文件夹中创建HomeSwiper.vue文件，封装home页面的轮播图
3. 在components文件夹下的common文件夹中创建swiper文件夹,用于保存轮播图模块
4. 在swiper文件夹中创建index.js文件统一导出轮播图的.vue文件
5. 在HomeSwiper.vue文件中导入swiper文件夹下的index.js（轮播图）
6. 编写模板，使用props从父组件Home.vue中获取banners数据，并以名为banner的数组形式保存
   1. 在组件<swiper-item>中动态绑定v-for创建图片列表
   2. 绑定<swiper-item>中的 key为图片 :key="item.image"
7. 在Home.vue中导入HomeSwiper.vue
   1. 使用组件<home-swiper>，并传入banners数据给子组件  :banner="banners"
8. 封装过程
   1. 在Home.vue中导入swiper文件夹中的index.js文件，并编写模板
   2. 当模板可以运行后，抽离轮播图模块，将其封装

首页-推荐信息模块
1. 在childComps文件夹下创建RecommendView.vue文件
2. 编写模板，通过props从父组件Home.vue文件中获取recommends数据，以名为recommend的数组形式保存
3. 在Home.vue和RecommendView.vue的标签中动态绑定数据

本周流行模块FeatrueView
1. 在childComps文件夹下创建FeatureView.vue文件
2. 创建标签模板
3. 在Home.vue中导入FeatureView.vue

TabControl模块
1. 该模块在本项目其它地方也会使用，所以在components文件夹下的content文件夹中创建tabControl文件夹，在其中
      创建TabControl.vue文件
2. 编写模板，使用props从Home.vue中获取数据
3. 根据props中的数据数量，用v-for动态创建相应的<div>标签
4. 为<div>动态绑定样式类，当类属性被激活时，给<div>的字体变色并添加红色下边框
5. 创建@click事件，让当前点击的<div>的index和currentIndex全等，决定动态绑定的样式类何时生效
6. 在Home.vue中导入TabControl.vue，并在标签中传递数据给TabControl.vue

商品信息模块
1. 在network文件夹下的home.js文件中写一个获取商品信息的请求函数getHomeGoods(type,page)，并导出
   1. type：由于商品种类不止一种，所以需要使用时传递一种商品种类来获取对应的商品信息
   2. page：商品分为多页，根据传进来的页码获取对应商品的对应页码的信息
2. 在Home.vue中导入network文件夹下的home.js文件中的getHomeGoods()函数
3. 在Home.vue中的data中创建商品对象goods，并将对应种类的商品以对象形式存储在goods中
   1. 其中每种商品都有两种对象，page，list[]
   1. page:0   :初始页码为0，每次获取该种类商品对象时，页码数+1
   2. list:[]  :每种商品的商品列表，每次获取该种商品的下一页商品时，将下一页与当前页两个数组整合成一个数组
3. 在生命周期函数created(){}中创建请求商品数据的函数，参数为当前种类的商品
   1. 将函数具体实现逻辑抽离出来，放在methods中
4. 将获取到的数据保存到data(){}中对应的商品对象里

往商品信息模块里添加数据
1. 在components文件夹下的content文件夹中创建goods文件夹，在其中创建GoodsList.vue和GoodsListItem.vue文件
2. GoodsList.vue存放商品框架，用v-for根据Home.vue中传递过来的商品清单good将商品模子全部展示出来
   1. 在Home.vue中导入GoodsList.vue，并传递商品清单，:good="goods"给GoodsList.vue
   2. 在GoodsList.vue中导入GoodsListItem.vue，将数据再传递给GoodsListItem.vue， :goodsItem="item"
   2. 设置商品模子的css格式为flex，并平分每行的空间，主动换行  flex-wrap:wrap;
3. GoodsListItem.vue存放商品的具体内容，编写模板，根据GoodsList.vue传递过来的数据将其一一展示
   1. 书写css样式

滚动组件
1. 安装better-scroll插件
2. 在components文件夹下的common文件夹中创建scroll文件夹，在其中创建Scroll.vue文件
3. 导入BScroll插件
4. 在Scroll.vue中以固定形式创建标签：
   1. <div class="warpper" ref="wrapper">
         <div class="content">
            <slot></slot>
         </div>
      </div>
   2. 该插件会将 <div class="warpper">中的第一个<div>作为可滚动的内容，所以将需要滚动的内容放在
         <div class="content">中
5. 在data中创建一个变量scroll
6. 在生命周期函数mounted中以固定形式通过实例化scroll变量创建函数
   1.  this.$nextTick(() => {
      if (this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
           click: true,                开启<div>可点击（使用better-scroll后，默认会阻止点击和原生滚动）
           observeDOM: true,           开启对Dom元素更新的检测（当有更新时，会刷新组件，再次执行）
           observeImage: true,         开启对图片加载的检测（当有图片加载时，会刷新组件，再次执行）
           probeType: this.probeType   接受data中的probetype值
        })}})
7. 使用props接受Home.vue中<scroll class="contet" :probe-type="3">传递过来的probetype值
   1. 不同的组件同时使用滚动组件时，可以由组件自身决定是否开启滚动监听，得到当前滚动的位置
8. 在Home.vue中导入Scroll.vue，并用<scroll>标签将需要滚动的内容包裹起来
9. 给<scroll>组件设置一个高度height作为滚动可视区域（必须要有高度，滚动组件才能运行）

回到顶部组件
1. 在components文件夹下的content文件夹中创建backtop文件夹，在其中创建BackTop.vue文件
2. 设置标签和样式
3. 在Scroll.vue中封装一个回到顶部的方法
4. 在Home.vue中导入BackTop.vue
5. 在滚动的组件<scroll>上添加ref属性，用于后续调用该组件内的属性方法等
6. 使用 @click.native="backClick"监听组件上的触发事件
   1. 创建方法backClick(){}通过this.$refs调用Scroll.vue中的回到顶部方法
7. 在<back-top>标签上绑定v-show，决定该组件的显示和隐藏
8. 在Scroll.vue中创建事件监听滚动的当前位置，并通过自定义事件将位置position发到Home.vue
9. 在Home.vue中的<scroll>标签上创建接收事件@scrollp="contentp"
10. 在事件contentp(){}中根据滚动的距离决定backtop组件是否显示

上拉加载事件
1. 在Scroll.vue使用props接受Home.vue中<scroll>标签上传递过来的参数 :pull-up-load="true"，开启上拉加载事件
2. 在Scroll.vue中创建一个监听上拉加载事件的方法，并封装一个终止当前上拉事件的方法，将事件传递给Home.vue
3. 在Home.vue中的<scroll>标签上使用@pullingUpp="loadMore"接收传递过来的事件
4. 在loadMore(){}中调用网络请求方法 getHomeData(){}完成获取取对应的商品类型列表并展示出来
5. 调用Scroll.vue中的终止当前上拉事件方法

TabControl组件的定位问题
1. 问题：使用better-scroll后，由于没有使用原生滚动，导致组件的position：fixed失效
2. 在HomeSwiper.vue中给轮播图的图片添加@load事件监听图片的加载，当图片加载完毕后发出自定义事件给Home.vue
   1. 在发送自定义事件this.$emit('swiperImgLoad')之前，创建一个节流阀，防止每张轮播图创建时都会发送一次事件
          限定只会发送一次事件
2. 在Home.vue中将<tab-control>组件复制一份放在滚动区域外，放在<nav-bar>下面
   1. 复制的组件的ref="tabControl1"
   2. 滚动区域内的组件ref="tabControl2"
3. 在 <home-swiper>标签上接收传递的方法  @swiperImgLoad="imageLoad"
4. 创建data属性 tabOffsetTop: 0,存储<tab-contrl>组件在轮播图片加载完毕后距离顶端的偏移量offsetTop
5. 创建data属性 isTabShow: false 存储<tab-contrl>的复制体是否显示，默认为隐藏
6. 在imageLoad(){}中将组件原件的当前顶部偏移量赋值给tabOffsetTop 
   1. this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
   2. $refs : ref位于普通标签上，this.$refs获取到的是DOM元素
      1. ref位于组件上，this.$refs获取到的是组件实例，可以通过this.$refs.方法()调用组件内的方法
   2. $el : 获取Vue实例的DOM元素
      1. 使用方法：this.$el.元素名 例：this.$el.offsetTop 获取当前实例的顶部偏移量offsetTop
7. 给<tab-contrl>的复制体添加v-show="isTabShow"，决定其显示或隐藏
8. 在methods(){}中的 contentp(position){}方法中，将<tab-contrl>的顶部偏移量和整个滚动区域的滚动距离作
      比较，决定this.isTabShow的值时ture还是false
9. 保持<tab-contrl>原件和复制体在点击后活跃的商品种类一致
   1. 组件被点击后，会在methods(){}中调用titleClick(index) {}方法，使当前被点击的商品种类变色，在此处
        让2个组件的currentIndex保持一致，都是已经点击的商品种类的index值

Home页离开时记录状态和位置
1. 在App.vue中用<keep-alive>将<router-view>包裹起来
2. 在Scroll.vue中封装一个获取当前滚动距离的方法getScrollY(){}，并将滚动距离返回
3. 在Home.vue中创建生命周期函数activated(){}和deactivated(){}
4. 在data中创建属性scrollY，存储当前页面滚动距离
5. 在deactivate(){}中获取Scroll.vue中的getScrollY(){}方法中的滚动距离，并赋值给scrollY
6. 在activated(){}中调用Scroll.vue中的返回顶部方法，但是将Y值改为-scrollY（因为页面往上滚）

分类页
1. 在views文件夹下创建category文件夹，在其中创建Category.vue文件
2. 在network文件夹中创建category.js文件
   1. 在category.js中请求商品信息 getCategorys() 
3. 在Category.vue中将请求的数据存储到data中的categorys: []里
4. 在category文件夹中创建childComps文件夹，存储子组件
5. 在childComps文件夹中创建TabMenu.vue，展示左侧tab栏
6. 在Category.vue导入TabMenu.vue，并将商品信息通过标签 <tab-menu>传递过去
   1. 在TabMenu.vue中根据信息创建html标签
   2. 在每个商品类标签上添加点击事件 
      1. 让被点击的标签样式发生改变
      2. 将点击事件传递给Category.vue，参数为当前点击的标签的index
7. 在Category.vue中接受点击事件selectItems()，根据点击的index，查找该商品类的详细分类信息标识符maitKey
   1. 在category.js中根据maitKey查找对应的详细分类数据，并存储到data中的 detailCategorys: []中
8. 在childComps文件夹中创建CategoryDetail.vue，并通过标签 <category-detail>接收详细的分类信息
9. 根据传递过来的数据detailCategory，展示数据
详情页
1. 在views文件夹下创建detail文件夹，在其中创建Detail.vue文件
   1. 将页面背景改为白色，添加position，修改z-index，使页面将底部NavBar盖住（z-index想要生效必须有定位）
2. 在GoodsListItem.vue中的最外层标签上添加点击事件
   1. 该事件通过parmas方式将商品id作为字符串传递给路由
3. 在router文件夹下的index.js中为Detail.vue添加 动态路由 拼接字符串由GoodsListItem.vue传递过来
4. 在Detail.vue中添加一个name="detail"属性
5. 在App.vue中的<keep-alive>上添加 exclude="detail"，让Detail.vue不会被缓存
5. 根据当前点击商品的路由id获取商品id，并赋值给iid
6. 根据商品id发送网络请求，获取当前点击的商品详细信息
   1. 在network文件夹下创建detail.js文件
   2. 在detail.js发送网络请求，参数为Detail.vue传递过来的商品id
   3. 根据网络请求获取到的数据，拿出需要轮播的图片，存储到data中的topImg[]数组中
7. 在network文件夹下的detail.js文件中封装一个类Goods
   1. 在Detail.vue中网络请求得到商品信息时，将其打印出来
   2. 从打印出的信息中找到所需要的数据，将数据整合到Goods类的构造函数中
      1. 该接口中数据比较分散，不方便一一获取，特此整合成一个类
8. 在Detail.vue中获取到商品信息时，实例化封装的类Goods，将数据存储到data中的goods对象中
   1. 至此，所有数据都准备好了，接下来需要往组件中传递数据 
   2. 在Detail.vue中导入Scroll.vue，开启滚动效果
9. 在views文件夹下的detail文件夹中创建childComps文件夹，存储Detail.vue中的子组件

10. 在childComps文件夹中创建DetailNavBar.vue文件，存储顶端导航栏
    1. 在DetailNavBar.vue中导入公共导航栏组件NavBar.vue
    2. 替换左侧插槽为返回按钮，替换中间插槽为title
    3. 给左侧插槽添加点击事件，事件为返回上一个路由对象，此处也就是返回Home页
    4. 根据点击的title让其变色

11. 在childComps文件夹中创建DetailSwiper.vue，存储轮播图
    1. 在DetailSwiper.vue中导入轮播图组件
    2. 根据Detail.vue中<detail-swiper>标签中传递过来的图片，填充轮播图组件

12. 在childComps文件夹中创建DetailBaseInfo.vue，存储商品的基本详细信息
    1. 在DetailBaseInfo.vue中根据需求创建html标签
    2. 在最外层标签上对传递进来的商品详细信息good作判断，如果good中有数据，则显示后续标签，无数据则不显示
    3. 此处用到了v-for的特殊用法，根据数字遍历数组的数据  例：v-for="index in good.services.length"

13. 在childComps文件夹中创建DetailShopInfo.vue，存储店铺的基本详细信息
    1. 在network文件夹下的detail.js文件中封装一个类Shop，存储店铺信息
    2. 在Detail.vue中实例化Shop类，并将数据存储到data中的对象shops中
    3. 在Detail.vue中导入DetailShopInfo.vue，并在标签<detail-shop-info>上将店铺信息传递过去
    4. 在DetailShopInfo.vue根据信息建立Html标签，将数据填充上去
    5. 对于数据中的销量，由于该数据比较庞大，使用过滤器处理一下

14. 在childComps文件夹中创建DetailGoodsDesc.vue，存储商品介绍信息
    1. 在Detail.vue中获取到商品的描述，并将数据传递给DetailGoodsDesc.vue
    2. 接受传递过来的商品介绍，并创建html标签将其展示出来

15. 在childComps文件夹中创建DetailParamInfo.vue,存储商品参数
    1. 在network文件夹下的detail.js文件中封装一个类GoodsParam，存储商品参数
    2. 在Detail.vue中实例化GoodsParam类，并将数据存储到data中的对象goodsParams中
    3. 通过<detail-param-info>标签将数据传递给DetailGoodsDesc.vue
    4. 在DetailGoodsDesc.vue中使用table形式将数据展示出来

16. 在childComps文件夹中创建DetailCommentInfo.vue,存储买家评论
    1. 在Detail.vue中获取第一条买家评论信息，并传递给DetailCommentInfo.vue
    2. 在DetailCommentInfo.vue中根据数据创建html标签
    3. 在common文件夹下的utils.js文件中封装一个格式化时间函数
    4. 在DetailCommentInfo.vue中导入该函数，并使用过滤器调用该函数处理时间戳
       1. 此处定义了2个时间格式化函数，根据需要选择调用
17. 在network文件夹下的detail.js文件中创建一个新的网络请求，请求 推荐商品信息
    1. 在Detail.vue中导入GoodsList.vue （推荐商品的展示格式与Home.vue中的商品信息展示效果相同，可以通用）
    2. 在Detail.vue中获取 推荐商品，并存储到 data中的recommends：[]中，查看GoodsList.vue中接受的数据
           格式为数组，所以此处用数组形式保存
    3. 在GoodsListItem.vue中修改代码，将html中动态绑定的图片作判断，使用计算属性，判断当前传入进来的图片
           的数据名是什么，根据传递的图片数据名绑定相应的图片（判断的顺序不能交换）
         （Home页传递的图片为：goodsItem.image），（Detail.vue中传递的图片名为：goodsItem.show.img）

18. 点击Detail.vue中的NavBar，滚动到对应的内容区域
    1. 在DetailNavBar.vue中的点击事件中，将每个按钮的点击事件和对应按钮的index传递出去
    2. 在Detail.vue中的data中创建 titleY: []存储对应按钮的内容位置offsetTop
    3. 在Detail.vue中的data中接收DetailNavBar.vue传递过来的事件tabClick(index)
    4. 在tabClick(index){}中获取标题对应内容的offsetTop，并用push方式添加到数组titleY[]中
    5. 根据点击的按钮的offsetTop值，调用Scroll.vue中的滚动页面函数back()，让页面滚动到对应位置

19. 根据滚动的位置，修改对应内容标题的颜色
    1. 将给titleY[]赋值的操作移动到滚动位置函数contentp()中
    2. 给titleY[]添加一个数据Number.MAX_VALUE，为数字最大值，用于防止后续判断中的数组下标越界
    3. 通过Scroll.vue中传递出来的滚动位置函数，循环遍历titleY[]的索引，根据判断得到当前滚动内容所对应的索引
    4. 通过this.$refs将当前内容对应的索引值赋予DetailNavBar.vue中的currentIndex，从而修改标题颜色

20. 配置Detail.vue底部的工具栏
    1. 在在childComps文件夹中创建DetailBottomBar.vue
    2. 在DetailBottomBar.vue中创建html标签，并设置css样式

购物车模块的设计
1. 使用VUEX存储购物车内的商品信息
   1. 在DetailBottomBar.vue中，给 添加购物车 按钮添加点击事件，并将事件发送给Detail.vue
      1.  因为商品信息需要在Detail.vue中才能拿到所以需要发出事件   
   2. 在Detail.vue中接收该事件addCarts(){}
   3. 在addCarts(){}中创建一个对象，将所需要的信息存储在对象中
      1. 有些数据不需要，所以在此先做一个数据筛选（商品id是必须要有的）
   4. 在store文件夹下创建mutations-type.js文件，用于存储类型常量
   5. 在mutations-type.js为addCart()方法建立类型常量ADDCART
   6. 在Detail.vue和store文件夹中的index.js里分别导入该类型常量
   7. 在Detail.vue中使用this.$store.commit()的方式将ADDCART方法和对象product发送给vuex
      1. 修改vuex中的共享属性必须要通过发送mutations事件来修改
   8. 在store文件夹下的index.js文件中的单一状态树state中建立一个存放商品的数组cartList[]
      1. 数组中的每个商品元素都是一个product对象  例：cartList:['product1','product2'...]
      2. 每个product对象中有存储着该商品的信息 例：product1:{id：24 ,title:'连衣裙'...}
   9. 再建立一个Number类型对象 sumCount，存储购物车内所有商品数量
      
2. 在mutations中使用传递过来的方法ADDCART()
3. 每次调用ADDCART()方法时，都会先使用find()查找cartList[]数组中是否有和当前调用该方法的商品相同
      的商品，通过唯一标识id来判断
   1. 如果是第一次添加该商品，则为该商品创建一个count，初始值为1，并将该商品添加到数组cartList[]中
   2. 如果不是第一次添加，cartList[]数组中原来已有该商品，则让其count+=1，不给数组添加新元素了

4. 重构vuex代码
   1. 为了遵循mutations中一个方法只做一种操作的规则，在Detail.vue中将原本使用this.$store.commit()发送
        事件的方式改为this.$store.dispatch(ADDCART),将ADDCART()事件发送给actions
      1. 并再次使用this.$store.commit(ALLCOUNT)发送ALLCOUNT()给mutations
   2. 在store文件夹下创建mutations.js和actions.js文件
   3. 在actions.js中，使用方法ADDCART()，前面代码基本不变，在判断商品是否已经存在时，
      1. 如果商品不存在，则先为该商品对象中添加新属性count，并设置初始值为1，
         1. 再发送事件 context.commit(ADDPRODUCT, payload)，将添加新商品ADDPRODUCT()方法和Detail.vue中
            传递过来的新product对象发送给mutations
      2. 如果商品已经存在，则将已有的对象products发送给mutations，调用ADDCOUNT()方法，使products.count+1
   4. 在mutations.js中，根据actions.js发送过来的方法，分别实现count++和push(新商品对象)的操作
      1. 并根据Detail.vue发送过来的ADDCOUNT()方法，让购物车内所有商品数量+1
   5. 在store文件夹下的index.js中，导入mutations.js和actions.js

购物车模块
1. 在Cart.vue中导入导航栏NavBar.vue
2. 在store文件夹下创建getters.js文件
   1. 在getters.js中创建2个方法
      1. allCount():获取购物车内的商品总数量
      2. cartList():获取购物车内所有商品对象
3. 在Cart.vue中替换掉NavBar.vue中间位置的插槽，使用mapGetters辅助函数展示添加到购物车的商品总数量 allCount
4. 在views文件夹下的cart文件夹中创建 CartList.vue文件 和 CartListItem.vue文件
   1. 在CartList.vue中使用mapGetters辅助函数获取购物车内所有商品对象 cartList
   2. 在CartList.vue导入CartListItem.vue，并使用v-for的方式将所有商品对象cartList展示
      1. 在CartList.vue中导入滚动组件Scroll.vue，使用<scroll>将<cart-list-item>包裹
      2. 在<cart-list-item>上使用:product="item"将商品对象发送给CartListItem.vue
5. 在CartListItem.vue中创建html标签，展示从CartList.vue中传递过来的商品product
6. 在views文件夹下的cart文件夹中创建 CartCheckedButton.vue文件,用于设置商品选择状态
7. 在mutations中的添加新商品方法 [ADDPRODUCT]()中添加一个checked=true属性，用于存储购物车内商品选中状态
7. 在CartListItem.vue中导入CartCheckedButton.vue
   1. 在<cart-check-button>标签上将商品选中状态 :isChecked="product.checked"传递给CartCheckedButton.vue
   2. 在CartCheckedButton.vue中根据商品选中状态 isChecked 改变css样式
8. 在CartListItem.vue中给<cart-check-button>标签添加组件事件监听 @click.native="btnClick"
   1. 在btnClick()中切换product.checked的状态

9. 底部结账组件
   1. 在views文件夹下的cart文件夹中创建 CartBottomBar.vue文件
   2. 在 CartBottomBar.vue中导入 CartCheckedButton.vue，使用选中状态组件
   3. 设置css样式
   4. 在CartCheckedButton.vue中设置计算属性
      1. 选中商品总价格： totalPrice
         1. 使用filter筛选并返回所有选中的商品对象
      2. 选中的商品数量： totalCount
         1. 使用reduce计算并返回商品总价格和选中的商品数量
      3. 全选按钮的状态： isSelectAll
         1. 将计算属性 isSelectAll传递给CartButton.vue来控制全选按钮的状态
         2. 使用every()查找是否存在未选中的商品，并将Boolean类型的返回值传递给CartButton.vue
            1. 如果购物车内没有商品时，单独作判断，返回false
   5. 全选按钮的点击
      1. 给全选按钮组件 <cart-check-button>添加 @click.native="btnClick"
      2. 在btnClick()中，判断
         1. 如果isSelectAll为true，说明所有商品都被选中，则让所有商品的checked为false
         2. 如果isSelectAll为false，说明存在未被选中商品，则让所有商品checked为true

封装一个toast插件
1. 在components文件夹下的common文件夹中创建toast文件夹
   1. 在toast文件夹中创建toast.js文件和Toast.vue文件
2. 在main.js中导入并安装toast插件
3. 在toast.js中创建install函数，在函数中将Toast.vue构造成一个插件
4. 在Toast.vue中设置组件的样式和方法
5. 在需要的地方使用 this.$toast.show("信息",展示时间number) 