# FilterBar Sticky Mini 模式测试指南

## 🔧 已实现的功能

### 1. 滚动检测
- 使用 `window.scrollY` 检测页面滚动距离
- 当滚动超过 50px 时，自动切换为紧凑模式
- 使用 `requestAnimationFrame` 优化性能

### 2. Sticky 定位
- FilterBar 使用 `sticky` 定位
- 正常模式：`top-0`（紧贴页面顶部）
- 紧凑模式：`top-[100px] md:top-[120px]`（停留在 Header 下方）

### 3. 视觉变化
- **正常模式**：
  - padding: `py-6 md:py-8`
  - 按钮: `px-6 py-3 text-sm`
  - 显示标签文字
  - 显示所有筛选器

- **紧凑模式**：
  - padding: `py-2 md:py-3`
  - 按钮: `px-4 py-1.5 text-xs`
  - 隐藏标签文字
  - 移动端隐藏评分/价格筛选器
  - 右上角显示绿色 "Mini Mode" 标签（调试用）

## 🧪 测试步骤

### 步骤 1: 启动开发服务器
```bash
npm run dev
```

### 步骤 2: 打开浏览器
访问 `http://localhost:3000`

### 步骤 3: 观察初始状态
- FilterBar 应该显示在 Header 下方
- 应该是**正常模式**（大按钮、有标签）
- **不应该**看到绿色的 "Mini Mode" 标签

### 步骤 4: 向下滚动
- 慢慢向下滚动页面
- 当滚动超过 50px 时：
  - ✅ FilterBar 应该变小（紧凑模式）
  - ✅ 按钮变小
  - ✅ 标签文字消失
  - ✅ 右上角出现绿色 "Mini Mode" 标签
  - ✅ FilterBar 固定在 Header 下方

### 步骤 5: 继续滚动
- 继续向下滚动
- FilterBar 应该**保持固定**在 Header 下方
- 保持紧凑模式

### 步骤 6: 向上滚动
- 向上滚动回到页面顶部
- 当滚动距离小于 50px 时：
  - ✅ FilterBar 恢复正常模式
  - ✅ 按钮变大
  - ✅ 标签文字出现
  - ✅ 绿色 "Mini Mode" 标签消失

## 🐛 可能的问题和解决方案

### 问题 1: FilterBar 没有变化
**可能原因**：
- 页面内容不够长，无法滚动
- JavaScript 没有正确加载

**解决方案**：
1. 检查浏览器控制台是否有错误
2. 确保页面有足够的内容可以滚动
3. 刷新页面（Cmd/Ctrl + R）

### 问题 2: FilterBar 被 Header 遮挡
**可能原因**：
- Header 的高度与设置的 `top` 值不匹配

**解决方案**：
调整 FilterBar 的 `top` 值：
```tsx
// 在 FilterBar.tsx 第 77 行
className={`sticky ... ${
    isCompact ? 'py-2 md:py-3 z-40 top-[XXXpx]' : '...'
}`}
```
将 `XXXpx` 调整为 Header 的实际高度

### 问题 3: 切换不流畅
**可能原因**：
- 浏览器性能问题
- 过渡动画冲突

**解决方案**：
已使用 `requestAnimationFrame` 优化，应该很流畅

### 问题 4: 滚动触发点不合适
**可能原因**：
- 50px 的阈值可能太小或太大

**解决方案**：
调整滚动阈值：
```tsx
// 在 FilterBar.tsx 第 59 行
setIsCompact(scrollY > 50); // 改为其他值，如 100
```

## 📱 响应式测试

### 移动端（< 768px）
1. 打开浏览器开发者工具
2. 切换到移动设备模拟器
3. 测试滚动行为
4. 确认紧凑模式下只显示分类按钮

### 平板端（768px - 1024px）
1. 调整浏览器窗口宽度
2. 测试滚动行为
3. 确认所有筛选器都显示

### 桌面端（> 1024px）
1. 使用全屏浏览器
2. 测试滚动行为
3. 确认所有功能正常

## 🎨 视觉检查清单

- [ ] 正常模式下，FilterBar 有足够的 padding
- [ ] 紧凑模式下，FilterBar 明显变小
- [ ] 按钮尺寸在两种模式下有明显区别
- [ ] 标签文字在紧凑模式下消失
- [ ] 过渡动画流畅（300ms）
- [ ] 绿色 "Mini Mode" 标签在紧凑模式下可见
- [ ] FilterBar 在滚动时保持固定
- [ ] FilterBar 不会遮挡内容

## 🔍 调试技巧

### 1. 查看滚动距离
在浏览器控制台输入：
```javascript
window.addEventListener('scroll', () => {
    console.log('Scroll Y:', window.scrollY);
});
```

### 2. 检查 isCompact 状态
在 FilterBar.tsx 的 handleScroll 函数中添加：
```typescript
console.log('Scroll Y:', scrollY, 'isCompact:', scrollY > 50);
```

### 3. 检查元素位置
在浏览器控制台输入：
```javascript
document.querySelector('[class*="sticky"]').getBoundingClientRect();
```

## ✅ 成功标准

功能正常的标志：
1. ✅ 页面加载时显示正常模式
2. ✅ 滚动超过 50px 时切换为紧凑模式
3. ✅ 紧凑模式下 FilterBar 固定在 Header 下方
4. ✅ 向上滚动时恢复正常模式
5. ✅ 所有筛选功能在两种模式下都正常工作
6. ✅ 过渡动画流畅
7. ✅ 响应式设计在所有设备上正常

## 🚀 下一步

测试成功后，可以：
1. 删除绿色 "Mini Mode" 调试标签（第 80-85 行）
2. 根据实际需求调整滚动阈值
3. 根据 Header 实际高度调整 `top` 值
4. 添加更多自定义样式

## 📝 代码位置

- **FilterBar 组件**: `src/components/FilterBar.tsx`
- **滚动检测逻辑**: 第 50-71 行
- **Sticky 样式**: 第 76-78 行
- **调试标签**: 第 80-85 行（可删除）
- **紧凑模式样式**: 第 88-163 行

---

**测试愉快！** 🎉

如有问题，请检查：
1. 浏览器控制台是否有错误
2. 页面是否有足够的内容可以滚动
3. Header 的高度是否正确
4. z-index 是否设置正确

