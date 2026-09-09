# 个人作品集站点

这是一个无需构建依赖的静态站点。

## 本地预览

```sh
cd portfolio-workspace/site
python3 -m http.server 8080
```

## 发布

1. 创建公开仓库，名称为 `bjfuzzj.github.io`。
2. 将本 `site/` 目录的内容直接复制到新仓库根目录：`index.html`、`styles.css`、`script.js`、`robots.txt`、`README.md`。
3. 提交到 `main` 分支。
4. 在 GitHub Pages 中选择 `Deploy from a branch` → `main` → `/(root)`。

## 作品区与公开范围

作品区为纯文字案例展示，不包含项目截图、图片或其他媒体素材。

公开案例只保留以下三个已确认公开的首页链接：

- `https://reelfastai.com/` → 爆单片场
- `https://trade.baihejie.cn/` → 谷迹
- `https://kefu.baihejie.cn/` → 九树智客

路径规划和 VR 项目属于非公开案例，不暴露源代码路径、内部截图、合同或凭据。其他私有项目也遵守同样边界，不在公开站点展示源路径、截图、合同或凭据。
