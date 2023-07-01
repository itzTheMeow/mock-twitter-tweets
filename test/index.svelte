<script lang="ts">
  import { TwitterLightTheme } from "../src/Theme";
  import Tweet from "../src/Tweet.svelte";

  document.body.style.background = TwitterLightTheme.background;
  document.body.style.color = TwitterLightTheme.text;
</script>

<div style="margin-bottom: 3rem">This is a library demo.</div>

<Tweet
  author={{
    name: "Meow",
    username: "itzTheMeow_",
    profile_image_url:
      "https://pbs.twimg.com/profile_images/1250483398889611271/jTE6zCZe_normal.jpg",
  }}
  content="Need me a #SvelteTweet hosted on github.com @Meow."
/>
