import { Component } from 'react';
import { EnergyComponent } from './EnergyComponent';
import { energyCompData } from './../mock/energy';

export default class EnergyForm extends Component {
	render() {
		return (
			<EnergyComponent energyCompData={energyCompData} />
		);
	}
}
