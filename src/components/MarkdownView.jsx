import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGithubAlerts from "remark-github-alerts";
import remarkFlexibleMarkers from "remark-flexible-markers";

export default function MarkdownView({ content }) {
  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkFlexibleMarkers, remarkGithubAlerts]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
