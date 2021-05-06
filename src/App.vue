<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <div class="w-1/5 border-r border-lighter px-8 py-2">
      <button class="h-12 w-12 hover:bg-lighblue text-3xl rounded-full text-blue">
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </button>
      <div>
        <button v-for="tab in tabs" v-bind:key="tab.id" :class="`focus:outline-none hover:text-blue flex items-center py-2 py-4 hover:bg-lightblue rounded-full mr-auto${ id === tab.id ? 'text-blue' : ''}`">
          <!--FIXME: 正しく表示されない -->
          <font-awesome-icon :icon="`[${tab.iconPre}, ${tab.iconSuf}]`" class="text-2xl mr-4 text-left" />
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
        {iconPre: 'fas', iconSuf: 'fa-home', title: 'Home', id:'home'},
        {iconPre: 'fas', iconSuf: 'fa-hashtag', title: 'Explore', id: 'explore'},
        {iconPre: 'far', iconSuf: 'fa-bell', title: 'Notifications', id: 'notifications'},
        {iconPre: 'far', iconSuf: 'fa-envelope', title: 'Messages', id: 'messages'},
        {iconPre: 'far', iconSuf: 'fa-bookmark', title: 'Bookmarks', id: 'bookmarks'},
        {iconPre: 'fas', iconSuf: 'fa-clipboard-list', title: 'Lists', id: 'lists'},
        {iconPre: 'far', iconSuf: 'fa-user', title: 'Profile', id: 'profile'},
        {iconPre: 'fas', iconSuf: ' fa-ellipsis-h', title: 'More', id: 'more'}
      ]
    }
  }
}
</script>