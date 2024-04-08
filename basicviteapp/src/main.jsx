import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const Elements =  {
  type: 'a',
  props: {
    href: 'https://amazon.com',
    target: '_blank'
  },
  text: "click here"
}

const renderElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'visit google'
)

function MyApp(){
    return(
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(

    <>
     <App/>
     <MyApp/>
    </>
)
