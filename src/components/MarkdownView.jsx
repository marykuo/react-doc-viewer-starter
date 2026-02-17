import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import remarkGithubAlerts from "remark-github-alerts";
import remarkFlexibleMarkers from "remark-flexible-markers";
import remarkDirective from "remark-directive";
import remarkAdmonitions from "./RemarkAdmonitions";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
  // 攔截 code 標籤
  code({ inline, className, children, ...props }) {
    // 取得語言名稱，例如 "language-js" -> "js"
    const match = /language-(\w+)/.exec(className || "");

    return !inline && match ? (
      // 程式碼區塊 (Block)
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      // 行內代碼 (Inline)
      <code className="inline-code" {...props}>
        {children}
      </code>
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
