import { ModalDescription } from "../types/project";

export const renderContent = (desc: ModalDescription) => {
  switch (desc.type) {
    case "heading":
      if (desc.level === 3) {
        return (
          <h3 key={desc.children[0]?.text} className="text-lg font-bold">
            {desc.children.map((child, index) => (
              <span key={index} className={`${child.bold ? "font-bold" : ""}`}>
                {child.text}
              </span>
            ))}
          </h3>
        );
      }
      return null; // Caso queira lidar com outros níveis de heading no futuro

    case "paragraph":
      return (
        <p key={desc.children[0]?.text} className="text-base">
          {desc.children.map((child, index) => (
            <span key={index} className={`${child.bold ? "font-bold" : ""}`}>
              {child.text}
            </span>
          ))}
        </p>
      );

    case "list":
      return (
        <ul key={desc.children[0]?.text} className="list-inside list-disc">
          {desc.children.map((listItem, index) =>
            listItem.type === "list-item" ? (
              <li key={index} className="text-base">
                {listItem.children?.map((child, childIndex) => (
                  <span key={childIndex}>{child.text}</span>
                ))}
              </li>
            ) : null,
          )}
        </ul>
      );

    default:
      return null; // Outros tipos, caso queira adicionar no futuro
  }
};
