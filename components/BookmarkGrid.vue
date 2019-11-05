<template>
    <div class="grid-x" data-equalizer>
        <div v-bind:class="cssClass" data-equalizer-watch v-for="section in sections">
            <h2>{{ section.Name }}</h2>
            <ul>
                <li v-for="bookmark in section.bookmarks">
                    <img :src="bookmark.ImgUrl"/>
                    <a :href ="bookmark.Url">{{ bookmark.Name}}
                        <small v-if="bookmark.Hotkey">({{bookmark.Hotkey.Label}})</small>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import { GetBookmarkSections, GetBookmarksForPage, GetBookmarksFromSections } from '~/assets/bookmarks.js';
export default {
  props: ['page'],
  data () {
    const bookmarkSections = GetBookmarksForPage(this.page);
      bookmarkSections.filter((item) => item.Name === 'Jenkins')
          .foreach((item, index, arr) => item.Url = "test.com");
      return {
          sections: bookmarkSections,
          cssClass: "cell medium-" + ((12 / bookmarkSections.length).toFixed(0))
      };
  },
}
</script>
