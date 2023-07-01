<script lang="ts">
  import { TwitterLightTheme, themeString, type TwitterTheme } from "Theme";
  import { escapeHTML } from "utils";

  /** The tweet author. */
  export let author: { name: string; username: string; profile_image_url: string };
  /** The content of the tweet. */
  export let content: string;
  /** Theme to use for tweet rendering. Defaults to `TwitterLightTheme`. */
  export let theme: TwitterTheme = TwitterLightTheme;
  /** Additional style to apply to the container. */
  export let style = "";

  const linkStyle = `style="color:var(--link);text-decoration:none"`;

  let author_url = "";
  $: author_url = `https://twitter.com/${author.username}`;

  let formattedContent = "";
  $: formattedContent = escapeHTML(content)
    .replace(
      /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/,
      (match) =>
        `<a ${linkStyle} href="${match}" target="_blank">${match.replace(
          /^http(s?):\/\//i,
          ""
        )}</a>`
    )
    .replace(
      /\B\@([\w\-]+)/gim,
      (match) =>
        `<a ${linkStyle} href="https://twitter.com/${match.replace(
          "@",
          ""
        )}" target="_blank">${match}</a>`
    )
    .replace(
      /(#+[a-zA-Z0-9(_)]{1,})/g,
      (match) =>
        `<a ${linkStyle} href="https://twitter.com/hashtag/${match.replace(
          "#",
          ""
        )}" target="_blank">${match}</a>`
    );
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
  <div class="tweet-content">
    {@html formattedContent}
  </div>
</div>

<style>
  .tweet-container {
    background: var(--background);
    color: var(--text);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue, Helvetica, sans-serif;
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
    align-items: center;
  }
  .tweet-header-author {
    display: flex;
    flex-direction: column;
    margin-left: 0.25rem;
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

  .tweet-content {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    white-space: pre-wrap;
    font-size: 1.125rem;
  }
</style>
