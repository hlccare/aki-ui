# 开始使用

**注：目前暂未发布至NPM**

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码
```
import {Button, Tabs, Switch, Dialog} from "aki-ui"
```
就可以使用组件了。

# Vue 单文件组件

代码示例：
```vue
<template>
  <div><Button>按钮</Button></div>
</template>
<script>
  import {Button, Tabs, Switch, Dialog, Dropdown, Popover, Collapse} from "aki-ui"
  export default {
    components: {Button}
  }
</script>
```