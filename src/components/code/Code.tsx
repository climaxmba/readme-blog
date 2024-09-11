import { Prism } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./code.module.scss";

export default function Code({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const language = className ? className.split("-")[1] : "";

  if (!language) return <code className={styles.inline}>{children}</code>;

  return (
    <Prism
      language={language}
      style={darcula}
      customStyle={{ borderRadius: 12 }}
      showLineNumbers={true}
    >
      {children as string}
    </Prism>
  );
}
