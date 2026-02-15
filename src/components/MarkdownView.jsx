import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkFlexibleMarkers from "remark-flexible-markers";

export default function MarkdownView({ content }) {
  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkFlexibleMarkers]}
        rehypePlugins={[rehypeRaw]}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
