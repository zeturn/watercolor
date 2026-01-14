#!/bin/bash
# 自动发布脚本
# 用法: ./release.sh [patch|minor|major]

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 版本类型
VERSION_TYPE=${1:-patch}

echo -e "${GREEN}🚀 开始发布流程...${NC}"
echo ""

# 检查工作区是否干净
if [[ -n $(git status -s) ]]; then
    echo -e "${RED}❌ 错误: Git 工作区不干净，请先提交或暂存更改${NC}"
    git status -s
    exit 1
fi

# 检查是否在 main 分支
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
    echo -e "${YELLOW}⚠️  警告: 当前不在 main 分支 (当前: $CURRENT_BRANCH)${NC}"
    read -p "是否继续? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 获取当前版本
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}📦 当前版本: ${CURRENT_VERSION}${NC}"

# 更新版本号
echo -e "${GREEN}📝 更新版本号 (${VERSION_TYPE})...${NC}"
npm version $VERSION_TYPE --no-git-tag-version

# 获取新版本
NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}✨ 新版本: ${NEW_VERSION}${NC}"

# 提示用户更新 CHANGELOG
echo ""
echo -e "${YELLOW}⚠️  请手动更新 CHANGELOG.md，添加版本 ${NEW_VERSION} 的更新内容${NC}"
echo -e "${YELLOW}   按 Enter 继续，或 Ctrl+C 取消${NC}"
read

# 提交更改
echo -e "${GREEN}💾 提交更改...${NC}"
git add package.json CHANGELOG.md
git commit -m "chore: release v${NEW_VERSION}"

# 创建标签
echo -e "${GREEN}🏷️  创建标签 v${NEW_VERSION}...${NC}"
git tag "v${NEW_VERSION}"

# 推送
echo ""
echo -e "${GREEN}准备推送到远程仓库...${NC}"
echo -e "  分支: ${CURRENT_BRANCH}"
echo -e "  标签: v${NEW_VERSION}"
echo ""
read -p "确认推送? (y/N) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${GREEN}📤 推送到远程...${NC}"
    git push origin $CURRENT_BRANCH
    git push origin "v${NEW_VERSION}"
    
    echo ""
    echo -e "${GREEN}✅ 发布成功！${NC}"
    echo ""
    echo "🔗 查看 GitHub Actions:"
    echo "   https://github.com/zeturn/watercolor/actions"
    echo ""
    echo "📦 发布后可在以下位置查看:"
    echo "   npm: https://www.npmjs.com/package/watercolor-ui"
    echo "   GitHub Packages: https://github.com/zeturn/watercolor/packages"
    echo "   GitHub Release: https://github.com/zeturn/watercolor/releases/tag/v${NEW_VERSION}"
else
    echo -e "${YELLOW}❌ 已取消推送${NC}"
    echo -e "${YELLOW}如需推送，手动执行:${NC}"
    echo "   git push origin $CURRENT_BRANCH"
    echo "   git push origin v${NEW_VERSION}"
fi
