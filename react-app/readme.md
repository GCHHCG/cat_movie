1. 目录作用
  - assets 静态资源文件
    - 自定义字体
  - style
    放各种样式
- antd  阿里的ui 框架  ant

  1. Spin 方便的去做loading ... 效果
     spinning = loading 状态   tips 文字提示
     加载的内容包在里面
  2. Tabs + TabPane key + activeKey + onChange 
   Tabs 容器式组件
   TabPane 子组件
   const { Tabs } = antd
   const {TabPane } = Tabs

  3. List + List.Item
     dataSource 配置
     renderItem 每一个的JSX key ?
       classnames 
  4. Icon type 
  5. Input 
     数据绑定 onChange
     onPressEnter
  6. 数据流转 一定要和状态一直一致 