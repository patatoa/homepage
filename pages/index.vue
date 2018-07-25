<template>
    <div>
    <div class="cell medium-4" data-equalizer-watch v-for="section in sections">
        <h2>{{ section.Name }}</h2>
        <ul>
            <li v-for="bookmark in section.bookmarks">
                <img :src="bookmark.ImgUrl"/>
                <a :href ="bookmark.Url">{{ bookmark.Name}}</a>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>

import { GetBookmarkSections, GetBookmarksForPage, GetBookmarksFromSections } from '~/assets/bookmarks.js';
const bookmarkSections = GetBookmarksForPage('Work');
export default {
  data () {
      return {
          sections: bookmarkSections
      };
  }
}
</script>
