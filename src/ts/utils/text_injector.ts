export default function textInjector(text: string, elementId: string | Element): Element {
  const element = elementId instanceof Element ? elementId : document.getElementById(elementId);
  element.innerHTML += text;
  return element;
}
