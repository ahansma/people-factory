
const App = {
  init() {
    const personForm = document.querySelector('form')
    personForm.addEventListener('submit', (ev) => this.handleSubmit(ev))
  },

  renderColor(hairColor) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
  },

  renderItem(name, value) {
    const item = document.createElement('li')
    item.innerHTML = `${name}: ${value}`
    return item
  },

  renderList(person) {
    const list = document.createElement('ul')
    Array.from(person).map((input, _i, _formElements) => {
      if (input.value) {
        let value = input.value
        if (input.type === 'color') {
          value = this.renderColor(value).outerHTML
        }
        const li = this.renderItem(input.name, value)
        list.appendChild(li)
      }
    })
    return list
  },

  handleSubmit(ev) {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const list = this.renderList(form.elements)
    details.appendChild(list)
  },
}

App.init()



//object
/*const person = {
    name: 'Seth',
    hairColor: 'blonde',
    handsomenessLevel: 'devilish',
}
//access stuff from object
person.hairColor*/


//we would do this instead of using append child in the handleSubmit function
  /*details.innerHTML = `
    <ul>
      <li>Name: ${personName}</li>
      <li>Hair Color: ${colorDiv.outerHTML}</li>
      <li>Age: ${age}</li>
      <li>Birthplace: ${birthplace}</li>
    </ul>
  `*/

//Homework 1:
  /*const personName = document.createElement('li')
  personName.textContent =  "Name: " + form.personName.value

  const hairColor = form.hairColor.value
  const color = document.createElement('li')
  color.textContent = "Hair Color: "

  const age = document.createElement('li')
  age.textContent = "Age: " + form.age.value

  const birthplace = document.createElement('li')
  birthplace.textContent = "Birthplace: " + form.birthplace.value

  const colorDiv = renderColor(hairColor)
  
  color.appendChild(colorDiv)
  details.appendChild(personName)
  details.appendChild(color)
  details.appendChild(age)
  details.appendChild(birthplace)*/