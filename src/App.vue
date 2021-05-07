<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <div class="lg:w-1/5 border-r border-lighter px-2 lg:px-8 py-2 flex flex-col justify-between">
      <div>
        <button class="h-12 w-12 hover:bg-lighblue text-3xl rounded-full text-blue">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </button>
        <div>
          <button v-for="tab in tabs" v-bind:key="tab.id" @click="id = tab.id" :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
            <font-awesome-icon :prefix="`${tab.iconPrefix}`" :icon="`${tab.iconName}`" class="text-2xl mr-4 text-left" />
            <p class="text-lg font-semibold text-left hidden lg:block"> {{ tab.title }} </p>
          </button>
        </div>
        <button class="text-white bg-blue rounded-full font-semibold focus:outline-none w-12 h-12 lg:h-auto lg:w-full p-3 hover:bg-darkblue">
          <p class="hidden lg:block">ツイートする</p>
          <font-awesome-icon prefix="fas" icon="plus" class="lg:hidden"/>
        </button>
      </div>
      <div class="lg:w-full relative">
        <button v-on:click="clickOwnAccount" class="flex items-center w-full hover:bg-lightblue rounded-full px-4 p-2 focus:outline-none">
          <img src="profile.png" class="w-10 h-10 rounded-full flex border border-lighter" />
          <div class="ml-4">
            <p class="hidden lg:block text-sm font-bold leading-tight text-left"> づだ </p>
            <p class="hidden lg:block text-sm leading-tight text-left text-gray-500"> @Zudah228</p>
          </div>
          <font-awesome-icon prefix="fas" icon="angle-down" class="hidden lg:block ml-auto text-lg" />
        </button>
        <div v-if="dropdown === true" class="absolute bottom-0 right-0 w-64 rounded-lg shadow-md border-lightest bg-white mb-16">
          <button class="flex items-center w-full hover:bg-lightblue p-2 focus:outline-none">
            <img src="profile.png" class="w-10 h-10 rounded-full flex border border-lighter" />
            <div class="ml-4">
              <p class="text-sm font-bold leading-tight text-left"> づだ </p>
              <p class="text-sm leading-tight text-left text-gray-500"> @Zudah228</p>
            </div>
            <font-awesome-icon prefix="fas" icon="check" class="ml-auto text-blue" />
          </button>
          <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            既存のアカウントを追加
          </button>
          <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            アカウントを管理
          </button>
          <button @click="dropdown = false" class="w-full text-left hover:bg-lightest border-t border-lighter p-3 test-sm focus:outline-none">
            @Zudah228からログアウト
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      tabs: [
        {iconPrefix: 'fas', iconName: 'home', title: 'ホーム', id:'home'},
        {iconPrefix: 'fas', iconName: 'hashtag', title: '話題を検索', id: 'explore'},
        {iconPrefix: 'far', iconName: 'bell', title: '通知', id: 'notifications'},
        {iconPrefix: 'far', iconName: 'envelope', title: 'メッセージ', id: 'messages'},
        {iconPrefix: 'far', iconName: 'bookmark', title: 'ブックマーク', id: 'bookmarks'},
        {iconPrefix: 'fas', iconName: 'clipboard-list', title: 'リスト', id: 'lists'},
        {iconPrefix: 'far', iconName: 'user', title: 'プロフィール', id: 'profile'},
        {iconPrefix: 'fas', iconName: 'ellipsis-h', title: 'もっと見る', id: 'more'}
      ],
      dropdown: false
    }
  },
  methods :{
    clickOwnAccount: function () {
      if(this.dropdown) {
        this.dropdown = false
      } else {
        this.dropdown = true
      }
    }
  }
}
</script>