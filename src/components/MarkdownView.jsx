import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGithubAlerts from "remark-github-alerts";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkDirective from "remark-directive";
import remarkAdmonitions from "./RemarkAdmonitions";

const components = {
  // 攔截 remark-directive 產生的容器節點
  containerDirective: ({ node, children, ...props }) => {
    // node.name: success, info, warning, danger
    const tagName = node.name;

    return (
      <div className={`alert-block ${tagName}`} {...props}>
        {children}
      </div>
    );
  },
};

export default function MarkdownView({ content }) {
  return (
    <article>
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkFlexibleMarkers,
          remarkGithubAlerts,
          remarkDirective,
          remarkAdmonitions,
        ]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
}
