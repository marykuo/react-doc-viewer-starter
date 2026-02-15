import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

// 將 ==text== 轉換成 <mark>text</mark>
const transformHighlight = (text) => {
  return text.replace(/==(.*?)==/g, "<mark>$1</mark>");
};

export default function MarkdownView({ content }) {
  return (
    <article>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {transformHighlight(content)}
      </ReactMarkdown>
    </article>
  );
}
