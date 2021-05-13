<template>
  <div id="app" class="flex container h-screen w-full">
    <!-- side nav -->
    <div
      class="
        xl:w-1/5
        border-r border-lighter
        px-1
        xl:px-6
        py-2
        flex flex-col
        justify-between
      "
    >
      <div>
        <button
          class="h-12 w-12 hover:bg-lighblue text-3xl rounded-full text-blue"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </button>
        <div>
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="`focus:outline-none hover:text-blue flex items-center py-2 px-4 hover:bg-lightblue rounded-full mr-auto mb-3 ${
              id === tab.id ? 'text-blue' : ''
            }`"
            @click="id = tab.id"
          >
            <font-awesome-icon
              :prefix="`${tab.iconPrefix}`"
              :icon="`${tab.iconName}`"
              class="text-2xl mr-4 text-left"
            />
            <p class="text-lg font-semibold text-left hidden xl:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
        <button
          class="
            text-white
            bg-blue
            rounded-full
            font-semibold
            focus:outline-none
            w-12
            h-12
            xl:h-auto
            xl:w-full
            p-3
            hover:bg-darkblue
          "
        >
          <p class="hidden xl:block">ツイートする</p>
          <font-awesome-icon prefix="fas" icon="plus" class="xl:hidden" />
        </button>
      </div>
      <div class="xl:w-full relative">
        <button
          class="
            flex
            items-center
            w-full
            hover:bg-lightblue
            rounded-full
            px-4
            p-2
            focus:outline-none
          "
          @click="clickOwnAccount"
        >
          <img
            src="profile.png"
            class="w-10 h-10 rounded-full flex border border-lighter"
          />
          <div class="ml-4">
            <p
              class="hidden xl:block text-sm font-bold leading-tight text-left"
            >
              づだ
            </p>
            <p
              class="
                hidden
                xl:block
                text-sm
                leading-tight
                text-left text-gray-500
              "
            >
              @Zudah228
            </p>
          </div>
          <font-awesome-icon
            prefix="fas"
            icon="angle-down"
            class="hidden xl:block ml-auto text-lg"
          />
        </button>
        <div
          v-if="dropdown === true"
          class="
            absolute
            bottom-0
            right-0
            w-64
            rounded-lg
            shadow-md
            border-lightest
            bg-white
            mb-16
          "
        >
          <button
            class="
              flex
              items-center
              w-full
              hover:bg-lightblue
              p-2
              focus:outline-none
            "
          >
            <img
              src="profile.png"
              class="w-10 h-10 rounded-full flex border border-lighter"
            />
            <div class="ml-4">
              <p class="text-sm font-bold leading-tight text-left">づだ</p>
              <p class="text-sm leading-tight text-left text-gray-500">
                @Zudah228
              </p>
            </div>
            <font-awesome-icon
              prefix="fas"
              icon="check"
              class="ml-auto text-blue"
            />
          </button>
          <button
            class="
              w-full
              text-left
              hover:bg-lightest
              border-t border-lighter
              p-3
              test-sm
              focus:outline-none
            "
            @click="dropdown = false"
          >
            既存のアカウントを追加
          </button>
          <button
            class="
              w-full
              text-left
              hover:bg-lightest
              border-t border-lighter
              p-3
              test-sm
              focus:outline-none
            "
            @click="dropdown = false"
          >
            アカウントを管理
          </button>
          <button
            class="
              w-full
              text-left
              hover:bg-lightest
              border-t border-lighter
              p-3
              test-sm
              focus:outline-none
            "
            @click="dropdown = false"
          >
            @Zudah228からログアウト
          </button>
        </div>
      </div>
    </div>
    <!-- tweet -->
    <div class="w-1/2 h-full"></div>
    <!-- trending -->
    <div
      class="
        w-1/3
        h-full
        border-l border-lighter
        py-2
        px-6
        overflow-scroll
        relative
      "
    >
      <input
        class="pl-12 rounded-full w-full p-2 bg-lighter text-sm"
        placeholder="キーワード検索"
        type="text"
      />
      <font-awesome-icon
        prefix="fas"
        icon="search"
        class="absolute left-0 top-0 mt-5 ml-12 text-sm text-light"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      tabs: [
        { iconPrefix: 'fas', iconName: 'home', title: 'ホーム', id: 'home' },
        {
          iconPrefix: 'fas',
          iconName: 'hashtag',
          title: '話題を検索',
          id: 'explore',
        },
        {
          iconPrefix: 'far',
          iconName: 'bell',
          title: '通知',
          id: 'notifications',
        },
        {
          iconPrefix: 'far',
          iconName: 'envelope',
          title: 'メッセージ',
          id: 'messages',
        },
        {
          iconPrefix: 'far',
          iconName: 'bookmark',
          title: 'ブックマーク',
          id: 'bookmarks',
        },
        {
          iconPrefix: 'fas',
          iconName: 'clipboard-list',
          title: 'リスト',
          id: 'lists',
        },
        {
          iconPrefix: 'far',
          iconName: 'user',
          title: 'プロフィール',
          id: 'profile',
        },
        {
          iconPrefix: 'fas',
          iconName: 'ellipsis-h',
          title: 'もっと見る',
          id: 'more',
        },
      ],
      dropdown: false,
    }
  },
  methods: {
    clickOwnAccount() {
      if (this.dropdown) {
        this.dropdown = false
      } else {
        this.dropdown = true
      }
    },
  },
}
</script>
