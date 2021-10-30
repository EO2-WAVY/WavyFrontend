<br/><br/><br/>

<div align=center>

<h1> 
<img width="200px" src="https://user-images.githubusercontent.com/26461307/139542520-eb45acd7-48fa-4189-a39e-f10d058c70c8.png"/> <br/>
Wavy - Client </h1>

<p>인공지능 기반의 맞춤형 K-POP 댄스 학습 서비스</p>
</div>

<div align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#features">Features</a> •
  <a href="#developer">Developer</a>
</div>

<br/><br/><br/><br/><br/>

## Introduction

<div align="left">

<img alt="Npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
<img alt="React Router" src="https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img alt="Figma" src="https://img.shields.io/badge/-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white" />
<img src="https://img.shields.io/badge/Google Analytics-E37400?style=flat-square&logo=google-analytics&logoColor=white"/>
<img alt="Prettier" src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white" />
<img  src="https://img.shields.io/badge/AWS S3-569A31?style=flat-square&logo=amazon-s3&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img  src="https://img.shields.io/badge/Recoil-1877F2?style=flat-square&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img alt="VSCode" src="https://img.shields.io/badge/-Visual_Studio_Code-0078D4?style=flat-square&logo=visual%20studio%20code&logoColor=white" />
<img src="https://img.shields.io/badge/Framer Motion-0055FF?style=flat-square&logo=framer&logoColor=white"/>
<img alt="ESLint" src="https://img.shields.io/badge/-ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white" />
<img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"/>
<img  src="https://img.shields.io/badge/AWS CloudFront-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" />
<img  src="https://img.shields.io/badge/Vercel SWR-000000?style=flat-square&logo=vercel&logoColor=white" />

</div>

**Wavy**의 Client는 위 개발 스택을 사용하여 개발되었습니다.

## Getting Started

<div align="center">

<h3>

[ `www.wavy.dance`](www.wavy.dance)

</h3>

</div>

**Wavy**는 현재 [위 URL](www.wavy.dance)에서 서비스되고 있습니다.

## Features

## Directory Structure

```bash
src
├── assets
│   └── images
│   └── videos
├── components
│   └── App.tsx
│   └── Common
│   └── [PageName]
├── constants
├── hooks
│   └── api
│   └── Common
│   └── [PageName]
├── pages
│   └── [PageName]
├── router
├── store
│   └── Common
│   └── [PageName]
├── styles
│   └── global
│   └── theme
├── types
├── utils
└── index.tsx

```

## Packages

```bash
├── @babel/core@7.12.3
├── @pmmmwh/react-refresh-webpack-plugin@0.4.3
├── @sentry/react@6.13.3
├── @sentry/tracing@6.13.3
├── @svgr/webpack@5.5.0
├── @tensorflow-models/posenet@2.2.2
├── @tensorflow/tfjs@3.9.0
├── @testing-library/jest-dom@5.14.1
├── @testing-library/react@12.1.2
├── @testing-library/user-event@13.2.1
├── @types/axios@0.14.0
├── @types/dom-mediacapture-record@1.0.10
├── @types/jest@27.0.2
├── @types/lodash@4.14.175
├── @types/node@16.10.3
├── @types/rc-slider@9.3.1
├── @types/react-dom@17.0.9
├── @types/react-ga@2.3.0
├── @types/react-router-dom@5.3.1
├── @types/react-router@5.1.17
├── @types/react-webcam@3.0.0
├── @types/react@17.0.27
├── @types/recharts@1.8.20
├── @types/recoil@0.0.9
├── @types/styled-components@5.1.15
├── @typescript-eslint/eslint-plugin@4.33.0
├── @typescript-eslint/parser@4.33.0
├── axios@0.21.4
├── babel-eslint@10.1.0
├── babel-jest@26.6.3
├── babel-loader@8.1.0
├── babel-plugin-named-asset-import@0.3.7
├── babel-preset-react-app@10.0.0
├── bfj@7.0.2
├── camelcase@6.2.0
├── case-sensitive-paths-webpack-plugin@2.3.0
├── css-loader@4.3.0
├── dotenv-expand@5.1.0
├── dotenv@8.2.0
├── eslint-config-react-app@6.0.0
├── eslint-plugin-flowtype@5.10.0
├── eslint-plugin-import@2.24.2
├── eslint-plugin-jest@24.5.2
├── eslint-plugin-jsx-a11y@6.4.1
├── eslint-plugin-react-hooks@4.2.0
├── eslint-plugin-react@7.26.1
├── eslint-plugin-testing-library@3.10.2
├── eslint-webpack-plugin@2.5.4
├── eslint@7.32.0
├── file-loader@6.1.1
├── framer-motion@4.1.17
├── fs-extra@9.1.0
├── html-webpack-plugin@4.5.0
├── identity-obj-proxy@3.0.0
├── jest-circus@26.6.0
├── jest-resolve@26.6.0
├── jest-watch-typeahead@0.6.1
├── jest@26.6.0
├── lodash@4.17.21
├── mini-css-extract-plugin@0.11.3
├── optimize-css-assets-webpack-plugin@5.0.4
├── pnp-webpack-plugin@1.6.4
├── postcss-flexbugs-fixes@4.2.1
├── postcss-loader@3.0.0
├── postcss-normalize@8.0.1
├── postcss-preset-env@6.7.0
├── postcss-safe-parser@5.0.2
├── prompts@2.4.0
├── rc-slider@9.7.2
├── react-app-polyfill@2.0.0
├── react-confetti@6.0.1
├── react-dev-utils@11.0.4
├── react-dom@17.0.2
├── react-ga@3.3.0
├── react-player@2.9.0
├── react-refresh@0.8.3
├── react-router-dom@5.3.0
├── react-scripts@4.0.3
├── react-webcam@6.0.0
├── react@17.0.2
├── recharts@2.1.4
├── recoil@0.4.1
├── resolve-url-loader@3.1.4
├── resolve@1.18.1
├── sass-loader@10.2.0
├── save@2.4.0
├── semver@7.3.2
├── style-loader@1.3.0
├── styled-components@5.3.1
├── swr@1.0.1
├── terser-webpack-plugin@4.2.3
├── ts-pnp@1.2.0
├── typescript@4.4.3
├── url-loader@4.1.1
├── web-vitals@2.1.1
├── webpack-dev-server@3.11.1
├── webpack-manifest-plugin@2.2.0
├── webpack@4.44.2
└── workbox-webpack-plugin@5.1.4
```

## Developer

해당 프로젝트는 [소프트웨어 마에스트로](https://www.swmaestro.org/sw/main/main.do) 사업의 지원을 받아 개발되었습니다.

|                               FE: [hyesungoh](https://github.com/hyesungoh)                               |                              AI: [haeseoklee](https://github.com/haeseoklee)                              |                                  BE: [Yeonwu](https://github.com/Yeonwu)                                  |
| :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/26461307?v=4" width="70px" style="border-radius:50%" /> | <img src="https://avatars.githubusercontent.com/u/20268101?v=4" width="70px" style="border-radius:50%" /> | <img src="https://avatars.githubusercontent.com/u/61102178?v=4" width="70px" style="border-radius:50%" /> |

## License

[MIT](https://choosealicense.com/licenses/mit/)
