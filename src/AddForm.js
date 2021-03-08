import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './AddForm.css';
import { capitalize } from './helpers'

const AddForm = ({addNewFood}) => {
	const initialFormData = {
		foodType: "",
		id: "",
		name: "",
		description: "",
		recipe: "",
		serve: ""
	}

	const [formData, setFormData] = useState(initialFormData);
	const history = useHistory();

	const handleChange = (e) => {
		const {name, value} = e.target; 
		setFormData(data => ({...data, [name]: value}))
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewFood(formData);		
		history.push(`/${formData.foodType}/${formData.id}`);
		setFormData(initialFormData);
	}

	return (
		<div className="AddForm">
			<h2>Add New Food to Menu</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="foodType">Food Type</Label>
					<Input type="select" name="foodType" id="foodType" onChange={handleChange}>
						<option key="disabledOpt" value="disabledOpt" disabled selected>--select food type ---</option>
						<option key="snack" value="snacks">Snack</option>
						<option key="drink" value="drinks">Drink</option>						
					</Input>
				</FormGroup>

				{Object.keys(formData).map(key => {
					if (key !== "foodType") {
						return (
							<FormGroup>
								<Label for={key}>{capitalize(key)}</Label>
								<Input type="text" name={key} id={key} value={formData[key]} placeholder={`menu ${key}`} onChange={handleChange} />
							</FormGroup>
						)
					}
				})}
				{/* <FormGroup>
					<Label for="id">Id</Label>
					<Input type="text" name="id" id="id" value={formData.id} placeholder="menu id" onChange={handleChange}/>
				</FormGroup>

				<FormGroup>
					<Label for="name">Name</Label>
					<Input type="text" name="name" id="name" value={formData.name} placeholder="name of the menu" onChange={handleChange}/>
				</FormGroup>

				<FormGroup>
					<Label for="description">Description</Label>
					<Input type="text" name="description" id="description" value={formData.description} placeholder="menu description" onChange={handleChange}/>
				</FormGroup>

				<FormGroup>
					<Label for="recipe">Recipe</Label>
					<Input type="text" name="recipe" id="recipe" value={formData.recipe} placeholder="menu recipe" onChange={handleChange} />
				</FormGroup>

				<FormGroup>
					<Label for="serve">Serve</Label>
					<Input type="text" name="serve" id="serve" value={formData.serve} placeholder="serve" onChange={handleChange} />
				</FormGroup> */}
				<Button className="submitBtn">Submit</Button>
			</Form>
		</div>
	)
}

export default AddForm;