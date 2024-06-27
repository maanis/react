const mainContainer = document.querySelector('#root')

function customRender(obj, cont){
    const newElem = document.createElement(obj.type)
    newElem.setAttribute(obj.props.attr, obj.props.href)
    newElem.innerHTML = obj.children

    cont.append(newElem)
}

let obj = {
    type: "a",
    props: {
        attr: 'href',
        href: 'www.google.com',
        target: '_blank'
    },
    children: 'Visit Google'
}

customRender(obj, mainContainer)