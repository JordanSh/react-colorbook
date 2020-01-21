# React ColorBook

Just like when artists blend colors on their colors pallate and later can look and select a color from, ColorBook is a simple react component that takes your colors file and gives your colors, shadows and gradients a visual form.

- Ever wanted to pick a color from your colors file but found yourself copy-pasting the color code into an external colorpicker of some sort?
- Have a general color file for colors that you like to reuse?

This is the package you've been looking for.

## Getting started

ColorBook is dependent on styled-components, make sure to install them both.

```
npm i react-colorbook styled-components
```

### The Basics:

To start, you will need some color file, you can also store shadows and gradients in it:

```js
export const blushRed = "#ff7393"
export const brightBlue = "#54f1ff"
export const freshSeaGreen = "#70ffcf"
export const outerShadows = "box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.75)"
export const innerShadows = "box-shadow: inset 2px 2px 10px 2px rgba(0,0,0,0.75)"
export const radialCoreGradient = "radial-gradient(circle, #b071e5, #ff59ad, #ff765a, #ffb500, #a0eb12)"
export const goodMorningTripleGradient = "linear-gradient(to right top, #8d83e9, #38a1fe, #00b9fd, #00cbeb, #00dad1, #49e2c0, #74e9ad, #9cee9a, #b0f28b, #c7f57c, #e0f66c, #fbf65f)"
```

Import the ColorBook component and all the colors from the colors file into your react app. you can choose what ever name you wants, I used "c".

```jsx
import ColorBook from "react-colorbook"
import * as c from "../style/colors"
```

## Select how to use it

By default the ColorBook component is displayed on a full page, so the first thing you will need to do is to decide where to use it:
- Separate project on a different host
- Separate tab on a different route

## OPTION 1: Separate project on a different host

This option is generally better for people who keep a seperate color file for colors that they like to reuse.

### Steps:
1. Open a separated react app with your color file inside it.
2. Import the colors from your file into the component.
3. Render the component.
4. Run both projects simoustanly.

The component accepts two arguments: The imported color module, and it's name.
Providing the name will be used to return a ready-to-use output that you can copy-paste right into your css code, so make sure they match.

```jsx
<ColorBook colorsImport={c} colorsImportName="c"/>
```

### App example:

```jsx
import React from 'react';
import styled from "styled-components"
import ColorBook from "react-colorbook"
import * as c from "../style/colors"

const App = () => {
  return (
      <Wrapper>
        <ColorBook colorsImport={c} colorsImportName="c"/>
      </Wrapper>
  );
}
export default App;

const Wrapper = styled.div``;
```
Basically, you will run this project together with the current project you are working on. You will normally recieve an alert that something is already running on the current port, just select to open this project on another port and you will be able to run them both simoustanly

## OPTION 2: Separate tab on a different route

This option is generally better for people who use a lot of specially selected colors and like to keep them exclusive to their perspective project.

### Steps:
1. On the same project you are working, on make a new Route for the ColorBook component.
2. Import the colors from your file into the component.
3. Open a separate tab with the Route that leads to the Colorbook component.
4. Open both tabs simoustanly.

If you chose this option I will assume you already know about react-router-dom. If not, i would highly recommand you learn about it. In any case, you can just copy-paste the app snippet at the end of the example.

NOTICE: you will probably want to delete this route before production!

So, firstly install react-router-dom:
```
npm i react-router-dom
```

The component accepts two arguments: The imported color module, and it's name. Providing the name will be used to return a ready-to-use output that you can copy-paste right into your css code, so make sure they match.

This is the proper way for passing props into a component which is rendered by react router: 

```jsx
<Route path='/react-colorbook' render={(props) =>
 <ColorBook {...props} colorsImport={c} colorsImportName="c" />} />
```
### App example:

```jsx
import React from 'react';
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home"
import ColorBook from "react-colorbook"
import * as c from "../style/colors"

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Switch> 
          <Route exact path="/" component={Home} />

          <Route path='/react-colorbook' render={(props) =>
            <ColorBook {...props} colorsImport={c} colorsImportName="c" />} />

        </Switch>
      </Wrapper>
    </Router>
  );
}
export default App;

const Wrapper = styled.div``;
```
To view it, just open another tab while your project is running, and add the route to the end of the url:
```
yourUrl/react-colorbook
```

## Maker's Note
Hope you found it useful, for any question please feel free to contant me.

You can see my contact details and more of my stuff on my portfolio:
[yardenshalom.com](https://www.yardenshalom.com)
