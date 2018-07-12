# a-player 

demo: https://edwardsharp.github.io/a-player/  
https://www.webcomponents.org/element/@edwardsharp/a-player  

Web Component for rendering videos with accessible captions (&amp; other nifty things) via JWPlayer

based on the JWPlayer interactive-transcripts demo: https://github.com/jwplayer/jwdeveloper-demos/tree/developer-showcase/demos/innovation/interactive-transcripts

## usage

`npm install --save @edwardsharp/a-player` (or use UNPKG!)

include these:

```html
<script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
<script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.13/dist/main.bundle.js"></script>
```

override some styles, if you want. make sure to include these after `<script type="text/javascript" src="main.bundle.js"></script>`.

```html
<style>
  .transcript span.current {
    background: #0095D6;
    color: white;
  }
  .transcript span:not(.current):hover {
    color: #0095D6;
  }
  .searchbox input {
    border: thin solid gray;
  }
  /* search results */
  .transcript span em.current {
    background: red;
    color: white;
  }
</style>
```

### Options:

| Option                     | Required | Default     |
| ---------------------------|:--------:| -----------:|
|file                        | *        |             | 
|captions-file               |          | ''          | 
|chapters-file               |          | ''          | 
|thumbnails-file             |          | ''          | 
|audio-description-file      |          | ''          | 
|audio-description-file-type |          | 'audio/mp3' |
|image                       |          | ''          | 
|display-title               |          | false       | 
|width                       |          | 320         | 
|height                      |          | 180         | 
|captions-color              |          | #ffffff     | 
|captions-bg                 |          | #000000     | 
|captions-bg-opacity         |          | 75          | 
|captions-font-size          |          | 15          | 
|mute                        |          | false       | 
|volume                      |          | 100         | 
|autostart                   |          | false       | 
|show-transcripts            |          | false       |
|show-search                 |          | false       |

## Demo:

<!---
```
<custom-element-demo>
  <template>
    <script src="https://content.jwplatform.com/libraries/IDzF9Zmk.js"></script>
    <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.0.0/webcomponents-bundle.js"></script>
    <script type="text/javascript" src="https://unpkg.com/@edwardsharp/a-player@0.0.13/dist/main.bundle.js"></script>
    <style>
    .transcript span.current {
      background: #0095D6;
      color: white;
    }
    .transcript span:not(.current):hover {
      color: #0095D6;
    }
    .searchbox input {
      border: thin solid gray;
    }
    /* search results */
    .transcript span em.current {
      background: red;
      color: white;
    }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<a-player 
  autoplay="false"
  height="225"
  width="400"
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
