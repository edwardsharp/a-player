require('./index.scss');

// IE11?
// require('babel-polyfill');

import {Slim} from "slim-js/Slim";
import {tag, template, useShadow} from "slim-js/Decorators";

const aTemplate = require('./a-player.html');

@tag('a-player')
@template(aTemplate)
class APlayer extends Slim {
  chapters = [];
  captions = [];
  caption = -1;
  matches = [];
  query = "";
  cycle = -1;
  showSidebar = false;
  //dark-color
  transcriptsOff = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAdUlEQVQ4y2NgGKxAgYGB4T8ReAEuA5io5RIWKP2CgYHBEUncg4GBoZyBgeElAwNDBJL4C0IG/WBgYDiA5lVkcQ0GBgYJJIwMTkDVYQUJ0DB5AOUvwBNuClQNI2JdREicei4axgYx4hCXgKadH9B0Qkh8FBABAOnAJRVKrOykAAAAAElFTkSuQmCC";
  //white-color
  transcriptsOn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAY0lEQVQ4y2NgGJTg////Cv+JAPjMYKK2izjQ+B1QR7wg1gwmBgYGBkZGxh9o4jeg9A9iHcFEgqtxhZsEVcOIhViFjIyMjDCXMTAwPGRkZFSgSawNY4OGMWBETrlkGQBNX1QDAMv3XE78oP9+AAAAAElFTkSuQmCC";
  jwplayer;
  
  static get observedAttributes() {
    return [
      'autostart',
      'width',
      'height',
      'file',
      'image',
      'display-title',
      'chapters-file',
      'captions-file',
      'thumbnails-file',
      'captions-color',
      'captions-bg',
      'captions-bg-opacity',
      'captions-font-size'
    ];
  }

  get autoBoundAttributes() {
    return [
      'autostart',
      'width',
      'height',
      'file',
      'image',
      'display-title',
      'chapters-file',
      'captions-file',
      'thumbnails-file',
      'captions-color',
      'captions-bg',
      'captions-bg-opacity',
      'captions-font-size'
    ];
  }

  onBeforeCreated() {
    //set default values
    this.autostart = this.autostart || 'false';
    this.width = this.width || '320';
    this.height = this.height || '180';
    this.displayTitle = this.displayTitle || 'false';
    this.captionsColor = this.captionsColor || "#ffffff";
    this.captionsBg = this.captionsBg || "#000000";
    this.captionsBgOpacity = this.captionsBgOpacity || '75';
    this.captionsFontSize = this.captionsFontSize || '15';
  }

  onRender() {
    console.log('this.autostart', this.autostart);
    this.initJwPlayer();
  } 

  initJwPlayer(){
    // Setup JW Player
    this.jwplayer = jwplayer(this.player).setup({
        file: this.file,
        image: this.image,
        tracks: [
          { file: this.chaptersFile, kind: "chapters" },
          { file: this.captionsFile, kind: "captions", label: "Default" },
          { file: this.thumbnailsFile, kind: "thumbnails" }
        ],
        displaytitle: this.displayTitle,
        width: this.width,
        height: this.height,
        autostart: this.autostart,
        captions: {
          fontSize: this.captionsFontSize,
          color: this.captionsColor, 
          backgroundColor: this.captionsBg,
          backgroundOpacity: this.captionsBgOpacity
        }
    });

    this.sidebar.style.height = `${this.height}px`;
    this.transcript.style.height = `${this.height - 68}px`;

    this.jwplayer.setCurrentCaptions(0);
    
    this.jwplayer.addButton(
      this.transcriptsOff,
      "Toggle Transcripts",
      () => {        
        this.toggleTranscriptsBtn();
      },
      "toggleTranscripts"
    );

    this.sidebar.style.maxWidth = `${this.width}px`;
    this.sidebar.style.display = 'none';

    // Load chapters / captions
    this.jwplayer.on('ready', () => {
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
      r.open('GET',this.chaptersFile,true);
      r.send();
    });

    // Highlight current caption and chapter
    this.jwplayer.on('time', (e) => {
      var p = e.position;
      for(var j=0; j<this.captions.length; j++) {
        if(this.captions[j].begin < p && this.captions[j].end > p) {
          if(j != this.caption) {
            var c = this.querySelector('#caption'+j);
            if(this.caption > -1) {
              this.querySelector('#caption'+this.caption).className = "";
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
        this.jwplayer.seek(this.captions[i].begin);
      }
    });
    this.search.addEventListener('focus', (e) => {
      setTimeout(() => {this.search.select();},100);
    });
    this.search.addEventListener('keydown', (e) => {
      if(e.keyCode == 27) {
        this.resetSearch();
      } else if (e.keyCode == 13) {
        var q = e.target.value.toLowerCase();
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
    r.open('GET',this.captionsFile,true);
    r.send();
  }


  toggleTranscriptsBtn(){
    this.jwplayer.removeButton('toggleTranscripts');
    this.showSidebar = !this.showSidebar;
    this.sidebar.style.display = this.showSidebar ? 'initial' : 'none';
    this.jwplayer.addButton(
      this.showSidebar ? this.transcriptsOn : this.transcriptsOff,
      "Toggle Transcripts",
      () => {        
        this.toggleTranscriptsBtn();
      },
      "toggleTranscripts"
    );
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
      var m = this.captions[i].text.toLowerCase().indexOf(q);
      if( m > -1) {
        this.querySelector('#caption'+i).innerHTML = 
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
      var o = this.querySelector('#caption'+this.matches[this.cycle]);
      o.getElementsByTagName("em")[0].className = "";
    }
    var c = this.querySelector('#caption'+this.matches[i]);
    c.getElementsByTagName("em")[0].className = "current";
    this.match.innerHTML = (i+1) + " of " + this.matches.length;
    this.transcript.scrollTop = c.offsetTop - this.transcript.offsetTop - 40;
    this.cycle = i;
  }
  
  resetSearch() {
    if(this.matches.length) {
      for(var i=0; i<this.captions.length; i++) {
        this.querySelector('#caption'+i).innerHTML = this.captions[i].text;
      }
    }
    this.query = "";
    this.matches = [];
    this.match.innerHTML = "";
    this.cycle = -1;
    this.transcript.scrollTop = 0;
  }

}
