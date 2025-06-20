// Material-UI 兼容层示例
import ContainerVue from '../src/components/Container/Container.vue'
import PaperVue from '../src/components/Paper/Paper.vue'
import TypographyVue from '../src/components/Typography/Typography.vue'
import ButtonVue from '../src/components/Button/Button.vue'
import BoxVue from '../src/components/Box/Box.vue'

export default {
  title: 'Migration/Material-UI Compatibility',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '展示 Material-UI 兼容层的示例，演示如何无缝迁移到 Watercolor 组件库'
      }
    }
  }
}

// 简单的卡片示例
export const SimpleCard = {
  render: () => ({
    components: {
      ContainerVue,
      PaperVue,
      TypographyVue,
      ButtonVue,
      BoxVue
    },
    template: `
      <ContainerVue maxWidth="sm">
        <PaperVue :elevation="3" style="padding: 2rem; margin: 2rem 0;">
          <TypographyVue variant="h5" :gutterBottom="true">
            Material-UI 兼容示例
          </TypographyVue>
          
          <TypographyVue variant="body1" style="margin-bottom: 1.5rem;">
            这个卡片使用 Watercolor 组件库的兼容层构建，API 与 Material-UI 完全一致。
          </TypographyVue>
          
          <BoxVue display="flex" style="gap: 0.5rem;">
            <ButtonVue variant="primary">
              主要操作
            </ButtonVue>
            <ButtonVue variant="secondary">
              次要操作
            </ButtonVue>
          </BoxVue>
        </PaperVue>
      </ContainerVue>
    `
  })
}

// 响应式布局示例
export const ResponsiveLayout = {
  render: () => ({
    components: {
      ContainerVue,
      PaperVue,
      TypographyVue,
      BoxVue
    },
    template: `
      <ContainerVue maxWidth="lg">
        <BoxVue style="padding: 2rem;">
          <TypographyVue variant="h4" :gutterBottom="true" align="center">
            响应式布局示例
          </TypographyVue>
          
          <BoxVue display="flex" style="gap: 1rem; flex-wrap: wrap; margin-top: 2rem;">
            <PaperVue 
              v-for="i in 3" 
              :key="i"
              :elevation="2" 
              style="flex: 1; min-width: 200px; padding: 1.5rem; text-align: center;"
            >
              <TypographyVue variant="h6" color="primary">
                卡片 {{ i }}
              </TypographyVue>
              <TypographyVue variant="body2" style="margin-top: 0.5rem;">
                这是第 {{ i }} 个卡片的内容示例
              </TypographyVue>
            </PaperVue>
          </BoxVue>
        </BoxVue>
      </ContainerVue>
    `
  })
}

// 迁移对比示例
export const MigrationComparison = {
  render: () => ({
    components: {
      ContainerVue,
      PaperVue,
      TypographyVue,
      BoxVue
    },
    template: `
      <ContainerVue maxWidth="md">
        <BoxVue style="padding: 2rem;">
          <TypographyVue variant="h4" :gutterBottom="true" align="center">
            迁移对比
          </TypographyVue>
          
          <BoxVue display="flex" style="gap: 2rem; margin-top: 2rem;">
            <!-- 之前 Material-UI -->
            <PaperVue :elevation="2" style="flex: 1; padding: 1.5rem;">
              <TypographyVue variant="h6" color="error" :gutterBottom="true">
                ❌ 之前 - Material-UI
              </TypographyVue>
              <BoxVue component="pre" style="background: #f5f5f5; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 12px;">
{{'import { Container, Paper, Typography } from "@mui/material"'}}
              </BoxVue>
            </PaperVue>
            
            <!-- 现在 Watercolor -->
            <PaperVue :elevation="2" style="flex: 1; padding: 1.5rem;">
              <TypographyVue variant="h6" color="success" :gutterBottom="true">
                ✅ 现在 - Watercolor
              </TypographyVue>
              <BoxVue component="pre" style="background: #f0f9ff; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 12px;">
{{'import { Container, Paper, Typography } from "watercolor-ui/mui-compat"'}}
              </BoxVue>
            </PaperVue>
          </BoxVue>
          
          <BoxVue style="margin-top: 2rem; text-align: center;">
            <TypographyVue variant="body1" color="success">
              🎉 只需要修改导入语句，其他代码完全不用改！
            </TypographyVue>
          </BoxVue>
        </BoxVue>
      </ContainerVue>
    `
  })
}

SimpleCard.storyName = '简单卡片示例'
ResponsiveLayout.storyName = '响应式布局'
MigrationComparison.storyName = '迁移对比' 