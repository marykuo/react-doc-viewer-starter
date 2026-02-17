# Markdown 文件範例

這是一個 Markdown 文件範例，展示了如何使用 Markdown 語法來撰寫文件內容。Markdown 是一種輕量級的標記語言，讓你可以使用簡單的符號來格式化文字。

## 排版

### 標題

```markdown
# 這是 H1 標題

## 這是 H2 標題

### 這是 H3 標題

#### 這是 H4 標題

##### 這是 H5 標題

###### 這是 H6 標題
```

---

### 強調

```markdown
**粗體**
__粗體__

*斜體*
_斜體_

~~這是刪除文字~~
```

👇 以上範例結果為：

**粗體**
__粗體__

*斜體*
_斜體_

~~這是刪除文字~~

---

### 螢光筆

```markdown
=r=紅色螢光筆==
=o=黃色螢光筆==
=y=黃色螢光筆==
==黃色螢光筆==
=g=綠色螢光筆==
=c=青色螢光筆==
=b=藍色螢光筆==
=p=紫色螢光筆==
=x=灰色螢光筆==
```

👇 以上範例結果為：

=r=紅色螢光筆==
=o=黃色螢光筆==
=y=黃色螢光筆==
=g=綠色螢光筆==
=c=青色螢光筆==
=b=藍色螢光筆==
=p=紫色螢光筆==
=x=灰色螢光筆==

---

### 文字顏色

```markdown
<font color="#96999A"> 灰色 </font>
<font color="#aa57fc"> 紫色 </font>
<font color="#449df9"> 藍色 </font>
<font color="#fd4340"> 紅色 </font>
<font color="#F7A004"> 橘色 </font>
```

<font color="#96999A"> 灰色 </font>
<font color="#aa57fc"> 紫色 </font>
<font color="#449df9"> 藍色 </font>
<font color="#fd4340"> 紅色 </font>
<font color="#F7A004"> 橘色 </font>

---

### 階層清單

```markdown
- 無序清單
- 無序清單
  - 無序清單子清單
    - 無序清單子子清單

1. 有序清單
2. 有序清單
   1. 有序清單子清單
      1. 有序清單子子清單
```

👇 以上範例結果為：

- 無序清單
- 無序清單
  - 無序清單子清單
    - 無序清單子子清單

1. 有序清單
2. 有序清單
   1. 有序清單子清單
      1. 有序清單子子清單

---

### 表格

語法

```markdown
| 產品名稱 | 單價 | 庫存數量 |
| :------- | ---: | :------: |
| 產品 A   |  $10 |   100    |
| 產品 B   |  $20 |    50    |
| 產品 C   |  $30 |    20    |
```

顯示效果

| 產品名稱 | 單價 | 庫存數量 |
| :------- | ---: | :------: |
| 產品 A   |  $10 |   100    |
| 產品 B   |  $20 |    50    |
| 產品 C   |  $30 |    20    |

---

### 引用區塊

```markdown
> 引用區塊
>
> > 子引用區塊
> >
> > > 子子引用區塊
```

👇 以上範例結果為：

> 引用區塊
>
> > 子引用區塊
> >
> > > 子子**引用區塊**

---

### 色塊

:::success
text
:::

:::info
text
:::

:::warning
text
:::

:::danger
text
:::

---

### GitHub Alert

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

---

## 嵌入

### 程式碼

```javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

```java
public class MyService {
    private final static PI = 3.142;

    public Sting execute(String loginMemberId) {
        log.info("execute(): {}", loginMemberId);
    }

}
```

---

### 插入圖片

```markdown
![圖片說明](/vite.jpg)

![{small} 圖片說明](/vite.jpg)

![{medium} 圖片說明](/vite.jpg)

![{large} 圖片說明](/vite.jpg)
```

---

### PDF

```markdown
<iframe
  src="/docs/spec.pdf"
  width="100%"
  height="600px"
  style="border: none; border-radius: 8px;"
></iframe>
```

<iframe
  src="/docs/spec.pdf"
  width="100%"
  height="600px"
  style="border: none; border-radius: 8px;"
></iframe>
