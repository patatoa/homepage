<template>
    <div>
        <div class="row align-right" style="display: flex; padding-bottom: 3em;">
            <div class="column small-4">
                <a v-if="page === 'Home'" href="/">View Work</a>
                <a v-else href="/home">View Home</a>
            </div>
        </div>
        <div class="grid-x" data-equalizer>
            <div v-bind:class="cssClass" data-equalizer-watch v-for="section in sections">
                <h2>{{ section.Name }}</h2>
                <ul>
                    <li v-for="bookmark in section.bookmarks">
                        <img :src="bookmark.ImgUrl"/>
                        <a :href ="bookmark.Url">{{ bookmark.Name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import { GetBookmarkSections, GetBookmarksForPage, GetBookmarksFromSections } from '~/assets/bookmarks.js';
export default {
  props: ['page'],
  data () {
    let bookmarkSections = GetBookmarksForPage(this.page);
      bookmarkSections[1].bookmarks.filter((item) => item.Name == "Jenkins")
          .forEach((item, index, arr) => item.Url = process.env.JENKINS_URL);
      return {
          sections: bookmarkSections,
          cssClass: "cell medium-" + ((12 / bookmarkSections.length).toFixed(0))
      };
  },
}
</script>
