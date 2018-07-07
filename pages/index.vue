<template>
    <div class="cell medium-4" data-equalizer-watch>
        <h2>Not fun</h2>
        <ul>
            <li>
                <img src="/img/inbox.png"/>
                <a id="inbox">Inbox</a>
            </li>
            <li>
                <img src="/img/drive.ico"/>
                <a id="drive">Drive</a>
            </li>
            <li>
                <img src="/img/onedrive.png"/>
                <a id="onedrive">OneDrive</a>
            </li>
            <li>
                <img src="/img/onenote.png"/>
                <a id="onenote">OneNote</a>
            </li>
            <li>
                <img src="/img/keep.png"/>
                <a id="keep">Keep</a>
            </li>
            <li>
                <img src="/img/todoist.png"/>
                <a id="todoist">Todoist</a>
            </li>
            <li>
                <img src="/img/trello.png"/>
                <a id="trello">Trello</a>
            </li>
            <li>
                <img src="/img/pluralsight.ico"/>
                <a id="pluralsight">PluralSight</a>
            </li>
            <li>
                <img src="/img/pocket.png"/>
                <a id="pocket">Pocket</a>
            </li>
        </ul>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
