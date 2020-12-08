import { useState, Component } from "react";
import { DropdownInput, NumberInput } from "./common";
import { energyCompData } from "./../mock/energy";
import Button from "@material-ui/core/Button";

class EnergyForm extends Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}
	handleSave(event) {
		event.preventDefault();
	}
	render() {
		return (
			<div className="center-component">
				<form onSubmit={this.handleSave}>
					<div data-testid="energy-comp" className="row-component">
						<DropdownInput dropdownData={energyCompData} />
						<NumberInput style={{ marginLeft: 10 }} />
					</div>
					<Button type="submit">Calculate</Button>
				</form>
			</div>
		);
	}
}

export default EnergyForm;
