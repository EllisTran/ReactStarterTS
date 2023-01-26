import Accordion from "../components/Accordion";

export interface ItemProp {
  id: string;
  label: string;
  content: string;
}
const AccordionPage = (): JSX.Element => {
  const items: ItemProp[] = [
    {
      id: "fdafda",
      label: "Can i use react on a project",
      content: "You can use it on any project",
    },
    {
      id: "fdsfdsaaa",
      label: "Can i use JS on a project",
      content: "You can use it on any project",
    },
    {
      id: "fdavzvzcvcx",
      label: "Can i use CSS on a project",
      content: "You can use it on any project",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
export default AccordionPage;
