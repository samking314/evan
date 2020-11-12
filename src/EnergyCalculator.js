import { Component, useState } from "react";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { EnergyComponent } from "./EnergyComponent";
import { energyCompData } from "./mock/energy";

// TODO: add ability to fill out form for multiple energy comps

export default class EnergyCalculator extends Component {
	render() {
		return (
			<div>
				<EnergyComponent energyCompData={energyCompData} />
			</div>
		);
	}
}
