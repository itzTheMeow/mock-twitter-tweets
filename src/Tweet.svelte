<script lang="ts">
  import { TwitterLightTheme, themeString, type TwitterTheme } from "Theme";

  export let author: { name: string; username: string; profile_image_url: string };
  /** Theme to use for tweet rendering. Defaults to `TwitterLightTheme`. */
  export let theme: TwitterTheme = TwitterLightTheme;
  /** Additional style to apply to the container. */
  export let style = "";

  let author_url = "";
  $: author_url = `https://twitter.com/${author.username}`;
</script>

<div class="tweet-container" style={themeString(theme) + style}>
  <div class="tweet-header">
    <a href={author_url} target="_blank" rel="noopener noreferrer">
      <img
        alt={author.username}
        height={48}
        width={48}
        class="tweet-header-avatar"
        src={author.profile_image_url}
      />
    </a>
    <a href={author_url} target="_blank" rel="noopener noreferrer" class="tweet-header-author">
      <span class="tweet-header-author-name" title={author.name}>
        {author.name}
      </span>
      <span class="tweet-header-author-username" title="@{author.username}">
        @{author.username}
      </span>
    </a>
  </div>
</div>

<style>
  .tweet-container {
    background: var(--background);
    color: var(--text);
  }
  .tweet-header {
    display: flex;
    align-items: center;
  }
  .tweet-header-avatar {
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .tweet-header-author {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    text-decoration-line: none;
  }
  .tweet-header-author-name {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--textBold);
    margin-top: 0.25rem;
    line-height: 1.25rem;
  }
  .tweet-header-author-username {
    color: var(--textMuted);
  }
</style>
