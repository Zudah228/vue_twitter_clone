<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <div class="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 hover:bg-lighblue text-3xl rounded-full text-blue">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
      <div>
        <button v-for="tab in tabs" v-bind:key="tab.id" @click="id = tab.id" :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${ id === tab.id ? 'text-blue' : ''}`">
          <font-awesome-icon :prefix="`${tab.iconPrefix}`" :icon="`${tab.iconName}`" class="text-2xl mr-4 text-left" />
          <p class="text-lg font-semibold text-left"> {{ tab.title }} </p>
        </button>
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
        {iconPrefix: 'fas', iconName: 'home', title: 'Home', id:'home'},
        {iconPrefix: 'fas', iconName: 'hashtag', title: 'Explore', id: 'explore'},
        {iconPrefix: 'far', iconName: 'bell', title: 'Notifications', id: 'notifications'},
        {iconPrefix: 'far', iconName: 'envelope', title: 'Messages', id: 'messages'},
        {iconPrefix: 'far', iconName: 'bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {iconPrefix: 'fas', iconName: 'clipboard-list', title: 'Lists', id: 'lists'},
        {iconPrefix: 'far', iconName: 'user', title: 'Profile', id: 'profile'},
        {iconPrefix: 'fas', iconName: 'ellipsis-h', title: 'More', id: 'more'}
      ]
    }
  }
}
</script>