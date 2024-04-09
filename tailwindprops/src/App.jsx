import './App.css'
import Card from './components/Card'

function App() {

  const url = [
    {
      url1: "https://images.pexels.com/photos/4086274/pexels-photo-4086274.jpeg?auto=compress&cs=tinysrgb&w=600",

      url2: "https://images.pexels.com/photos/5483155/pexels-photo-5483155.jpeg?auto=compress&cs=tinysrgb&w=600",

    },
  ];
   /*   */

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Maddy" post="Front-end Engineer" img={url[0].url1} />
      <Card username="Jason" post="Back-end Engineer" img={url[0].url2} />
      <Card />
    </>
  );
}

export default App
