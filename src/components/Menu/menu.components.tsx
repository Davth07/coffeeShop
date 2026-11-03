import "./menuCard.styles.css";

export type menuProps = {
	id: number;
	menuItem: string;
	price: number;
	category?: string;
	size?: string;
};

export function MenuCard({ items }: { items: menuProps[] }) {
	if (items.length === 0) {
		return <p>No items available</p>;
	}

	return (
		<div className="menu-card-container">
			{items.map(({ id, menuItem, price, category, size }) => (
				<div key={id} className="menu-item">
					<h2>{menuItem}</h2>
					<p>{price}kr</p>
					{}
					{category && <span className="category-tag">{category}</span>}
					{}
					{size && <span className="size-tag">{size}</span>}
				</div>
			))}
		</div>
	);
}
