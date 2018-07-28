<template>
<div>
    <Header></Header>
    <bookmarkGrid page="Work"></bookmarkGrid>
</div>
</template>

<script>

import bookmarkGrid from "@/components/BookmarkGrid";
import Header from '@/components/Header';
export default {
  components: {
    Header,
      bookmarkGrid,
  }
}
</script>
