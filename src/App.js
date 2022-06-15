import Intro from './Components/Intro/intro';
import About from './Components/about/about';
import ProductList from './Components/productList/ProductList';
import Contact from './Components/contact/Contact';
function App() {
	return (
		<div className='App'>
			<Intro />
			<About />
			<ProductList />
			<Contact />
		</div>
	);
}

export default App;
