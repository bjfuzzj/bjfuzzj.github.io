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
