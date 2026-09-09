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

## 作品封面

公开封面只来自以下三个已确认公开的首页：

- `https://reelfastai.com/` → 爆单片场
- `https://trade.baihejie.cn/` → 谷迹
- `https://kefu.baihejie.cn/` → 九树智客

封面文件位于 `site/assets/cases/`。路径规划和 VR 项目的内部截图不得复制到公开站点；如果图片含登录态、客户资料、聊天记录、精确地址、经营数据或密钥，应立即移除。
