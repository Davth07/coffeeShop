import "./App.css";
import { MenuCard, type menuProps } from "./components/Menu/menu.components";

function App() {
	const menuList: menuProps[] = [
		{
			id: 1,
			menuItem: "Cinammon roll",
			price: 25,
		},
		{
			id: 2,
			menuItem: "Coffee",
			price: 30,
			size: "Large",
		},
		{
			id: 3,
			menuItem: "Tea",
			price: 30,
			size: "Medium",
		},
		{
			id: 4,
			menuItem: "Muffin",
			price: 20,
			category: "Gluten free",
		},
		{
			id: 5,
			menuItem: "Ice coffee",
			price: 30,
			size: "Small",
		},
	];

	return (
		<div className="App">
			<h1>Menu</h1>
			<MenuCard items={menuList} />
		</div>
	);
}

export default App;
