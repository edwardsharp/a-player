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
  //base
  transcriptsOff = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAWklEQVQ4y2NgGJTg////Cv+JAPjMYKK2izjQ+B1QR7wg1gwmBgYGBkZGxh9o4jeg9A9iHcFEgqtxhZsEVcOIhViFjIyMjDCXMTAwPGRkZFSgSawNY4NGAR0BAK4nWE06Kh34AAAAAElFTkSuQmCC";
  //underlined
  transcriptsOn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAY0lEQVQ4y2NgGJTg////Cv+JAPjMYKK2izjQ+B1QR7wg1gwmBgYGBkZGxh9o4jeg9A9iHcFEgqtxhZsEVcOIhViFjIyMjDCXMTAwPGRkZFSgSawNY4OGMWBETrlkGQBNX1QDAMv3XE78oP9+AAAAAElFTkSuQmCC";
  adToggle = false;
  //base
  adOff = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABx0lEQVRYw+1YTauCQBQ9YxEtoiKIfkCb6If0g2sRQVAYtHMjBQZRi4hM49nnIjDuW7z3JHWsUTc+86zmysx47se5owNk+CcgIpZu74hISiK3Z1K5pBNERjDtBFnSCVLSW03i0/0WvV6PvPh1LhCz2cyVGVVVHXuz2VC32/0CAMMwuBlkIaPs24QxxnjPefOe9/mzg8ahVXy73ShmCTnrTdPE8XgkANB1HfP5PF79q6oamEJeimVZpvP5HDjfS/hvPJlMSCQbXO9FCR4OB+cFmqaFIsgrIyls3a1WK2HHWq2Wr8ZlWaaofdAHXdd9mzWbzVDCMgzDZZdKJQDA9XqNR3AwGFCj0QhUoijq9brLfjweAIB8Ph+PYKfTcdn3+z2SwLw+7XY7CwCKxWJ01dq2TaLwiuR0OtErcYUViS/OmqZRLhf927VcLiOoVYzHY+7pZFkWAGC5XJKiKNFbimgf5GGxWLii1O/36V30hMi9mydCUFEUZ5/hcOisG41Gzng6ndJ2u6WXZ/HlciHbtn/UI0moVCpc1e73eyoUCiAi1Go1tl6vqVqtPtcwTNNEu91O8a9mhgyfckGU7kujpHr6OVHPkOETVPwNKhaTKq3lMlMAAAAASUVORK5CYII=";
  //underlined
  adOn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAACNElEQVRYw+2Yy6raUBSGv63WChW1gvgATsR3aAcd+EB9NB2IcKii4CwTUVCwOhDxEql3qEXP6qA5wUuiUcGm1n+0V9jZ+dflXzt7wxP/CEREPbZ3IuJxI7ddUl63E+RJ8NEJKrcTFLe3Gten+yyy2awcwnDOFrVabS8z1WrVtLvdrmQymR8Ao9HIMoPqwigfLaKUUlbPrebtrvNm240vVvFqtZIbS8h8X9d1ptOpAAwGA+r1+m31X61WbVNoleJSqSTz+dx2/iHht3G5XBYn2bD03inB8XhsfqDRaFxE0KqMPJfWXbvdduxYMpk8qvFSqSTX9sEjDAaDo8USicRFwhqNRnt2MBgEYLlc3kYwn89LPB63VaJTxGKxPXu73QLg8/luI5hOp/fs9Xp9lcAOfer3+xOAQCBwvWo3m404xaFIZrOZnBLXpSI5inOj0RCv9/p/11AohF2rKBaLlrvTZDIBoNVqiaZp17cUp33QCs1mcy9KuVxOzkXPEblz85wQ1DTNXOfl5cV8r1AomONKpSK9Xk9O7sWLxUI2m80f9Xg8hMNhS9UOh0Px+/2ICNFoVHU6HYlEIrs1jK7rpFKpBz5qPvHE/3JB9NiXRm71dJeLsjl+qr9wkBdAlFKvtjuJiPiBL8An4APw8w4HegUEgBVQBr4ppX7Z/c28Az4DX4H3wOudCHqAtTEuA7YEt8B3oABEgOWdCAaBqfHt7akUe4CPBjmvEcF73RFtDZKTwzp0tYp/AzvytxswCV76AAAAAElFTkSuQmCC";
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
      'captions-font-size',
      'audio-description-file',
      'audio-description-file-type',
      'mute',
      'volume',
      'show-transcripts',
      'show-search'
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
      'captions-font-size',
      'audio-description-file',
      'audio-description-file-type',
      'mute',
      'volume',
      'show-transcripts',
      'show-search'
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
    this.volume = this.volume || '100';
    this.mute = this.mute || 'false';
    this.audioDescriptionFileType = this.audioDescriptionFileType || 'audio/mp3';

  }

  onRender() {
    this.initJwPlayer();
  } 

  initJwPlayer(){
    // default optz
    let optz = {
      file: this.file,
      // sources: [
      //   { file: this.file, default: true }
      // ],
      displaytitle: this.displayTitle,
      width: this.width,
      height: this.height,
      autostart: this.autostart,
      mute: this.mute,
      volume: this.volume,
      captions: {
        fontSize: this.captionsFontSize,
        color: this.captionsColor, 
        backgroundColor: this.captionsBg,
        backgroundOpacity: this.captionsBgOpacity
      }
    }

    this.sidebar.style.maxHeight = `${this.height}px`;
    this.sidebar.style.maxWidth = `${this.width}px`;
    this.accordion.style.maxWidth = `${this.width}px`;
    this.sidebar.style.display = 'none';
    this.accordion.style.display = 'none';

    //merge optional argz
    if(this.image && this.image !== ''){
      optz.image = this.image;
    }
    if(this.chaptersFile && this.chaptersFile != ''){
      optz.tracks = optz.tracks || [];
      optz.tracks.push({ file: this.chaptersFile, kind: "chapters" });
    }
    if(this.captionsFile && this.captionsFile != ''){
      optz.tracks = optz.tracks || [];
      optz.tracks.push({ file: this.captionsFile, kind: "captions", label: "Default" });
    }
    if(this.thumbnailsFile && this.thumbnailsFile != ''){
      optz.tracks = optz.tracks || [];
      optz.tracks.push({ file: this.thumbnailsFile, kind: "thumbnails" });
    }
    
    this.jwplayer = jwplayer(this.player).setup(optz);


    if(this.showSearch){
      this.transcript.style.maxHeight = `${this.height - 80}px`;
    }else{
      this.searchbox.style.display = 'none';
      this.transcript.style.maxHeight = `${this.height}px`;
    }
    

    if(this.captionsFile && this.captionsFile != ''){
      this.accordion.style.display = 'block';
      this.accordion.addEventListener('click', () => {
        this.toggleTranscriptsBtn();
      });
      this.jwplayer.addButton(
        this.transcriptsOff,
        "Toggle Transcripts",
        () => {        
          this.toggleTranscriptsBtn();
        },
        "toggleTranscripts"
      );
      if(this.showTranscripts){
        this.toggleTranscriptsBtn();
      }


    }

    // Load chapters / captions
    if(!this.chaptersFile){
      this.loadCaptions();
    }else{
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
    }

    this.jwplayer.setCurrentCaptions(0);

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
    
    if(this.audioDescriptionFile && this.audioDescriptionFile !== ''){
      this.audio.src = this.audioDescriptionFile;
      // this.audio.type = this.audioDescriptionFileType;
      this.audio.muted = true;

      this.jwplayer.on('play', (e) => {
        this.audio.play();
      });
      this.jwplayer.on('pause', (e) => {
        this.audio.pause();
      });
      this.jwplayer.on('seek', (e) => {
        this.audio.currentTime = e.position;
        //this.audio.play();
      });
      this.jwplayer.on('mute', (e) => {
        this.audio.muted = e.mute;
      });
      this.jwplayer.on('volume', (e) => {
        this.audio.volume = e.volume / 100;
      });

      this.jwplayer.addButton(
        this.adOff,
        "Toggle Audio Description",
        () => {        
          this.toggleAudioDescriptionBtn();
        },
        "toggleAudioDescription"
      );
    }
  }
  //end initJwPlayer

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
    if(this.showSidebar){
      this.indicator.classList.remove('arrow-right');
      this.indicator.classList.add('arrow-down');
      this.accordion.setAttribute('aria-expanded', true);
    }else{
      this.indicator.classList.remove('arrow-down');
      this.indicator.classList.add('arrow-right');
      this.accordion.setAttribute('aria-expanded', false);
    }
  }

  toggleAudioDescriptionBtn(){
    this.jwplayer.removeButton('toggleAudioDescription');
    this.audio.muted = this.adToggle;
    this.adToggle = !this.adToggle;
    this.jwplayer.addButton(
      this.adToggle ? this.adOn : this.adOff,
      "Toggle Audio Description",
      () => {        
        this.toggleAudioDescriptionBtn();
      },
      "toggleAudioDescription"
    );
  }

  loadCaptions(){
    if(this.captionsFile && this.captionsFile !== ''){
      var r = new XMLHttpRequest();
      r.onreadystatechange = () => {
        if (r.readyState == 4 && r.status == 200) {
          var t = r.responseText.split("\n\n");
          t.shift();
          var h = "<p>";
          var s = 0;
          for(var i=0; i<t.length; i++) {
            // try{
              var c = this.parse(t[i]);
              if(s < this.chapters.length && c.begin > this.chapters[s].begin) {
                h += "</p><h4>"+this.chapters[s].text+"</h4><p>";
                s++;
              }
              h += "<span id='caption"+i+"'>"+c.text+"</span>";
              this.captions.push(c);
            // }catch(e){console.warn('caught err!')}
          }
          this.transcript.innerHTML = h + "</p>";
        }
      };
      r.open('GET',this.captionsFile,true);
      r.send();
    }
  }

  parse(d){
    var a = d.split("\n");
    var i; 
    var t = '';
    var aa;
    if(a[1] && a[1].indexOf(' --> ') !== -1){
      i = a[1].indexOf(' --> ')
      if(a[2]){ t = a[2]; }
      if(a[3]){ t += " " + a[3]; }
      aa = a[1];
    }else{
      i = a[0].indexOf(' --> ');
      if(a[1]){ t = a[1]; }
      if(a[2]){ t += " " + a[2]; }
      aa = a[0];
    }
    if(t){
      t = t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    return {
      begin: this.seconds(aa.substr(0,i)),
      btext: aa.substr(3,i-7),
      end: this.seconds(aa.substr(i+5)),
      text: t
    }
  }

  seconds(s){
    var sec = s.split(' ')[0];
    var a = sec.split(':');
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
