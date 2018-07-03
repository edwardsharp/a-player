require('./index.scss');

// IE11?
// require('babel-polyfill');

import {Slim} from "slim-js/Slim";
import {tag, template, useShadow} from "slim-js/Decorators";

const aTemplate = require('./a-player.html');

@tag('a-player')
@template(aTemplate)
// @useShadow(true)
class APlayer extends Slim {

  chapters = [];
  captions = [];
  caption = -1;
  matches = [];
  query = "";
  cycle = -1;

 

  // var transcript = document.getElementById('transcript');
// var search = document.getElementById('search');
// var match = document.getElementById('match');
  
  static get observedAttributes() {
    return ['autostart'];
  }

  get autoBoundAttributes() {
    return ['autostart'];
  }

  onBeforeCreated() {
    //setup default attrz
    this.autostart = this.autostart || 'false';
  }

  onRender() {
    // this.myDiv.innerText = "Custom Elements!"
    console.log('this.autostart', this.autostart);
    this.initJwPlayer();
  } 

  initJwPlayer(){
    // Setup JW Player
    jwplayer(this.player).setup({
        file: '//content.jwplatform.com/manifests/3p683El7.m3u8',
        image: '//content.jwplatform.com/thumbs/3p683El7-640.jpg',
        tracks: [
          { file: "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt", kind: "chapters" },
          { file: "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt", kind: "captions" },
          { file: "//content.jwplatform.com/strips/3p683El7-120.vtt", kind: "thumbnails" }

        ],
        displaytitle: false,
        width: 640,
        height: 360,
        autostart: this.autostart
    });

    jwplayer().addButton(
      "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/download.png",
      "Download Slides",
      function() {
        window.location.href = "https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/state-html5-video.pdf";
      },
      "download"
    );

    // Load chapters / captions
    jwplayer().on('ready', () => {
      var r = new XMLHttpRequest();
      r.onreadystatechange = () => {
        if (r.readyState == 4 && r.status == 200) {
          var t = r.responseText.split("\n\n");
          t.shift();
          for(var i=0; i<t.length; i++) {
            var c = this.parse(t[i]);
            this.chapters.push(c);
          }
          this.loadCaptions();
        }
      };
      r.open('GET','https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/chapters.vtt',true);
      r.send();
    });

    // Highlight current caption and chapter
    jwplayer().on('time', (e) => {
      var p = e.position;
      for(var j=0; j<this.captions.length; j++) {
        if(this.captions[j].begin < p && this.captions[j].end > p) {
          if(j != this.caption) {
            var c = document.getElementById('caption'+j);
            if(this.caption > -1) {
              document.getElementById('caption'+this.caption).className = "";
            }
            c.className = "current";
            if(this.query == "") {
              this.transcript.scrollTop = c.offsetTop - this.transcript.offsetTop - 40;
            }
            this.caption = j;
          }
          break; 
        }
      }
    });

    // Hook up interactivity
    this.transcript.addEventListener("click", (e) => {
      if(e.target.id.indexOf("caption") == 0) { 
        var i = Number(e.target.id.replace("caption",""));
        jwplayer().seek(this.captions[i].begin);
      }
    });
    this.search.addEventListener('focus', (e) => {
      setTimeout(() => {this.search.select();},100);
    });
    this.search.addEventListener('keydown', (e) => {
      if(e.keyCode == 27) {
        this.resetSearch();
      } else if (e.keyCode == 13) {
        var q = this.value.toLowerCase();
        if(q.length > 0) {
          if (q == this.query) {
            if(this.cycle >= this.matches.length - 1) {
              this.cycleSearch(0);
            } else { 
              this.cycleSearch(this.cycle + 1);
            }
          } else {
            this.resetSearch();
            this.searchTranscript(q);
          }
        } else {
          this.resetSearch();
        }
      }
    });
  }
  //end initJwPlayer

  loadCaptions(){
    var r = new XMLHttpRequest();
    r.onreadystatechange = () => {
      if (r.readyState == 4 && r.status == 200) {
        var t = r.responseText.split("\n\n");
        t.shift();
        var h = "<p>";
        var s = 0;
        for(var i=0; i<t.length; i++) {
          var c = this.parse(t[i]);
          if(s < this.chapters.length && c.begin > this.chapters[s].begin) {
            h += "</p><h4>"+this.chapters[s].text+"</h4><p>";
            s++;
          }
          h += "<span id='caption"+i+"'>"+c.text+"</span>";
          this.captions.push(c);
        }
        this.transcript.innerHTML = h + "</p>";
      }
    };
    r.open('GET','https://raw.githubusercontent.com/jwplayer/jwdeveloper-demos/master/demos/innovation/interactive-transcripts/assets/captions.vtt',true);
    r.send();
  }

  parse(d){
    var a = d.split("\n");
    var i = a[1].indexOf(' --> ');
    var t = a[2];
    if (a[3]) {  t += " " + a[3]; }
    t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return {
      begin: this.seconds(a[1].substr(0,i)),
      btext: a[1].substr(3,i-7),
      end: this.seconds(a[1].substr(i+5)),
      text: t
    }
  }

  seconds(s){
    var a = s.split(':');
    var r = Number(a[a.length-1]) + Number(a[a.length-2]) * 60;
    if(a.length > 2) { r+= Number(a[a.length-3]) * 3600; }
    return r;
  }

  searchTranscript(q) {
    this.matches = [];
    this.query = q;
    for(var i=0; i<this.captions.length; i++) {
      var m = cthis.aptions[i].text.toLowerCase().indexOf(q);
      if( m > -1) {
        document.getElementById('caption'+i).innerHTML = 
          this.captions[i].text.substr(0,m) + "<em>" + 
          this.captions[i].text.substr(m,q.length) + "</em>" + 
          this.captions[i].text.substr(m+q.length);
        this.matches.push(i);
      }
    }
    if(this.matches.length) {
      this.cycleSearch(0);
    } else {
      this.resetSearch();
    }
  }

  cycleSearch(i) {
    if(this.cycle > -1) {
      var o = document.getElementById('caption'+this.matches[this.cycle]);
      o.getElementsByTagName("em")[0].className = "";
    }
    var c = document.getElementById('caption'+this.matches[i]);
    c.getElementsByTagName("em")[0].className = "current";
    this.match.innerHTML = (i+1) + " of " + this.matches.length;
    this.transcript.scrollTop = c.offsetTop - this.transcript.offsetTop - 40;
    this.cycle = i;
  }
  
  resetSearch() {
    if(this.matches.length) {
      for(var i=0; i<this.captions.length; i++) {
        document.getElementById('caption'+i).innerHTML = this.captions[i].text;
      }
    }
    this.query = "";
    this.matches = [];
    this.match.innerHTML = "0 of 0";
    this.cycle = -1;
    this.transcript.scrollTop = 0;
  }

}
