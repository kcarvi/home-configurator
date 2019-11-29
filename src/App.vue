<template>
  <div id="app">

    <div v-show="loader">
      <div id="progressbar">
        <div :style="{ width: progressStatus + '%' }"></div>
      </div>
    </div>


    <div class="container" v-show="!loader">

      <div class="header">

        <div class="item">
          <div class="menu"><span></span>Цвет кирпича однотонной кладки</div>
          <div class="submenu">
            <div class="prevItem" @click="prevBricks1">◀</div>
            <div class="nextItem" @click="nextBricks1">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="bricks1.indexOf(activeBrick)">
              <slide v-for="(item, i) in bricks1" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectBrick(item, i)"
                    :class="[{'selected' : activeBrick == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Сочетание нескольких цветов кирпича</div>
          <div class="submenu">
            <div class="prevItem" @click="prevBricks2">◀</div>
            <div class="nextItem" @click="nextBricks2">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="bricks2.indexOf(activeBrick)">
              <slide v-for="(item, i) in bricks2" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectBrick(item)"
                    :class="[{'selected' : activeBrick == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Кровля металлочерепица</div>
          <div class="submenu">
            <div class="prevItem" @click="prevMroofs">◀</div>
            <div class="nextItem" @click="nextMroofs">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="mroofs.indexOf(activeRoof)">
              <slide v-for="(item, i) in mroofs" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectRoof(item)"
                    :class="[{'selected' : activeRoof == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Кровля мягкая</div>
          <div class="submenu">
            <div class="prevItem" @click="prevSroofs">◀</div>
            <div class="nextItem" @click="nextSroofs">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="sroofs.indexOf(activeRoof)">
              <slide v-for="(item, i) in sroofs" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectRoof(item)"
                    :class="[{'selected' : activeRoof == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Цвет окон, карнизов и водостоков</div>
          <div class="submenu">
            <div class="prevItem" @click="prevWindows">◀</div>
            <div class="nextItem" @click="nextWindows">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="windows.indexOf(activeWindow)">
              <slide v-for="(item, i) in windows" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectWindow(item)"
                    :class="[{'selected' : activeWindow == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Обрамления и вставки</div>
          <div class="submenu">
            <div class="prevItem" @click="prevFrames">◀</div>
            <div class="nextItem" @click="nextFrames">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="frames.indexOf(activeFrame)">
              <slide v-for="(item, i) in frames" :key="i">
                  <img 
                    :src="'/img/icons/' + item.slug + '.jpg'"
                    @click="selectFrame(item)"
                    :class="[{'selected' : activeFrame == item }]"
                    v-tooltip="item.desc"
                  >
              </slide>
            </carousel>
          </div>
        </div>

        <div class="item">
          <div class="menu"><span></span>Цвет цоколя</div>
          <div class="submenu">
            <div class="prevItem" @click="prevBases">◀</div>
            <div class="nextItem" @click="nextBases">▶</div>
            <carousel :perPageCustom="[[320, 5], [1024,15]]" 
                      :navigationEnabled="false" 
                      :paginationEnabled="false" 
                      :scrollPerPage="false"
                      :loop="true"
                      :navigateTo="bases.indexOf(activeBase)">
              <slide v-for="(item, i) in bases" :key="i">
                <img :src="'/img/icons/' + item.slug + '.jpg'"
                     @click="selectBase(item)"
                     :class="[{'selected' : activeBase == item }]"
                     v-tooltip="item.desc"
                >
              </slide>
            </carousel>
          </div>
        </div>

      </div>

      <div class="layers">

        <div class="main">
          <img src="/img/main.png" alt="">
        </div>

        <div class="layer" v-for="(item, i) in allBricks" 
             :key="'brick2' +i" 
             :class="[{'visible' : activeBrick == item }, item]">
          <img :src="'/img/layers/' + item.slug + '.png'" @load="handleLoad">
        </div>

        <div class="layer" v-for="(item, i) in allRoofs" 
             :key="'roof2' +i" 
             :class="[{'visible' : activeRoof == item }, item]">
          <img :src="'/img/layers/' + item.slug + '.png'" @load="handleLoad">
        </div>

        <div class="layer" v-for="(item, i) in bases" 
             :key="'base2' +i" 
             :class="[{'visible' : activeBase == item }, item]">
          <img :src="'/img/layers/' + item.slug + '.png'" @load="handleLoad">
        </div>

        <div class="layer" v-for="(item, i) in windows" 
             :key="'window2' +i" 
             :class="[{'visible' : activeWindow == item }, item]">
          <img :src="'/img/layers/' + item.slug + '.png'" @load="handleLoad">
        </div>

        <div class="layer" v-for="(item, i) in frames" 
             :key="'frame2' +i" 
             :class="[{'visible' : activeFrame == item }, item]">
          <img :src="'/img/layers/' + item.slug + '.png'" @load="handleLoad">
        </div>

        <div class="logo">
          <a href="http://marketing-stroy.ru/" target="_blank">
            <img src="/img/main-logo.png" alt="">
          </a>
        </div>

      </div>
      
      <div class="watermark">
        Подбери свой цвет
      </div>

    </div>


  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      progressStatus: 0,
      loader: true,
      imgLoaded: 0,
      activeRoof: '',
      activeBrick: '',
      activeBase: '',
      activeWindow: '',
      activeFrame: '',
      sroofs: [
        { slug: 'sroof-1',  desc: 'светло-коричневый' },
        { slug: 'sroof-2',  desc: 'коричневый' },
        { slug: 'sroof-3',  desc: 'темно-коричневый' },
        { slug: 'sroof-4',  desc: 'красный' },
        { slug: 'sroof-5',  desc: 'темно-красный' },
        { slug: 'sroof-6',  desc: 'серый' },
        { slug: 'sroof-7',  desc: 'серо-синий' },
        { slug: 'sroof-8',  desc: 'синий' },
        { slug: 'sroof-9',  desc: 'зеленый' },
      ],
      mroofs: [
        { slug: 'mroof-1',  desc: 'светло-коричневый' },
        { slug: 'mroof-2',  desc: 'коричневый' },
        { slug: 'mroof-3',  desc: 'красный' },
        { slug: 'mroof-4',  desc: 'красный-коричневый' },
        { slug: 'mroof-5',  desc: 'темно-синий' },
        { slug: 'mroof-6',  desc: 'синий' },
      ],
      bases: [
        { slug: 'base-1',  desc: 'бежевый'},
        { slug: 'base-2',  desc: 'светло-коричневый'},
        { slug: 'base-3',  desc: 'коричневый'},
        { slug: 'base-4',  desc: 'темно-коричневый'},
        { slug: 'base-5',  desc: 'серый'},
        { slug: 'base-6',  desc: 'темно-серый'},
        { slug: 'base-7',  desc: 'красный'},
      ],
      windows: [
        { slug: 'window-1',  desc: 'белый'},
        { slug: 'window-2',  desc: 'бежевый'},
        { slug: 'window-3',  desc: 'светло-коричневый'},
        { slug: 'window-4',  desc: 'коричневый'},
        { slug: 'window-5',  desc: 'темно-коричневый'},
      ],
      frames: [
        { slug: 'frame-0',  desc: 'без обрамлений'},
        { slug: 'frame-1',  desc: 'лепнина'},
        { slug: 'frame-2',  desc: 'шоколад, углы окна 1'},
        { slug: 'frame-3',  desc: 'шоколад, углы окна 2'},
        { slug: 'frame-4',  desc: 'шоколад, углы окна 3'},
        { slug: 'frame-5',  desc: 'сл. кость, углы окна'},
        { slug: 'frame-6',  desc: 'белый, углы окна'},
        { slug: 'frame-7',  desc: 'солома, углы окна'},
        { slug: 'frame-8',  desc: 'сл. кость, полосы'},
        { slug: 'frame-9',  desc: 'шоколад, полосы'},
        { slug: 'frame-10', desc: 'лондон, углы окна'},
        { slug: 'frame-11', desc: 'красный, углы окна'},
      ],
      bricks1: [
        { slug: 'brick1-1',  desc: 'слоновая кость'},
        { slug: 'brick1-2',  desc: 'пшеничное лето'},
        { slug: 'brick1-3',  desc: 'светлая солома'},
        { slug: 'brick1-4',  desc: 'солома 2'},
        { slug: 'brick1-5',  desc: 'гляссе'},
        { slug: 'brick1-6',  desc: 'латте'},
        { slug: 'brick1-7',  desc: 'капучино'},
        { slug: 'brick1-8',  desc: 'персик'},
        { slug: 'brick1-9',  desc: 'морковь'},
        { slug: 'brick1-10',  desc: 'красный'},
        { slug: 'brick1-11',  desc: 'терракот'},
        { slug: 'brick1-12',  desc: 'лондон'},
        { slug: 'brick1-13',  desc: 'шоколад'},
      ],
      bricks2: [
        { slug: 'brick2-1',  desc: 'баварская кладка классика'},
        { slug: 'brick2-2',  desc: 'баварская кладка 2'},
        { slug: 'brick2-3',  desc: 'баварская кладка 3'},
        { slug: 'brick2-4',  desc: 'баварская кладка 4'},
        { slug: 'brick2-5',  desc: 'баварская кладка 5'},
        { slug: 'brick2-6',  desc: 'баварская кладка 6'},
        { slug: 'brick2-7',  desc: 'баварская кладка 7'},
        { slug: 'brick2-8',  desc: 'баварская кладка классика 8'},
        { slug: 'brick2-9',  desc: 'сочетание 1 + бел'},
        { slug: 'brick2-10',  desc: 'сочетание 1'},
        { slug: 'brick2-11',  desc: 'сочетание 2 + бел'},
        { slug: 'brick2-12',  desc: 'сочетание 2'},
      ],
    }
  },
  methods: {
    selectBrick(item, i){
      this.activeBrick = item;
    },
    selectRoof(item){
      this.activeRoof = item;
    },
    selectBase(item){
      this.activeBase = item;
    },
    selectWindow(item){
      this.activeWindow = item;
    },
    selectFrame(item){
      this.activeFrame = item;
    },
    handleLoad(){
      this.imgLoaded++;
      this.progressStatus = this.imgLoaded * 100 / this.imgCount;
      if(this.imgLoaded >= this.imgCount) {
        this.loader = false; 
      }
    },
    nextBricks1(){
      if(this.activeBrick == '' || this.activeBrick == this.bricks1[this.bricks1.length - 1]){
        this.activeBrick = this.bricks1[0];
      } else {
        this.activeBrick = this.bricks1[this.bricks1.indexOf(this.activeBrick) + 1];
      }
    },
    prevBricks1(){
      if(this.activeBrick == '' || this.bricks1.indexOf(this.activeBrick) == -1){
        this.activeBrick = this.bricks1[this.bricks1.length - 1];
      } else {
        this.activeBrick = this.bricks1[this.bricks1.indexOf(this.activeBrick) - 1] || this.bricks1[this.bricks1.length - 1];
      }
    },
    nextBricks2(){
      if(this.activeBrick == '' || this.activeBrick == this.bricks2[this.bricks2.length - 1]){
        this.activeBrick = this.bricks2[0];
      } else {
        this.activeBrick = this.bricks2[this.bricks2.indexOf(this.activeBrick) + 1];
      }
    },
    prevBricks2(){
      if(this.activeBrick == '' || this.bricks2.indexOf(this.activeBrick) == -1){
        this.activeBrick = this.bricks2[this.bricks2.length - 1];
      } else {
        this.activeBrick = this.bricks2[this.bricks2.indexOf(this.activeBrick) - 1] || this.bricks2[this.bricks2.length - 1];
      }
    },
    nextMroofs(){
      if(this.activeRoof == '' || this.activeRoof == this.mroofs[this.mroofs.length - 1]){
        this.activeRoof = this.mroofs[0];
      } else {
        this.activeRoof = this.mroofs[this.mroofs.indexOf(this.activeRoof) + 1];
      }
    },
    prevMroofs(){
      if(this.activeRoof == '' || this.mroofs.indexOf(this.activeRoof) == -1){
        this.activeRoof = this.mroofs[this.mroofs.length - 1];
      } else {
        this.activeRoof = this.mroofs[this.mroofs.indexOf(this.activeRoof) - 1] || this.mroofs[this.mroofs.length - 1];
      }
    },
    nextSroofs(){
      if(this.activeRoof == '' || this.activeRoof == this.sroofs[this.sroofs.length - 1]){
        this.activeRoof = this.sroofs[0];
      } else {
        this.activeRoof = this.sroofs[this.sroofs.indexOf(this.activeRoof) + 1];
      }
    },
    prevSroofs(){
      if(this.activeRoof == '' || this.sroofs.indexOf(this.activeRoof) == -1){
        this.activeRoof = this.sroofs[this.sroofs.length - 1];
      } else {
        this.activeRoof = this.sroofs[this.sroofs.indexOf(this.activeRoof) - 1] || this.sroofs[this.sroofs.length - 1];
      }
    },
    nextWindows(){
      if(this.activeWindow == '' || this.activeWindow == this.windows[this.windows.length - 1]){
        this.activeWindow = this.windows[0];
      } else {
        this.activeWindow = this.windows[this.windows.indexOf(this.activeWindow) + 1];
      }
    },
    prevWindows(){
      if(this.activeWindow == '' || this.windows.indexOf(this.activeWindow) == -1){
        this.activeWindow = this.windows[this.windows.length - 1];
      } else {
        this.activeWindow = this.windows[this.windows.indexOf(this.activeWindow) - 1] || this.windows[this.windows.length - 1];
      }
    },
    nextFrames(){
      if(this.activeFrame == '' || this.activeFrame == this.frames[this.frames.length - 1]){
        this.activeFrame = this.frames[0];
      } else {
        this.activeFrame = this.frames[this.frames.indexOf(this.activeFrame) + 1];
      }
    },
    prevFrames(){
      if(this.activeFrame == '' || this.frames.indexOf(this.activeFrame) == -1){
        this.activeFrame = this.frames[this.frames.length - 1];
      } else {
        this.activeFrame = this.frames[this.frames.indexOf(this.activeFrame) - 1] || this.frames[this.frames.length - 1];
      }
    },
    nextBases(){
      if(this.activeBase == '' || this.activeBase == this.bases[this.bases.length - 1]){
        this.activeBase = this.bases[0];
      } else {
        this.activeBase = this.bases[this.bases.indexOf(this.activeBase) + 1];
      }
    },
    prevBases(){
      if(this.activeBase == '' || this.bases.indexOf(this.activeBase) == -1){
        this.activeBase = this.bases[this.bases.length - 1];
      } else {
        this.activeBase = this.bases[this.bases.indexOf(this.activeBase) - 1] || this.bases[this.bases.length - 1];
      }
    },
  },
  computed: {
    imgCount(){
      return this.allRoofs.length +  
             this.bases.length + 
             this.windows.length + 
             this.frames.length;
    },
    allRoofs(){
      return this.mroofs.concat(this.sroofs);
    },
    allBricks(){
      return this.bricks1.concat(this.bricks2);
    }
  },
}
</script>

<style>
body {
  margin: 0;
  background: #000;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
}
.container {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}

.header {
  padding: 0.5rem 0;
  color: #FFF;
}
.header ul {
  list-style: none;
}

.header select {
  padding: 0.5rem 1rem;
  margin: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #c1d0e5;
  border-radius: 5px;
}
.header select:focus {
  outline: none;
}


.header .reset-all {
  background: #EEEEEE;
  outline: none;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  cursor: pointer;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  min-width: 8rem;
}


.item {
  display: flex;
  align-items: center;
  justify-content: start;
}
.item .menu {
  width: 320px;
  margin-left: 2rem;
}
.item .menu span {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: red;
  border: 1px solid #999;
  border-radius: 3px;
  margin: 2px 7px 2px 0; 
}
.item .submenu img {
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  border: 2px solid #000;
  width: 48px;
  height: 32px;
  margin: 0 auto;
}
.header .submenu img.selected {
  border-color: red;
}

.submenu {
  position: relative;
}
.submenu .prevItem {
  position: absolute;
  left: -20px;
  width: 20px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.submenu .nextItem {
  position: absolute;
  right: -20px;
  width: 20px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}



.layers {
  position: relative;
}
.layers img {
  object-fit: cover;
  border: 1px solid #FAFAFA;
}
.layers .main,
.layers .logo {
  position: absolute;
  top: 0;
  left: 0;
}
.layers .layer {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
}
.layers .layer.visible {
  visibility: visible;
}


.watermark {
  color: rgba(226, 198, 128, 0.1);
  transform: rotate(-90deg);
  position: absolute;
  top: 535px;
  left: -265px;
  font-size: 3rem;
  font-weight: bold;
}



#progressbar {
  background-color: #eee;
  padding: 3px;
}
#progressbar>div {
  background-color: #c1d0e5;
  height: 20px;
}


@media all and (max-width: 765px) {
  .item .menu {
    flex-direction: column;
    margin-left: 0;
  }  
  .item .menu span {
    display: none;
  }
  .item {
    flex-direction: column;
  }
  .item .menu {
    text-align: center;
  }
  .item .submenu {
    width: 240px;
  }
  .layers {
    margin: 0 4px;
  }
  .watermark {
    display: none;
  }
}




.VueCarousel-navigation-button {
  color: #FFF !important;
}
.VueCarousel-navigation-button:focus {
  outline: none !important;
}
.VueCarousel-navigation-button:hover {
  color: red !important;
}



/** v-tooltip style **/

.tooltip {
  display: block !important;
  z-index: 10000;
}

.tooltip .tooltip-inner {
  border-radius: 2px;
  padding: 5px 10px 4px;
  background: #FFF;
  color: #000;
}

.tooltip .tooltip-arrow {
  width: 0;
  height: 0;
  border-style: solid;
  position: absolute;
  margin: 5px;
  border-color: #FFF;
  z-index: 1;
}

.tooltip[x-placement^="top"] {
  margin-bottom: 5px;
}

.tooltip[x-placement^="top"] .tooltip-arrow {
  border-width: 5px 5px 0 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  bottom: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="bottom"] {
  margin-top: 5px;
}

.tooltip[x-placement^="bottom"] .tooltip-arrow {
  border-width: 0 5px 5px 5px;
  border-left-color: transparent !important;
  border-right-color: transparent !important;
  border-top-color: transparent !important;
  top: -5px;
  left: calc(50% - 5px);
  margin-top: 0;
  margin-bottom: 0;
}

.tooltip[x-placement^="right"] {
  margin-left: 5px;
}

.tooltip[x-placement^="right"] .tooltip-arrow {
  border-width: 5px 5px 5px 0;
  border-left-color: transparent !important;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  left: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip[x-placement^="left"] {
  margin-right: 5px;
}

.tooltip[x-placement^="left"] .tooltip-arrow {
  border-width: 5px 0 5px 5px;
  border-top-color: transparent !important;
  border-right-color: transparent !important;
  border-bottom-color: transparent !important;
  right: -5px;
  top: calc(50% - 5px);
  margin-left: 0;
  margin-right: 0;
}

.tooltip.popover .popover-inner {
  background: #f9f9f9;
  color: black;
  padding: 24px;
  border-radius: 5px;
  box-shadow: 0 5px 30px rgba(black, .1);
}

.tooltip.popover .popover-arrow {
  border-color: #f9f9f9;
}

.tooltip[aria-hidden='true'] {
  visibility: hidden;
  opacity: 0;
  transition: opacity .15s, visibility .15s;
}

.tooltip[aria-hidden='false'] {
  visibility: visible;
  opacity: 1;
  transition: opacity .15s;
}



.swiper-container {
  margin: 0 1rem !important;
}
.swiper-button-prev,
.swiper-button-next {
  margin-top: 4px !important;
  height: 20px !important;
  top: 0 !important;
}
.swiper-button-prev {
  left: 0 !important;
}
.swiper-button-next {
  right: 0 !important;
}
</style>
