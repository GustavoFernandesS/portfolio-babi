/**
 * Renders content text, highlighting `{{...}}` markers as pending content.
 * Keeps unfinished copy visible instead of letting it pass as real.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\{\{[^}]*\}\})/g);

  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("{{") && part.endsWith("}}") ? (
          <span className="todo" key={i}>
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
