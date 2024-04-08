function customRender(El, cont)
{
  const domEl = document.createElement(El.type)
  domEl.innerHTML = El.text

  for (const prop in El.props) {
    domEl.setAttribute(prop, El.props[prop])
  }

  cont.appendChild(domEl)
}
const Elements =  {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  text: "click here"
}

const container = document.getElementById('root')

customRender(Elements, container)