# React Hooks 从入门到放弃

> 本文默认读者对 React Hooks 已经有一定的了解。 因此不再赘述 Hooks API 的使用了, 还未了解的同学可以去官网阅读[React Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

1. 上手使用
2. 遇到问题
3. React Hooks 源码分析
4. 函数式组件的思想
5. 抽象封装 Hooks

这篇文章的目的是什么?

1. 了解 Hooks 原理, 减少使用 Hooks 开发时的 BUG
2. 如何抽象合适的 Hooks
3. 如何书写具有可读性的 React 函数组件

## React Hooks 原理

> 如果理解 React Hooks 使用的是快照值?

```jsx
import React, { useState, useEffect, useCallback } from "react";

function Demo(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return (
    <div>
      <span>Current: {count}</span>
    </div>
  );
}
```

TODO: 使用 GIF 图去展示上面这段代码的执行过程
描述: 使用中断执行的方式, 描述 Hooks 挂载的情况

从上图中, 我们能了解到哪些知识?

1. hooks 队列挂载
2. 数据存储

解决了哪些疑惑?

1. Hooks 中的数据为何是快照值
2. 为什么不能在条件判断中写入快照值

## Hooks 的合理使用

简单粗暴的改写 Class 组件, 代码对比

```
// TODO: 冗长的Function代码
```

按照官网提供的 Hooks API, 我们将一个 Class 组件改造成了 Function + Hooks 组件

看上去这个函数很混乱, 可读性也很差, 那使用 React Hooks 真的优雅吗？

那看下面这份代码

```
// TODO: 重构Function的代码
```

函数式思维的一种转换: 输入与输出

每一次渲染都是`来源 -> 数据变更 -> 视图 -> 执行SideEffect`的过程, 这是一条主流, 那可以进行如下重组:

多个(数据, 来源, 副作用) => 视图 === 来源 ->数据变更 -> 视图 -> 执行 SideEffect
