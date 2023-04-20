import "./topMenu.css";

const DragMenu = () => {
	return (
		<div className="navbar">
			<a href="#StartBattle">Start Battle</a>
			<a href="#CreateNPC">Create NPC</a>
			<a href="#SearchNPC">Search NPC</a>
			<div className="dropdown">
				<button className="dropbtn">Dropdown
				</button>
				<div className="dropdown-content">
					<a href="#Link1">Link 1</a>
					<a href="#Link2">Link 2</a>
					<a href="#Link3">Link 3</a>
				</div>
			</div>
		</div>
	);
}

export default DragMenu;