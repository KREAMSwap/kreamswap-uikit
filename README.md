# 🥞 kream UIkit

[![Version](https://img.shields.io/npm/v/@kreamswap-libs/uikit)](https://www.npmjs.com/package/@kreamswap-libs/uikit) [![Size](https://img.shields.io/bundlephobia/min/@kreamswap-libs/uikit)](https://www.npmjs.com/package/@kreamswap-libs/uikit)

kream UIkit is a set of React components and hooks used to build pages on kream's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @kreamswap-libs/uikit`

## Setup

### Theme

Before using kream UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@kreamswap-libs/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@kreamswap-libs/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://kreamswap.github.io/kream-uikit/)
