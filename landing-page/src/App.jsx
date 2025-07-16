import React, { useState } from 'react'
import {
  ThemeProvider,
  AppBarReact,
  ButtonReact,
  TypographyReact,
  ContainerReact,
  GridReact,
  CardReact,
  CardContentVue,
  BadgeReact,
  AlertReact,
  IconReact,
  ChipReact,
  ProgressReact,
  SwitchReact,
  SliderReact,
  RatingReact,
  SnackbarReact
} from 'watercolor-ui'
import './App.css'

function App() {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)
  const [ratingValue, setRatingValue] = useState(4)
  const [switchValue, setSwitchValue] = useState(false)

  const handleShowSnackbar = () => {
    setShowSnackbar(true)
  }

  const handleCloseSnackbar = () => {
    setShowSnackbar(false)
  }

  return (
    <ThemeProvider>
      <div className="app">
        {/* 导航栏 */}
        <AppBarReact 
          position="fixed" 
          color="primary"
          style={{ zIndex: 1000 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '16px'
              }}>
                W
              </div>
              <TypographyReact variant="h6" style={{ color: 'white', fontWeight: 600 }}>
                WatercolorUI
              </TypographyReact>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <ButtonReact 
                variant="secondary" 
                size="sm"
                onClick={() => window.open('https://github.com/zeturn/watercolor', '_blank')}
              >
                GitHub
              </ButtonReact>
              <ButtonReact 
                variant="filled" 
                size="sm"
                onClick={() => window.open('/react', '_blank')}
              >
                React Storybook
              </ButtonReact>
              <ButtonReact 
                variant="filled" 
                size="sm"
                onClick={() => window.open('/vue', '_blank')}
              >
                Vue Storybook
              </ButtonReact>
            </div>
          </div>
        </AppBarReact>

        {/* 主要内容 */}
        <div style={{ paddingTop: '80px' }}>
          {/* Hero Section */}
          <section className="hero-section">
            <ContainerReact maxWidth="lg">
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <BadgeReact variant="primary" size="lg" style={{ marginBottom: '24px' }}>
                  🎨 现代化跨框架组件库
                </BadgeReact>
                <TypographyReact variant="h1" style={{ 
                  fontSize: '3.5rem', 
                  fontWeight: 700, 
                  marginBottom: '24px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  WatercolorUI
                </TypographyReact>
                <TypographyReact variant="h4" style={{ 
                  color: '#666', 
                  marginBottom: '40px',
                  fontWeight: 400
                }}>
                  优雅的设计，丰富的功能，支持 React 和 Vue
                </TypographyReact>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <ButtonReact 
                    variant="primary" 
                    size="lg"
                    onClick={() => window.open('/react', '_blank')}
                  >
                    开始使用 React
                  </ButtonReact>
                  <ButtonReact 
                    variant="secondary" 
                    size="lg"
                    onClick={() => window.open('/vue', '_blank')}
                  >
                    开始使用 Vue
                  </ButtonReact>
                  <ButtonReact 
                    variant="outlined" 
                    size="lg"
                    onClick={() => window.open('https://github.com/zeturn/watercolor', '_blank')}
                  >
                    查看源码
                  </ButtonReact>
                </div>
              </div>
            </ContainerReact>
          </section>

          {/* 特性展示 */}
          <section className="features-section">
            <ContainerReact maxWidth="lg">
              <TypographyReact variant="h2" style={{ 
                textAlign: 'center', 
                marginBottom: '60px',
                fontSize: '2.5rem',
                fontWeight: 600
              }}>
                核心特性
              </TypographyReact>
              <GridReact container spacing={4}>
                <GridReact item xs={12} md={4}>
                  <CardReact variant="elevated" style={{ height: '100%' }}>
                    <CardContentVue>
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <IconReact name="palette" size={48} style={{ color: '#667eea', marginBottom: '16px' }} />
                        <TypographyReact variant="h5" style={{ marginBottom: '12px', fontWeight: 600 }}>
                          跨框架支持
                        </TypographyReact>
                        <TypographyReact variant="body1" style={{ color: '#666' }}>
                          同时支持 React 和 Vue 框架，一套设计语言，多框架实现
                        </TypographyReact>
                      </div>
                    </CardContentVue>
                  </CardReact>
                </GridReact>
                <GridReact item xs={12} md={4}>
                  <CardReact variant="elevated" style={{ height: '100%' }}>
                    <CardContentVue>
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <IconReact name="brush" size={48} style={{ color: '#764ba2', marginBottom: '16px' }} />
                        <TypographyReact variant="h5" style={{ marginBottom: '12px', fontWeight: 600 }}>
                          现代化设计
                        </TypographyReact>
                        <TypographyReact variant="body1" style={{ color: '#666' }}>
                          采用现代化的设计理念，简洁优雅，用户体验至上
                        </TypographyReact>
                      </div>
                    </CardContentVue>
                  </CardReact>
                </GridReact>
                <GridReact item xs={12} md={4}>
                  <CardReact variant="elevated" style={{ height: '100%' }}>
                    <CardContentVue>
                      <div style={{ textAlign: 'center', padding: '20px' }}>
                        <IconReact name="code" size={48} style={{ color: '#f093fb', marginBottom: '16px' }} />
                        <TypographyReact variant="h5" style={{ marginBottom: '12px', fontWeight: 600 }}>
                          TypeScript 支持
                        </TypographyReact>
                        <TypographyReact variant="body1" style={{ color: '#666' }}>
                          完整的 TypeScript 类型定义，开发体验更佳
                        </TypographyReact>
                      </div>
                    </CardContentVue>
                  </CardReact>
                </GridReact>
              </GridReact>
            </ContainerReact>
          </section>

          {/* 组件展示 */}
          <section className="components-section">
            <ContainerReact maxWidth="lg">
              <TypographyReact variant="h2" style={{ 
                textAlign: 'center', 
                marginBottom: '60px',
                fontSize: '2.5rem',
                fontWeight: 600
              }}>
                组件展示
              </TypographyReact>
              
              {/* 基础组件 */}
              <div style={{ marginBottom: '60px' }}>
                <TypographyReact variant="h3" style={{ marginBottom: '32px', fontWeight: 600 }}>
                  基础组件
                </TypographyReact>
                <GridReact container spacing={3}>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          按钮组件
                        </TypographyReact>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          <ButtonReact variant="primary">主要按钮</ButtonReact>
                          <ButtonReact variant="secondary">次要按钮</ButtonReact>
                          <ButtonReact variant="filled">填充按钮</ButtonReact>
                          <ButtonReact variant="outlined">轮廓按钮</ButtonReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          徽章组件
                        </TypographyReact>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          <BadgeReact variant="primary">主要</BadgeReact>
                          <BadgeReact variant="success">成功</BadgeReact>
                          <BadgeReact variant="warning">警告</BadgeReact>
                          <BadgeReact variant="error">错误</BadgeReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          标签组件
                        </TypographyReact>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          <ChipReact label="默认标签" />
                          <ChipReact label="可删除" onDelete={() => {}} />
                          <ChipReact label="点击标签" onClick={() => {}} />
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          开关组件
                        </TypographyReact>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                          <SwitchReact 
                            checked={switchValue}
                            onChange={(e) => setSwitchValue(e.target.checked)}
                          />
                          <TypographyReact variant="body2">
                            {switchValue ? '已开启' : '已关闭'}
                          </TypographyReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                </GridReact>
              </div>

              {/* 数据展示组件 */}
              <div style={{ marginBottom: '60px' }}>
                <TypographyReact variant="h3" style={{ marginBottom: '32px', fontWeight: 600 }}>
                  数据展示
                </TypographyReact>
                <GridReact container spacing={3}>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          进度条
                        </TypographyReact>
                        <div style={{ marginBottom: '16px' }}>
                          <TypographyReact variant="body2" style={{ marginBottom: '8px' }}>
                            线性进度条
                          </TypographyReact>
                          <ProgressReact value={75} color="primary" />
                        </div>
                        <div>
                          <TypographyReact variant="body2" style={{ marginBottom: '8px' }}>
                            圆形进度条
                          </TypographyReact>
                          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '60px', height: '60px' }}>
                              <ProgressReact 
                                variant="circular" 
                                value={75} 
                                color="primary"
                                size="lg"
                              />
                            </div>
                            <TypographyReact variant="body2">75%</TypographyReact>
                          </div>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          评分组件
                        </TypographyReact>
                        <div style={{ marginBottom: '16px' }}>
                          <RatingReact 
                            value={ratingValue}
                            onChange={(value) => setRatingValue(value)}
                            size="lg"
                          />
                        </div>
                        <TypographyReact variant="body2" style={{ color: '#666' }}>
                          当前评分: {ratingValue} 星
                        </TypographyReact>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          滑块组件
                        </TypographyReact>
                        <div style={{ marginBottom: '16px' }}>
                          <SliderReact 
                            value={sliderValue}
                            onChange={(value) => setSliderValue(value)}
                            min={0}
                            max={100}
                          />
                        </div>
                        <TypographyReact variant="body2" style={{ color: '#666' }}>
                          当前值: {sliderValue}
                        </TypographyReact>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          提示组件
                        </TypographyReact>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          <ButtonReact 
                            variant="primary" 
                            size="sm"
                            onClick={handleShowSnackbar}
                          >
                            显示提示
                          </ButtonReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                </GridReact>
              </div>

              {/* 反馈组件 */}
              <div style={{ marginBottom: '60px' }}>
                <TypographyReact variant="h3" style={{ marginBottom: '32px', fontWeight: 600 }}>
                  反馈组件
                </TypographyReact>
                <GridReact container spacing={3}>
                  <GridReact item xs={12} md={6}>
                    <AlertReact 
                      severity="success" 
                      variant="filled"
                      style={{ marginBottom: '16px' }}
                    >
                      这是一个成功提示信息
                    </AlertReact>
                    <AlertReact 
                      severity="info" 
                      variant="filled"
                      style={{ marginBottom: '16px' }}
                    >
                      这是一个信息提示
                    </AlertReact>
                    <AlertReact 
                      severity="warning" 
                      variant="filled"
                      style={{ marginBottom: '16px' }}
                    >
                      这是一个警告提示
                    </AlertReact>
                    <AlertReact 
                      severity="error" 
                      variant="filled"
                    >
                      这是一个错误提示
                    </AlertReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated">
                      <CardContentVue>
                        <TypographyReact variant="h6" style={{ marginBottom: '16px' }}>
                          通知组件
                        </TypographyReact>
                        <TypographyReact variant="body2" style={{ color: '#666', marginBottom: '16px' }}>
                          点击上方按钮查看通知效果
                        </TypographyReact>
                        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
                          <TypographyReact variant="body2" style={{ color: '#666' }}>
                            通知组件会在页面底部显示临时消息，支持多种类型和自定义配置。
                          </TypographyReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                </GridReact>
              </div>
            </ContainerReact>
          </section>

          {/* 快速开始 */}
          <section className="quick-start-section">
            <ContainerReact maxWidth="lg">
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <TypographyReact variant="h2" style={{ 
                  marginBottom: '32px',
                  fontSize: '2.5rem',
                  fontWeight: 600
                }}>
                  快速开始
                </TypographyReact>
                <TypographyReact variant="h5" style={{ 
                  color: '#666', 
                  marginBottom: '40px',
                  fontWeight: 400
                }}>
                  选择你喜欢的框架，开始构建现代化的用户界面
                </TypographyReact>
                <GridReact container spacing={4} style={{ marginBottom: '40px' }}>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated" style={{ height: '100%' }}>
                      <CardContentVue>
                        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                          <IconReact name="react" size={64} style={{ color: '#61dafb', marginBottom: '24px' }} />
                          <TypographyReact variant="h4" style={{ marginBottom: '16px', fontWeight: 600 }}>
                            React 版本
                          </TypographyReact>
                          <TypographyReact variant="body1" style={{ color: '#666', marginBottom: '24px' }}>
                            专为 React 开发者设计的组件库，支持 Hooks 和函数式组件
                          </TypographyReact>
                          <ButtonReact 
                            variant="primary" 
                            size="lg"
                            onClick={() => window.open('/react', '_blank')}
                          >
                            查看 React 文档
                          </ButtonReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                  <GridReact item xs={12} md={6}>
                    <CardReact variant="elevated" style={{ height: '100%' }}>
                      <CardContentVue>
                        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                          <IconReact name="vue" size={64} style={{ color: '#42b883', marginBottom: '24px' }} />
                          <TypographyReact variant="h4" style={{ marginBottom: '16px', fontWeight: 600 }}>
                            Vue 版本
                          </TypographyReact>
                          <TypographyReact variant="body1" style={{ color: '#666', marginBottom: '24px' }}>
                            专为 Vue 3 开发者设计的组件库，支持 Composition API
                          </TypographyReact>
                          <ButtonReact 
                            variant="primary" 
                            size="lg"
                            onClick={() => window.open('/vue', '_blank')}
                          >
                            查看 Vue 文档
                          </ButtonReact>
                        </div>
                      </CardContentVue>
                    </CardReact>
                  </GridReact>
                </GridReact>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <ButtonReact 
                    variant="outlined" 
                    size="lg"
                    onClick={() => window.open('https://github.com/zeturn/watercolor', '_blank')}
                  >
                    <IconReact name="github" style={{ marginRight: '8px' }} />
                    GitHub 仓库
                  </ButtonReact>
                  <ButtonReact 
                    variant="outlined" 
                    size="lg"
                    onClick={() => window.open('https://www.npmjs.com/package/watercolor-ui', '_blank')}
                  >
                    <IconReact name="package" style={{ marginRight: '8px' }} />
                    NPM 包
                  </ButtonReact>
                </div>
              </div>
            </ContainerReact>
          </section>

          {/* 页脚 */}
          <footer className="footer">
            <ContainerReact maxWidth="lg">
              <div style={{ 
                textAlign: 'center', 
                padding: '40px 0',
                borderTop: '1px solid #e0e0e0'
              }}>
                <TypographyReact variant="body2" style={{ color: '#666', marginBottom: '16px' }}>
                  © 2024 WatercolorUI. 由开源社区维护
                </TypographyReact>
                <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a 
                    href="https://github.com/zeturn/watercolor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#666', textDecoration: 'none' }}
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.npmjs.com/package/watercolor-ui" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#666', textDecoration: 'none' }}
                  >
                    NPM
                  </a>
                  <a 
                    href="/react" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#666', textDecoration: 'none' }}
                  >
                    React 文档
                  </a>
                  <a 
                    href="/vue" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: '#666', textDecoration: 'none' }}
                  >
                    Vue 文档
                  </a>
                </div>
              </div>
            </ContainerReact>
          </footer>
        </div>

        {/* 通知组件 */}
        <SnackbarReact
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="这是一个通知消息"
          severity="success"
        />
      </div>
    </ThemeProvider>
  )
}

export default App 