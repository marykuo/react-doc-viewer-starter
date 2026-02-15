import { visit } from "unist-util-visit";

// 把 :::name 轉換成 HTML 標籤
export default function remarkAdmonitions() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const tagName = node.name; // success, info, warning, danger

        // 將 ::: 轉換為 <div class="alert-block success">
        data.hName = "div";
        data.hProperties = {
          className: `alert-block ${tagName}`,
        };
      }
    });
  };
}
