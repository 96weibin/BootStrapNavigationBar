# bootStrap4

## 基本架构

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MO</title>
  <link rel="stylesheet" href="./dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./dist/css/index.css">
  <!-- 低于IE9的IE 加载下面两个js  分别时 支持Html5 支持媒体查询 -->
  <!--[if lt IE9]-->
    <script src="./dist/js/html5shiv.min.js"></script>
    <script src="./dist/js/respond.min.js"></script>
  <!--[endif]-->
</head>
<body>
  <header id="header">
     <div class="container-fluid">
        <div class="row">
            <div class="col-lg-4 left">left</div>
            <div class="col-lg-4 col-lg-offset-4 right">right</div>
          </div>
    </div>
  </header>
  <nav>
  <script src="./dist/js/jquery.min.js"></script>
  <script src="./dist/js/bootstrap.min.js"></script>
  <script src="./dist/js/index.js"></script>
</body>
</html>
```

## 容器

bootStrap4支持两种 container

容器 | 长度
-|-
container | 两边留余地
container-fluid | 视口长度

## 媒体查询范围以及container最大尺寸

类前缀 | 查询范围 | container最大宽度
-|-|-
.col | <576px | auto
.col-sm- | ≥576px | 540px
.col-md- | ≥768px | 720px
.col-lg- | ≥992px | 960px
.col-xl- | ≥1200px | 1140px

## 栅格

col的class | 说明
-|-
.col-ms-2 | 在12份中占几分
.col | 在12份中出去设置固定份数的其余部分，如果多个.col则平分剩余部分
.col-lg-offset-4 | 大屏位移4

栅格支持类似flex布局的 属性

row的class | 说明
-|-
.justify-content-start | 水平 贴左侧边框
.justify-content-center | 水平 居中
.justify-content-end | 水平 贴右侧边框
.justify-content-around | 水平 元素间距平均分 元素与边框间间距小一倍
.justify-content-between | 水平 贴两侧边框 其余间距平均分