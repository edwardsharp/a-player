# a-player 

demo: https://edwardsharp.github.io/a-player/

Web Component for rendering videos with accessible captions (&amp; other nifty things) via JWPlayer

based on the JWPlayer interactive-transcripts demo: https://github.com/jwplayer/jwdeveloper-demos/tree/developer-showcase/demos/innovation/interactive-transcripts

## usage

`npm install --save a-player` (or use UNPKG CDN!)

include these:

```html
<script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
<script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.2/dist/main.bundle.js"></script>
```

override some styles, if you want. make sure to include these after `<script type="text/javascript" src="main.bundle.js"></script>`.

```html
<style>
  .transcript span.current {
    background: green;
  }
  .transcript span:not(.current):hover {
    color: green;
  }
</style>
```

and use like so:

<!---
```
<custom-element-demo>
  <template>
    <script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.2/dist/main.bundle.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<a-player 
  autoplay="false"
  height="192"
  width="384"
  file="//content.jwplatform.com/manifests/3p683El7.m3u8"
  image="//content.jwplatform.com/thumbs/3p683El7-640.jpg"
  chapters-file="//raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt"
  captions-file="//raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt"
  thumbnails-file="//content.jwplatform.com/strips/3p683El7-120.vtt"
  captions-color="#000"
  captions-bg="#ff0404"
  captions-bg-opacity="100"
  captions-font-size="25"
></a-player>
```
